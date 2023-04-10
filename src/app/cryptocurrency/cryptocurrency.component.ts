import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartServiceService } from '../service/chart-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import {Post} from "../post";
import {DataService} from "../service/data.service";



@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit{
  post: Post[]  | undefined;
  currentCard : String = 'BTC';
  constructor(private dataService : DataService) {}

  ngOnInit() {
      this.dataService.getPosts().subscribe(posts => {
        this.post = posts
        this.dataService.postsData = posts
      });
  }

  onSelectedOption(e:any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0){
      this.post = this.dataService.filteredListOptions();
      if(this.post[0]){
        this.currentCard = this.post[0].value;
      }
    }
    else {
      this.post = this.dataService.postsData;
    }

  }

}