import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Book} from "../book/book";


@Injectable()
export class ShoppingCartService {
  private books: Book[];
  private cartItemsSource = new Subject<Book[]>();

  cartItems$ = this.cartItemsSource.asObservable();

  constructor() {
    this.books = [];
  }

  addToCart(book: Book): void {
    this.books.push(book);
    this.cartItemsSource.next(this.books);
  }

  list(): Book[] {
    return this.books;
  }

  checkout(): void {
    this.books = [];
    this.cartItemsSource.next(this.books);
  }
}
