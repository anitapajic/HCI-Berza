import {APP_ID, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpResponse, HttpStatusCode} from "@angular/common/http";
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  API_KEY : String = "1ICUELNM3NPL3ME1";
  API_KEY0 : String = "AP3OTFEF3W2AW15T";

  data: Subject<any> = new Subject<any>();
  currentOption : String = 'BTC';
  periodOption : String = 'DIGITAL_CURRENCY_DAILY';

  constructor(private http: HttpClient) { }


  getCrypto(crypto : String, period : String){
    if (crypto == ''){
      crypto = this.currentOption;
    }
    this.currentOption = crypto;
    switch(period){
      case '':
        break;
      case 'D' :
        this.periodOption = 'DIGITAL_CURRENCY_DAILY';
        break;
      case 'W':
        this.periodOption = 'DIGITAL_CURRENCY_WEEKLY';
        break;
      case 'M':
          this.periodOption = 'DIGITAL_CURRENCY_MONTHLY';
          break;
      
    }
    this.http.get('https://www.alphavantage.co/query?function='+ this.periodOption +'&symbol=' + crypto + '&market=USD&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' }).subscribe(
      response => { 
        this.data.next(response)
      }
    )
  }

  

  getIBMIntraDay(interval : Number){

    this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=' + interval + 'min&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' }).subscribe(
      response => { 
        this.data.next(response)
      }
    )
  }



  //info za podatke u cryptocurrency component
  getCryptoInfo(crypto : String){
    return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + crypto + '&to_currency=USD&apikey=' + this.API_KEY0)
  }

}
