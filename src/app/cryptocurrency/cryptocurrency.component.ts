import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit{
  post: Post[]  | undefined;
  constructor(private dataService : DataService) {}

  ngOnInit() {
      this.dataService.getPosts().subscribe(posts => {
        this.post = posts
        this.dataService.postsData = posts
      });
  }

  onSelectedOption(e:any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

  }







    // public selectedOption : selectedOption | undefined;
    //
    // public BTC : selectedOption | undefined;
    // public ETH : selectedOption | undefined;
    // public SOL : selectedOption | undefined;
    //
    // currencies = [
    //   { name: 'Bitcoin', code: 'BTC' },
    //   { name: 'Ethereum', code: 'ETH' },
    //   { name: 'Solana', code: 'SOL' }
    // ];
    //
    //
    // constructor(private service : ChartServiceService){
    //   service.getCryptoInfo('BTC').subscribe(
    //     (response : any) => {
    //       this.BTC = {
    //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
    //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    //         img : 'btc_logo.png'
    //       }
    //   })
    //
    //   service.getCryptoInfo('ETH').subscribe(
    //     (response : any) => {
    //       this.ETH = {
    //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
    //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    //         img : 'eth_logo.png'
    //       }
    //   })
    //
    //    service.getCryptoInfo('SOL').subscribe(
    //     (response : any) => {
    //       this.SOL = {
    //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
    //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    //         img : 'sol_logo.png'
    //       }
    //    })
    //
    //
    //   // this.selectedOption = {
    //   //   title : "Title",
    //   //   value : (10000.03).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    //   //   img : ''
    //   // }
    // }



  // public selectedOption : selectedOption | undefined;
  //
  // public BTC : selectedOption | undefined;
  // public ETH : selectedOption | undefined;
  // public SOL : selectedOption | undefined;
  //
  // currencies = [
  //   { name: 'Bitcoin', code: 'BTC' },
  //   { name: 'Ethereum', code: 'ETH' },
  //   { name: 'Solana', code: 'SOL' }
  // ];
  //
  //
  // constructor(private service : ChartServiceService){
  //   service.getCryptoInfo('BTC').subscribe(
  //     (response : any) => {
  //       this.BTC = {
  //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
  //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  //         img : 'btc_logo.png'
  //       }
  //   })
  //
  //   service.getCryptoInfo('ETH').subscribe(
  //     (response : any) => {
  //       this.ETH = {
  //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
  //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  //         img : 'eth_logo.png'
  //       }
  //   })
  //
  //    service.getCryptoInfo('SOL').subscribe(
  //     (response : any) => {
  //       this.SOL = {
  //         title : response["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
  //         value: (Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  //         img : 'sol_logo.png'
  //       }
  //    })
  //
  //
  //   // this.selectedOption = {
  //   //   title : "Title",
  //   //   value : (10000.03).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  //   //   img : ''
  //   // }
  // }



}
