import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.list().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (err: any) => {
        console.log(err);
      }
    );

    // this.bookService.search().subscribe(
    //   (result: Response) => {
    //     // let body = result._body.json();
    //     debugger;
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // )
  }

}
