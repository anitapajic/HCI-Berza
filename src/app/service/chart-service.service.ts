import {APP_ID, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpResponse, HttpStatusCode} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  API_KEY : String = "1ICUELNM3NPL3ME1";

  constructor(private http: HttpClient) { }

  getBTC(){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }

  getCryptoDaily(crypto : String){
    return this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + crypto + '&market=CNY&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }
  getCryptoWeekly(crypto : String){
    return this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=' + crypto + '&market=CNY&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }

  getCryptoMonthly(crypto : String){
    return this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' + crypto + '&market=CNY&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }

  getIBMIntraDay(interval : Number){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=' + interval + 'min&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }

}
