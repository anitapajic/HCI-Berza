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

  constructor(private http: HttpClient) { }

  // getBTC(){
  //   return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  // }

  getCryptoDaily(crypto : String){
    this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + crypto + '&market=USD&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' }).subscribe(
      response => { 
        this.data.next(response)
      }
    )
  }

  getCryptoWeekly(crypto : String){
    this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=' + crypto + '&market=USD&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' }).subscribe(
      response => { 
        this.data.next(response)
      }
    )
  }

  getCryptoMonthly(crypto : String){
    this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' + crypto + '&market=USD&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' }).subscribe(
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
