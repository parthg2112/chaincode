# Ayurvedic Herb Traceability Blockchain

End-to-end system for tracking Ayurvedic herbs from collection to the final consumer product on a permissioned blockchain (Hyperledger Fabric), providing transparency and verifiable provenance across the supply chain.

## Features

- Geo-tagged harvest logging: farmers record batches with GPS coordinates and timestamps
- Immutable on-chain history for collection, processing, lab testing, and logistics
- HerbTraceability chaincode (JavaScript) managing herb batches, quality grades, certifications, and status transitions
- Role-based web dashboards for farmer, manufacturer, certifier, and customer
- QR code scanning with a blockchain-backed lifecycle report and transaction timeline
- Consumer-facing batch lookup by batch ID

## Tech Stack

Hyperledger Fabric, Node.js (fabric-contract-api chaincode), Express, Next.js, React, TypeScript, Tailwind CSS, Bun

## Setup

Prerequisites: Docker and Docker Compose, Node.js 18+, Bun (`npm install -g bun`), Git.

1. Start the Fabric test network and deploy the chaincode:

```bash
cd test-network
./network.sh up createChannel
./network.sh deployCC -ccn herbtrace -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript
```

2. Run the API server:

```bash
cd api-server
bun install
bun run index.js
```

Note: the API server currently returns mock data; Fabric SDK integration is in progress.

3. Run the frontend:

```bash
cd next-app
bun install
bun dev
```

## Project Structure

```
chaincode/
├── asset-transfer-basic/   # Chaincode (herbTraceability smart contract)
├── api-server/             # Express API for blockchain interaction
├── next-app/               # Next.js frontend
├── test-network/           # Hyperledger Fabric test network scripts
└── ci/                     # CI configuration
```

Based on the upstream `fabric-samples` repository.
