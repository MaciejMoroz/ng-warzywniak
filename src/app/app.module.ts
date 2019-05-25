import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { ShopingCartComponent } from "./components/shoping-cart/shoping-cart.component";
import { FilterComponent } from "./components/shoping-cart/filter/filter.component";
import { ProductListComponent } from "./components/shoping-cart/product-list/product-list.component";
import { CartComponent } from "./components/shoping-cart/cart/cart.component";

import { ProdcutItemComponent } from "./components/shoping-cart/product-list/prodcut-item/prodcut-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ShopingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProdcutItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
