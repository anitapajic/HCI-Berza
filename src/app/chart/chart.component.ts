import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip, ApexDataLabels, ApexFill
} from "ng-apexcharts";
import { ApexPlotOptions } from 'ng-apexcharts/public_api';
import {ChartServiceService} from "../service/chart-service.service";
import {CryptocurrencyComponent} from "../cryptocurrency/cryptocurrency.component";
import {TimeTableComponent} from "../time-table/time-table.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip;
  dataLabels : ApexDataLabels;
  fill:ApexFill;

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
  chartVolumeData! : any[];
  cryptocurrencyComponent : CryptocurrencyComponent | undefined;
  intervalComponent : TimeTableComponent | undefined;
  @ViewChild("chartVolume") chartVolume: ChartComponent | undefined;

  public chartVolumeOptions: ChartOptions;

  constructor(private chartService : ChartServiceService) {
    this.chartService.getCrypto('','')

    this.chartService.data.subscribe((data : any) => {
      this.chartData = getDataFromResponse(data);
      this.chartOptions.series = [{
        data : this.chartData
      }]
      this.chartVolumeData = getVolumeDataFromResponse(data);
      this.chartVolumeOptions.series = [{
        data : this.chartVolumeData
      }]
    });
  

    this.chartVolumeOptions = {
      series: [
        {
          name: "volume",
          data: []
        }

      ],
      fill:{
        colors:["#758add"]

      },
      chart: {
        type: "bar",
        height: 250,
        foreColor: "#EBEAE5",
      },
      dataLabels:{
        enabled:false,
      },
      title: {
        text: "Volume",
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
      tooltip:{
        theme:"dark",
      },
      plotOptions:{
      }
    };

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
        foreColor:"#EBEAE5"
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
      fill:{

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
      },
      dataLabels:{

      }
    };
}

  ngOnInit(){


  }
}


function getDataFromResponse(response: string) : ChartData[] {
  const chartData: any[] = response.split('\n').slice(1).map((row: String, index:number) => {
    const [time, open, high, low, close, volume] = row.split(',');
    return {
      x : new Date(time),
      y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)]
    };
  });
  return chartData;

}

function getVolumeDataFromResponse(response: string) : ChartData[] {
  const chartVolumeData: any[] = response.split('\n').slice(1).map((row: String, index:number) => {
    const [time, open, high, low, close, volume] = row.split(',');
    return {
      x : new Date(time),
      y: [parseFloat(volume)]
    };
  });
  return chartVolumeData;

}

