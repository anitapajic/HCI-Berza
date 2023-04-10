import { Injectable } from '@angular/core';
import  {Post} from "../post";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchOption:any[]=[]
  public postsData : Post[] = [
    {
      "title": "Bitcoin ",
      "value" : "BTC",

    },
    {
      "title": "Ethereum",
      "value" : "ETH"
    },
    {
      "title": "Solana",
      "value" : "SOL"
    },
    {
      "title": "Cardano",
      "value" : "ADA"
    },
    {
      "title": "Bodhi",
      "value" : "BOT"
    },
    {
      "title": "ION",
      "value" : "ION"
    },
    {
      "title": "Terra",
      "value" : "LUNA"
    },
    {
      "title": "Mercury",
      "value" : "MER"
    },
    {
      "title": "Odyssey",
      "value" : "OCN"
    },
    {
      "title": "PotCoin",
      "value" : "POT"
    }
  ]




  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return of(this.postsData);
  }

  filteredListOptions() {
    let posts = this.postsData;
    let filteredPostsList = [];


    for (let post of posts) {
      for (let options of this.searchOption) {


        if (options.title === post.title) {
          filteredPostsList.push(post);
        }
      }
    }
    console.log(filteredPostsList);
    return filteredPostsList;
  }

}
