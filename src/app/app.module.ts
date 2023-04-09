import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    CryptocurrencyComponent,
    TimeTableComponent,
    InfoTableComponent,
    FooterComponent,
    TableComponent
  ],
    
  imports: [
    BrowserModule, FormsModule, NgApexchartsModule, HttpClientModule, CommonModule

  ],
  exports : [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
