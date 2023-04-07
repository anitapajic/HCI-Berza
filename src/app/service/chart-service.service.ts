import {APP_ID, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpResponse, HttpStatusCode} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  API_KEY : String = "1ICUELNM3NPL3ME1";
  constructor(private http: HttpClient) { }

  getChart(){
    return this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey="+ this.API_KEY, { responseType: 'text' });
  }
  getBTC(){
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + this.API_KEY + '&datatype=csv', { responseType: 'text' })
  }

}
