'use strict';
const { Contract } = require('fabric-contract-api');

class HerbTraceChaincode extends Contract {

    // Initialize ledger with sample data
    async InitLedger(ctx) {
        console.log('InitLedger: Starting ledger initialization');

        const batches = [
            {
                id: 'ASHWA-2025-09-07-001',
                herbType: 'Ashwagandha',
                origin: 'Rajasthan, India',
                harvestDate: '2025-09-07',
                quantity: 100,
                qualityGrade: 'A',
                farmer: 'Ramesh Kumar',
                certifications: ['Organic', 'Fair Trade'],
                currentLocation: 'Processing Facility - Mumbai',
                status: 'Processing',
                timestamp: new Date().toISOString(),
                previousHash: ''
            }
        ];

        let successCount = 0;

        for (const batch of batches) {
            try {
                // CRITICAL FIX: Convert object to string, then to Buffer
                const batchData = Buffer.from(JSON.stringify(batch));
                await ctx.stub.putState(batch.id, batchData);
                console.log(`InitLedger: Successfully stored batch ${batch.id}`);
                successCount++;
            } catch (error) {
                console.error(`InitLedger: Failed to store batch ${batch.id}:`, error);
                throw new Error(`Failed to initialize batch ${batch.id}: ${error.message}`);
            }
        }

        const result = { message: 'Ledger initialized', count: successCount };
        console.log('InitLedger: Completed with result:', result);
        return JSON.stringify(result);
    }

    // Test storage function
    async testStore(ctx) {
        console.log('testStore: Starting test');

        const testKey = 'TEST_KEY';
        const testValue = 'TEST_VALUE';

        try {
            // CRITICAL FIX: Store as Buffer
            await ctx.stub.putState(testKey, Buffer.from(testValue));
            console.log(`testStore: Stored ${testKey} = ${testValue}`);

            const result = {
                message: 'Test storage completed',
                stored: testValue,
                key: testKey
            };
            console.log('testStore: Result:', result);
            return JSON.stringify(result);

        } catch (error) {
            console.error('testStore: Error:', error);
            throw new Error(`Test storage failed: ${error.message}`);
        }
    }

    // Create a new herb batch
    async createBatch(ctx, id, herbType, origin, harvestDate, quantity, qualityGrade, farmer, certifications, currentLocation) {
        console.log(`createBatch: Creating batch ${id}`);

        // Check if batch already exists
        const existingBatch = await ctx.stub.getState(id);
        if (existingBatch && existingBatch.length > 0) {
            throw new Error(`Batch with ID ${id} already exists`);
        }

        // Parse certifications (expecting JSON string)
        let certArray = [];
        try {
            certArray = JSON.parse(certifications);
        } catch (error) {
            throw new Error('Certifications must be a valid JSON array');
        }

        const batch = {
            id,
            herbType,
            origin,
            harvestDate,
            quantity: parseInt(quantity),
            qualityGrade,
            farmer,
            certifications: certArray,
            currentLocation,
            status: 'Harvested',
            timestamp: new Date().toISOString(),
            previousHash: ''
        };

        // CRITICAL FIX: Convert to Buffer properly
        const batchData = Buffer.from(JSON.stringify(batch));
        await ctx.stub.putState(id, batchData);

        console.log(`createBatch: Successfully created batch ${id}`);
        return JSON.stringify(batch);
    }

    // Update batch location and status
    async updateBatch(ctx, id, newLocation, newStatus, updatedBy) {
        console.log(`updateBatch: Updating batch ${id}`);

        const batchBytes = await ctx.stub.getState(id);
        if (!batchBytes || batchBytes.length === 0) {
            throw new Error(`The herb batch ${id} does not exist`);
        }

        // CRITICAL FIX: Convert Buffer back to object properly
        const batch = JSON.parse(batchBytes.toString());

        // Create history entry
        const historyEntry = {
            id: batch.id,
            herbType: batch.herbType,
            origin: batch.origin,
            harvestDate: batch.harvestDate,
            quantity: batch.quantity,
            qualityGrade: batch.qualityGrade,
            farmer: batch.farmer,
            certifications: batch.certifications,
            currentLocation: batch.currentLocation,
            status: batch.status,
            timestamp: batch.timestamp,
            previousHash: batch.previousHash,
            updatedBy: updatedBy,
            updateTimestamp: new Date().toISOString()
        };

        // Update current batch
        batch.currentLocation = newLocation;
        batch.status = newStatus;
        batch.timestamp = new Date().toISOString();
        batch.previousHash = Buffer.from(JSON.stringify(historyEntry)).toString('base64');

        // CRITICAL FIX: Store updated batch as Buffer
        const updatedBatchData = Buffer.from(JSON.stringify(batch));
        await ctx.stub.putState(id, updatedBatchData);

        console.log(`updateBatch: Successfully updated batch ${id}`);
        return JSON.stringify(batch);
    }

