import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartServiceService } from '../service/chart-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  @ViewChild("table") table!: ElementRef<HTMLTableElement>;
  public tableData! : any[];

  constructor(private chartService : ChartServiceService) {

    this.chartService.getBTC().subscribe(
      response => {
        this.tableData = getDataFromResponse(response);
      }
    )
  }
  ngAfterViewInit(){
    console.log(this.table)

  }

}
  
function getDataFromResponse(response: string) : any[] {  
    const tableData: any[] = response.split('\n').slice(1, -1).map((row: String, index:number) => {
      const [time, open, high, low, close, volume] = row.split(',');
      return {
        time : time,
        open : parseFloat(open), 
        high : parseFloat(high), 
        low: parseFloat(low), 
        close : parseFloat(close),
        volume : parseFloat(volume)
      };
    });
    return tableData;
  
  }


