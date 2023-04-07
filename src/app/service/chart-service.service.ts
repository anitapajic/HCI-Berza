import {APP_ID, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  APY_KEY : String = "1ICUELNM3NPL3ME1";
  constructor(private http: HttpClient) { }

  getChart(){
    return this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey=1ICUELNM3NPL3ME1");
  }

}
