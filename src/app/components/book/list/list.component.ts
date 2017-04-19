import { Component, OnInit } from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Book[];

  constructor() {
    this.books = [
      new Book("123", "name1", "author1", "desc", 1),
      new Book("234", "name2", "author1", "desc", 1),
      new Book("345", "name3", "author1", "desc", 1),
      new Book("456", "name4", "author1", "desc", 1),
    ]
  }

  ngOnInit() {
  }

}
