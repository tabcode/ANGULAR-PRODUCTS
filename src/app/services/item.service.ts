import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'banana',
      price: 3.5,
      quantity: 8,
      completed: true
    }
  ];

  url: string = "http://localhost:3000/items";

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    // return this.items;
    return this.httpClient.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    // this.items.unshift(item);
    return this.httpClient.post<Item>(this.url, item, this.httpOptions);
  }
}
