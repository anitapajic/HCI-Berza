import { Component } from '@angular/core';
import {ChartServiceService} from "../service/chart-service.service";


@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {
public chartService : ChartServiceService | undefined;

constructor() {

}
getIBM(min : number){
  this.chartService?.getIBMIntraDay(min);
}
// get1Min(){
//   this.chartService?.getIBMIntraDay(1).subscribe(
//     response => {
//       return response;
//     }
//   )
// }
// get5Min(){
//   this.chartService?.getIBMIntraDay(5).subscribe(
//     response => {
//       return response;
//     }
//   )
// }
// get15Min(){
//   this.chartService?.getIBMIntraDay(15).subscribe(
//     response => {
//       return response;
//     }
//   )
// }
// get30Min(){
//   this.chartService?.getIBMIntraDay(30).subscribe(
//     response => {
//       return response;
//     }
//   )
// }
// get60Min(){
//   this.chartService?.getIBMIntraDay(60).subscribe(
//     response => {
//       return response;
//     }
//   )
// }

}
