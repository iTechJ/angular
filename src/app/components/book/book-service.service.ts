import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Book} from "./book";

export const API_URL = "/api/books.json";

@Injectable()
export class BookService {

  constructor(
    private http: Http,
    @Inject(API_URL) private apiUrl: string) {
  }

  list(): Observable<Book[]> {
    return this.http.get(this.apiUrl).map((response: Response) => {
      return (<any>response.json()).map(item => {
        return new Book(
          item.sku,
          item.name,
          item.author,
          item.description,
          item.price
        );
      });
    });
  }

  // get(sku: string): Book {
  //   return this.http.get(this.apiUrl).map((response: Response) => {
  //     return null;
  //   })
  // }


}
