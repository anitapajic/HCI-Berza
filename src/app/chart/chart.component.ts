import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip
} from "ng-apexcharts";
import { ApexPlotOptions } from 'ng-apexcharts/public_api';
import {ChartServiceService} from "../service/chart-service.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip;
};
interface ChartData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class MyChartComponent  implements OnInit{

  
  public chartOptions: ChartOptions;
  private chartData! : any[];
  
  constructor(private chartService : ChartServiceService) {
    this.chartService.getBTC().subscribe(
      response => {
        this.chartData = getDataFromResponse(response);
        this.chartOptions.series = [{
          data : this.chartData
        }]
      }
    )

    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: []
        }

      ],
      chart: {
        type: "candlestick",
        height: 350,
        foreColor: "#EBEAE5"
      },
      title: {
        text: "CandleStick Chart",
        align: "left"
      },
      xaxis: {
        type: "datetime"

      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      plotOptions:{
        candlestick:{
          colors :{
            upward: "#75cac4",
            downward: "#dd5b92"
          }
        }
      },
      tooltip:{
        theme:"dark",
      }
    };
}

  ngOnInit(){


  }
}


function getDataFromResponse(response: string) : ChartData[] {  
  const chartData: any[] = response.split('\n').slice(1,  -1).map((row: String, index:number) => {
    const [time, open, high, low, close, volume] = row.split(',');
    return {
      x : new Date(time),
      y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)]
    };
  });
  return chartData;

}

