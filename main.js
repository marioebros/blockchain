const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "0";
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + this.data + this.nonce
    ).toString();
  }

  mineBlock(difficulty) {}
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()];
  }

  createGenesis() {
    return new Block(0, "11/05/2022", "Genesis block", "0");
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}
