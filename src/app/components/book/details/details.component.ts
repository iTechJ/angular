import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book-service.service";
import {Book} from "../book";
import {ShoppingCartService} from "../../shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  sku: string;
  book: Book;

  constructor(private bookService: BookService,
              private shoppingCartService: ShoppingCartService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.sku = params['id'];
    });
  }

  goToList(): void {
    this.router.navigate(['../../list'], {
      relativeTo: this.route
    });
  }

  addToCart(): void {
    this.shoppingCartService.addToCart(this.book);
    this.goToList();
  }

  ngOnInit() {
    this.bookService.get(this.sku).subscribe(
      (book: Book) => {
        this.book = book;
      },
      (err: any) => {
        console.error(err);
      }
    );

  }

}
