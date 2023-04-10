import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartServiceService } from '../service/chart-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';


export type selectedOption = {
  title : String,
  value : String,
  img : String
}



@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit{

  public selectedOption : selectedOption | undefined;
  public currentCard : String = 'BTC';

  public BTC : selectedOption | undefined;
  chartService : ChartServiceService | undefined;
  public ETH : selectedOption | undefined;
  public SOL : selectedOption | undefined;
  
  currencies = [
    { name: 'Bitcoin', code: 'BTC' },
    { name: 'Ethereum', code: 'ETH' },
    { name: 'Solana', code: 'SOL' }
  ];


  constructor(private service : ChartServiceService){
    this.chartService = service;
    service.getCryptoInfo('BTC').subscribe(
      (response : any) => {
        this.BTC = {
          title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
          value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          img : 'btc_logo.png'
        }
    })

    service.getCryptoInfo('ETH').subscribe(
      (response : any) => {
        this.ETH = {
          title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
          value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          img : 'eth_logo.png'
        }
    })
      
     service.getCryptoInfo('SOL').subscribe(
      (response : any) => {
        this.SOL = {
          title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
          value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          img : 'sol_logo.png'
        }
     })


    // this.selectedOption = {
    //   title : "Title",
    //   value : (10000.03).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    //   img : ''
    // }
  }

  getInfo(crypto : String){
    this.currentCard = crypto;
    console.log(crypto);
    this.chartService?.getCrypto(crypto, '');
  }

  ngOnInit(): void {

  }
 
}
