'use strict';
const express = require('express');
const cors = require('cors');
// We will add the Fabric SDK logic later
// const { Gateway, Wallets } = require('fabric-network');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Placeholder route for getting batch history
app.get('/api/batch/:id', async (req, res) => {
    const batchId = req.params.id;
    console.log(`Querying for batch: ${batchId}`);

    // TODO: Connect to the blockchain and call the 'queryBatchHistory' smart contract
    // For now, we'll return mock data.
    const mockData = {
        batchID: batchId,
        species: 'Ashwagandha',
        owner: 'FarmerCoopA',
        status: 'Harvested',
        history: [
            {
                eventType: 'Collection',
                timestamp: new Date().toISOString(),
                details: { collectorID: 'FARMER01', latitude: '19.0760', longitude: '72.8777' }
            }
        ]
    };
    res.json(mockData);
});

app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
});