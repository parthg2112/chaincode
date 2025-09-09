Getting StartedFollow these instructions to set up and run the complete project on your local machine.PrerequisitesDocker and Docker ComposeNode.js (v18 or higher)Git1. Clone the RepositoryClone this project which is built upon the official Hyperledger Fabric samples.git clone https://github.com/hyperledger/fabric-samples.git
cd fabric-samples(Note: Replace the above with your repository URL once you host it on GitHub/GitLab)2. Setup & RunThe full application requires three separate terminal windows.Terminal 1: Start the Blockchain NetworkThis terminal will run the Hyperledger Fabric network and deploy our smart contract.# Navigate to the test network directory
cd test-network

# Bring the network up, create a channel, and deploy the chaincode
./network.sh up createChannel
./network.sh deployCC -ccn herbtrace -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript
Keep this terminal running.Terminal 2: Start the API ServerThis terminal runs the backend server that connects our website to the blockchain.# From the root 'fabric-samples' directory
cd api-server

# Install dependencies
npm install -g bun
bun install

# Start the server
node index.jsThe API will now be running at http://localhost:3001. Keep this terminal running.Terminal 3: Start the WebsiteThis terminal runs the Next.js frontend application.# From the root 'fabric-samples' directory
cd chainmasters

# Install dependencies
npm install -g bun (no need to re-run if bun is already installed)
bun install

# Start the development server
bun devThe website is now accessible at http://localhost:3000. You can open this URL in your web browser.———————————————————————————————————————————————————————————————————Ayurvedic Herb Traceability BlockchainThis project provides a complete end-to-end system for tracking Ayurvedic herbs from the point of collection to the final consumer product, using a permissioned blockchain for transparency and trust.The ProblemThe Ayurvedic supply chain is fragmented and lacks transparency, making it difficult to verify the authenticity, quality, and ethical sourcing of herbs. This leads to risks of adulteration, over-harvesting, and diminished consumer confidence.The SolutionWe solve this by creating an immutable, digital ledger for each batch of herbs.Geo-tagging at Harvest: Farmers log each harvest with GPS data, creating a permanent record of origin.Immutable History: Every step—processing, lab testing, transit—is added to the herb's unchangeable history on the blockchain.Consumer Transparency: A QR code on the final product allows consumers to scan and view the entire journey of the herbs inside, building trust and verifying authenticity.Tech StackBlockchain: Hyperledger FabricSmart Contracts: Node.js (Chaincode)API Server: Node.js, Express.jsWebsite / Frontend: Next.js, React, TypeScript, Tailwind CSS