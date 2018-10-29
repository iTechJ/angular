import {
  Injectable,
  Inject
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Book} from "./book";

export const LIST_URL = "/api/books.json";
export const GET_URL = "/api/book/";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class BookService {

  constructor(private http: HttpClient,
              @Inject(LIST_URL) private listUrl: string,
              @Inject(GET_URL) private getUrl: string,) {
  }

  list(): Observable<Book[]> {

    return this.http.get(this.listUrl).pipe(
      map(
        (data: any[]) => data.map(item => new Book(
          item.sku,
          item.name,
          item.author,
          item.description,
          item.price))),
      catchError(error => of([]))
    );
  };

  get(sku: string): Observable<Book> {
    const url = `${this.getUrl}${sku}.json`;

    return this.http.get(url).pipe(
      map((item: any) => new Book(
        item.sku,
        item.name,
        item.author,
        item.description,
        item.price
      )),
      catchError(error => of(null))
    );
  }
}
