import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { HashLocationStrategy, LocationStrategy, APP_BASE_HREF } from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/book/list/list.component';
import { DetailsComponent } from './components/book/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookComponent } from './components/book/book/book.component';
import { CartFormComponent } from './components/shopping-cart/cart-form/cart-form.component';
import {bookServiceInjectables} from "./components/book/book-service-injectables";

const routes: Routes = [
  {
    "path": "",
    "redirectTo": "home",
    "pathMatch": "full"
  }, {
    "path": "home",
    "component": HomeComponent
  }, {
    "path": "book/list",
    "component": ListComponent
  }, {
    "path": "book/details/:id",
    "component": DetailsComponent
  }, {
    "path": "cart",
    "component": ShoppingCartComponent
  }, {
    "path": "about",
    "component": AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    BookComponent,
    CartFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {"provide": APP_BASE_HREF, "useValue": "/"},
    {"provide": LocationStrategy, "useClass": HashLocationStrategy},
    bookServiceInjectables
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
