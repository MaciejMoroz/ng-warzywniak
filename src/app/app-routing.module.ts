import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/shoping-cart/product-list/product-list.component";
import { LoginComponent } from "./components/login/login.component";
import { ShopingCartComponent } from "./components/shoping-cart/shoping-cart.component";

const routes: Routes = [
  { path: "home", component: ShopingCartComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ShopingCartComponent, LoginComponent];
