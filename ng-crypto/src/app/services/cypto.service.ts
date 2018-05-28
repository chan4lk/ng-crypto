import { Injectable } from '@angular/core';
import { Blockchain } from '../../classes/blockchain.class';
import { Block } from '../../classes/block.class';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  cryptoChain = new Blockchain();
  
  constructor() {
    console.log('Starting to mine a new block');
    this.cryptoChain.addBlock(new Block(1, '28/05/2018', {amount: 10}, ''));
    
    console.log('Starting to mine a new block');
    this.cryptoChain.addBlock(new Block(2, '29/05/2018', {amount: 25}, ''));
  }
}