import { Component } from '@angular/core';
import {ChartServiceService} from "../service/chart-service.service";


@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {

public chartService : ChartServiceService | undefined;
public currentPeriod : String = 'D';

constructor(private service : ChartServiceService) {
  this.chartService = service;
}

getCrypto(period: String) {
  this.currentPeriod = period;
  this.chartService?.getCrypto('',period);
}
getIBM(min : number){
  this.currentPeriod = min.toString();
  this.chartService?.getIBMIntraDay(min);
}
}
