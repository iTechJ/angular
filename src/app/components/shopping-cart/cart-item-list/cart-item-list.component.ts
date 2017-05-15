import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../../book/book";

@Component({
  selector: 'cart-item-list',
  templateUrl: 'cart-item-list.component.html',
  styleUrls: ['cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {

  @Input() books: Book[];
  @Output() onBookDeleted: EventEmitter<Book>;

  constructor() { }

  ngOnInit() {
  }

  deleted(book: Book): void {
    this.onBookDeleted.emit(book);
  }

}
