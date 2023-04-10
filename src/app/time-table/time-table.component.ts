import { Component } from '@angular/core';
import {ChartServiceService} from "../service/chart-service.service";


@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {

public chartService : ChartServiceService | undefined;

constructor(private service : ChartServiceService) {
  this.chartService = service;
}

getCrypto(period: String) {
  this.chartService?.getCrypto('',period);
}
getIBM(min : number){
  this.chartService?.getIBMIntraDay(min);
}
}
