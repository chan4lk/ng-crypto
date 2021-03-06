import { Component } from '@angular/core';
import { CryptoService } from './services/cypto.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  blockchain = '';
  
  constructor(private cryptoSvc: CryptoService){
    this.blockchain = JSON.stringify(this.cryptoSvc.cryptoChain);
  }
}
