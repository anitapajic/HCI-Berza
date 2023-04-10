import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {DataService} from "../service/data.service";
import { ChartServiceService } from '../service/chart-service.service';



@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit{
  post: Post[]  | undefined;
  currentCard : String = 'BTC';
  constructor(private dataService : DataService, private chartService : ChartServiceService) {}

  ngOnInit() {
      this.dataService.getPosts().subscribe(posts => {
        this.post = posts
        this.dataService.postsData = posts
      });
  }

  onClick(value : String){
    this.chartService.getCrypto(value, '')
    this.currentCard = value;
  }

  onSelectedOption(e:any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0){
      this.post = this.dataService.filteredListOptions();
      if(this.post[0]){
        this.currentCard = this.post[0].value;
        this.chartService.getCrypto(this.currentCard, '');
      }
    }
    else {
      this.post = this.dataService.postsData;
    }

  }

}