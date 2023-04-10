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
      "img" : "btc_logo.png",
      "price" : "$29091.04"
    },
    {
      "title": "Ethereum",
      "value" : "ETH",
      "img" : "eth_logo.png",
      "price" : "$1880.92"
    },
    {
      "title": "Solana",
      "value" : "SOL",
      "img" : "sol_logo.png",
      "price" : "$20.54"
    },
    {
      "title": "Cardano",
      "value" : "ADA",
      "img" : "ada_logo.png",
      "price" : "$0.3889"
    },
    {
      "title": "Bodhi",
      "value" : "BOT",
      "img" : "bot_logo.png",
      "price" : "$0.0025"
    },
    {
      "title": "ION",
      "value" : "ION",
      "img" : "ion_logo.png",
      "price" : "$0.004711"
    },
    {
      "title": "Terra",
      "value" : "LUNA",
      "img" : "luna_logo.png",
      "price" : "$0.000124"
    },
    {
      "title": "Mercury",
      "value" : "MER",
      "img" : "mer_logo.png",
      "price" : "$0.00133"
    },
    {
      "title": "Odyssey",
      "value" : "OCN",
      "img" : "ocn_logo.png",
      "price" : "$0.00004991"
    },
    {
      "title": "PotCoin",
      "value" : "POT",
      "img" : "pot_logo.png",
      "price" : "$0.003072"
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
