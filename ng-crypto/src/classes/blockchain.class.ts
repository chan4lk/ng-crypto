import * as SHA256 from 'crypto-js/sha256';
import { Block } from './block.class';

export class Blockchain {
  chain: Block[];
  difficulty: number = 0;
  
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  
  createGenesisBlock(){
    return new Block(0, "28/05/2018", "Genesis Block:", "0");
  }
  
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }
  
  addBlock(newBlock:Block){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  
  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i-1];
      
      //validate data integrity
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      
      // validate hash chain link
      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    
    // all good. no manipulation data or bad links
    return true;
  }
}
