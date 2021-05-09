import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }

  changeItem(item: Item) {
    this.items.map(x => {
      if (x.id == item.id) {
        x.completed = !x.completed;
        this.getTotal();
      }
    });
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = String(this.items.filter(x => !x.completed)
      .map(x => x.quantity * x.price).reduce((a, b) => a += b, 0));
  }

}
