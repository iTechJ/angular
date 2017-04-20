import {
  BookService,
  API_URL
} from './book-service.service';

export const bookServiceInjectables: Array<any> = [
  {provide: BookService, useClass: BookService},
  {provide: API_URL, useValue: API_URL}
];
