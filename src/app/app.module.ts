import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {"provide": APP_BASE_HREF, "useValue": "/"},
    {"provide": LocationStrategy, "useClass": HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
