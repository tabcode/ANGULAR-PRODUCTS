import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter;
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter;
  @Output() changeItem: EventEmitter<Item> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  onChecked(item: Item) {
    this.changeItem.emit(item);
    this.toggleItem.emit(item);
  }
}
