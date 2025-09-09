/*
 * SPDX-License-Identifier: Apache-2.0
*/

'use strict';
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

const { Context } = require('fabric-contract-api');
const { ChaincodeStub } = require('fabric-shim');

const HerbTraceability = require('../lib/herbTraceability.js');

let assert = sinon.assert;
chai.use(sinonChai);

describe('Herb Traceability Contract Tests', () => {
    let transactionContext, chaincodeStub, herbBatch;
    beforeEach(() => {
        transactionContext = new Context();
        chaincodeStub = sinon.createStubInstance(ChaincodeStub);
        transactionContext.setChaincodeStub(chaincodeStub);

        chaincodeStub.putState.callsFake((key, value) => {
            if (!chaincodeStub.states) {
                chaincodeStub.states = {};
            }
            chaincodeStub.states[key] = value;
        });

        chaincodeStub.getState.callsFake(async (key) => {
            let ret;
            if (chaincodeStub.states) {
                ret = chaincodeStub.states[key];
            }
            return Promise.resolve(ret);
        });

        herbBatch = {
            batchID: 'TEST-BATCH-01',
            species: 'Tulsi',
            collectorID: 'FARMER-T1',
            latitude: '20.5937',
            longitude: '78.9629',
        };
    });

    describe('Test createHerbBatch', () => {
        it('should return success on createHerbBatch', async () => {
            let contract = new HerbTraceability();
            await contract.createHerbBatch(transactionContext, herbBatch.batchID, herbBatch.species, herbBatch.collectorID, herbBatch.latitude, herbBatch.longitude);

            let ret = JSON.parse((await chaincodeStub.getState(herbBatch.batchID)).toString());
            expect(ret.batchID).to.eql(herbBatch.batchID);
            expect(ret.owner).to.eql(herbBatch.collectorID);
            expect(ret.history.length).to.equal(1);
            expect(ret.history[0].eventType).to.equal('Collection');
        });

        it('should throw an error for a batch that already exists', async () => {
            let contract = new HerbTraceability();
            await contract.createHerbBatch(transactionContext, herbBatch.batchID, herbBatch.species, herbBatch.collectorID, herbBatch.latitude, herbBatch.longitude);

            try {
                await contract.createHerbBatch(transactionContext, herbBatch.batchID, herbBatch.species, herbBatch.collectorID, herbBatch.latitude, herbBatch.longitude);
                assert.fail('createHerbBatch should have failed');
            } catch (err) {
                expect(err.message).to.equal(`The herb batch ${herbBatch.batchID} already exists`);
            }
        });
    });

    describe('Test queryBatchHistory', () => {
        it('should return success on queryBatchHistory', async () => {
            let contract = new HerbTraceability();
            await contract.createHerbBatch(transactionContext, herbBatch.batchID, herbBatch.species, herbBatch.collectorID, herbBatch.latitude, herbBatch.longitude);

            const ret = await contract.queryBatchHistory(transactionContext, herbBatch.batchID);
            const batch = JSON.parse(ret);
            expect(batch.batchID).to.equal(herbBatch.batchID);
        });

        it('should return error for a non-existent batch', async () => {
            let contract = new HerbTraceability();
            try {
                await contract.queryBatchHistory(transactionContext, 'NON-EXISTENT-BATCH');
                assert.fail('queryBatchHistory should have failed');
            } catch (err) {
                expect(err.message).to.equal('The herb batch NON-EXISTENT-BATCH does not exist');
            }
        });
    });

    describe('Test addHistoryEvent', () => {
        it('should return success on addHistoryEvent', async () => {
            let contract = new HerbTraceability();
            await contract.createHerbBatch(transactionContext, herbBatch.batchID, herbBatch.species, herbBatch.collectorID, herbBatch.latitude, herbBatch.longitude);

            const labResults = JSON.stringify({
                labID: 'LAB01',
                moisture: '7.5%',
                pesticides: '0.02ppm'
            });

            await contract.addHistoryEvent(transactionContext, herbBatch.batchID, 'QualityTest', 'LabCorp', labResults);

            let ret = JSON.parse((await chaincodeStub.getState(herbBatch.batchID)).toString());
            expect(ret.history.length).to.equal(2);
            expect(ret.owner).to.equal('LabCorp');
            expect(ret.status).to.equal('QualityTest');
            expect(ret.history[1].eventType).to.equal('QualityTest');
            expect(ret.history[1].details.labID).to.equal('LAB01');
        });

        it('should return error when adding an event to a non-existent batch', async () => {
            let contract = new HerbTraceability();
            try {
                await contract.addHistoryEvent(transactionContext, 'NON-EXISTENT-BATCH', 'QualityTest', 'LabCorp', '{}');
                assert.fail('addHistoryEvent should have failed');
            } catch (err) {
                expect(err.message).to.equal('The herb batch NON-EXISTENT-BATCH does not exist');
            }
        });
    });
});