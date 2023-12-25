

const { hashData } = require('./hashing');

class Block {
    constructor(previousHash, transactions) {
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.merkleRoot = this.calculateMerkleRoot();
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateMerkleRoot() {
 
        const transactionString = this.transactions.join('');
        return hashData(transactionString);
    }

    calculateHash() {
        const data = `${this.previousHash}${this.merkleRoot}${this.nonce}`;
        return hashData(data);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block('0', []);
    }

    addBlock(transactions) {
        const previousHash = this.chain[this.chain.length - 1].hash;
        const newBlock = new Block(previousHash, transactions);
        this.chain.push(newBlock);
    }
}

module.exports = { Blockchain };
