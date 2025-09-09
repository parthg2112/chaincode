# Ayurvedic Herb Traceability Blockchain

This project provides a complete end-to-end system for tracking Ayurvedic herbs from the point of collection to the final consumer product, using a permissioned blockchain for transparency, trust, and traceability.

---

## 🚩 Problem

The Ayurvedic herb supply chain is fragmented and lacks transparency, making it difficult to:

- Verify authenticity and quality  
- Ensure ethical and sustainable sourcing  
- Prevent adulteration and fraud

---

## ✅ Solution

We address these issues by building an immutable, transparent, and verifiable system on a permissioned blockchain:

- **🌍 Geo-tagging at Harvest:** Farmers log each harvest with GPS coordinates and timestamps.
- **📦 Immutable History:** Processing, lab testing, logistics, and every step are logged permanently on-chain.
- **🔍 Consumer Transparency:** A QR code on the final product links to a detailed, blockchain-backed lifecycle report.

---

## 🧰 Tech Stack

| Component       | Technology                                |
|----------------|--------------------------------------------|
| Blockchain      | Hyperledger Fabric                         |
| Smart Contracts | JavaScript (Node.js Chaincode)             |
| API Server      | Node.js, Express.js                        |
| Frontend        | Next.js, React, TypeScript, Tailwind CSS   |
| Package Manager | [Bun](https://bun.sh/)                     |

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have the following installed on your system:

- **[Docker + Docker Compose](https://www.docker.com/products/docker-desktop/)** – Required to run the Hyperledger Fabric network.
- **[Node.js](https://nodejs.org/)** (v18 or later) – For running the API and frontend.
- **[Bun](https://bun.sh/)** – Modern package manager for JavaScript (Install using: `npm install -g bun`)
- **Git** – For cloning the repository.

---

### 🛠️ Setup Instructions

> ⚠️ Note: This project builds on top of the official `fabric-samples` repo. You’ll be cloning that and adding components in place.

#### 1. Clone this repository

```bash
git clone https://github.com/parthg2112/chainmasters
cd fabric-samples

cd test-network

# Step 1: Start the network and create a default channel
./network.sh up createChannel

# Step 2: Deploy your smart contract (chaincode)
./network.sh deployCC -ccn herbtrace -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript

---

# From the root of the repository
cd api-server

# Install dependencies using Bun
bun install

# Start the API server
bun run index.js (or node index.js)

---

# From the root of the repository
cd chainmasters

# Install dependencies
bun install

# Start the development server
bun dev
```

## 📁 Project Structure
```plaintext
fabric-samples/
├── api-server/              # Express API server for blockchain interaction
├── next-app/            # Next.js frontend application
├── test-network/            # Hyperledger Fabric test network scripts
├── asset-transfer-basic/    # Chaincode (JavaScript smart contract)
├── config/
├── bin/