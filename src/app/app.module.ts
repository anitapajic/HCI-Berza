import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChartComponent } from './chart/chart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { SearchBarComponent } from './search-bar/search-bar.component';
import {DataService} from "./service/data.service";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChipsModule} from "@angular/material/chips";
import {MatChipGrid} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    CryptocurrencyComponent,
    TimeTableComponent,
    InfoTableComponent,
    FooterComponent,
    TableComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,

  ],
  exports : [CommonModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