    // Query batch by ID
    async queryBatch(ctx, id) {
        console.log(`queryBatch: Querying batch ${id}`);

        const batchBytes = await ctx.stub.getState(id);
        if (!batchBytes || batchBytes.length === 0) {
            throw new Error(`The herb batch ${id} does not exist`);
        }

        // CRITICAL FIX: Convert Buffer to string properly
        const batch = JSON.parse(batchBytes.toString());
        console.log(`queryBatch: Found batch ${id}`);
        return JSON.stringify(batch);
    }

    // Query batch history using rich queries
    async queryBatchHistory(ctx, id) {
        console.log(`queryBatchHistory: Getting history for batch ${id}`);

        // First check if batch exists
        const batchBytes = await ctx.stub.getState(id);
        if (!batchBytes || batchBytes.length === 0) {
            throw new Error(`The herb batch ${id} does not exist`);
        }

        // Get history iterator
        const historyIterator = await ctx.stub.getHistoryForKey(id);
        const history = [];

        let result = await historyIterator.next();
        while (!result.done) {
            const record = {
                txId: result.value.txId,
                timestamp: result.value.timestamp,
                isDelete: result.value.isDelete
            };

            if (result.value.value && result.value.value.length > 0) {
                // CRITICAL FIX: Handle Buffer conversion properly
                record.value = JSON.parse(result.value.value.toString());
            }

            history.push(record);
            result = await historyIterator.next();
        }

        await historyIterator.close();
        console.log(`queryBatchHistory: Found ${history.length} history entries for batch ${id}`);
        return JSON.stringify(history);
    }

    // Get all batches
    async getAllBatches(ctx) {
        console.log('getAllBatches: Starting query');

        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');

        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
                record.key = result.value.key;
                allResults.push(record);
            } catch (err) {
                console.error(`getAllBatches: Error parsing record for key ${result.value.key}:`, err);
            }
            result = await iterator.next();
        }

        await iterator.close();
        console.log(`getAllBatches: Found ${allResults.length} batches`);
        return JSON.stringify(allResults);
    }

    // Query batches by herb type
    async queryBatchesByHerbType(ctx, herbType) {
        console.log(`queryBatchesByHerbType: Searching for ${herbType}`);

        const queryString = {
            selector: {
                herbType: herbType
            }
        };

        const iterator = await ctx.stub.getQueryResult(JSON.stringify(queryString));
        const results = [];

        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
                record.key = result.value.key;
                results.push(record);
            } catch (err) {
                console.error('queryBatchesByHerbType: Error parsing record:', err);
            }
            result = await iterator.next();
        }

        await iterator.close();
        console.log(`queryBatchesByHerbType: Found ${results.length} batches of ${herbType}`);
        return JSON.stringify(results);
    }

    // Query batches by farmer
    async queryBatchesByFarmer(ctx, farmer) {
        console.log(`queryBatchesByFarmer: Searching for batches by ${farmer}`);

        const queryString = {
            selector: {
                farmer: farmer
            }
        };

        const iterator = await ctx.stub.getQueryResult(JSON.stringify(queryString));
        const results = [];

        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
                record.key = result.value.key;
                results.push(record);
            } catch (err) {
                console.error('queryBatchesByFarmer: Error parsing record:', err);
            }
            result = await iterator.next();
        }

        await iterator.close();
        console.log(`queryBatchesByFarmer: Found ${results.length} batches by ${farmer}`);
        return JSON.stringify(results);
    }
}

module.exports = HerbTraceChaincode;