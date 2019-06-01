import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart-service/cart.service";
import { CartItem, Pay } from "./cart-service/cart";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  private pay: Pay;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService
      .getTotalPrice("5cdb103ef22d99085cc1115e")
      .subscribe(response => {
        this.pay = response;

      });
  }
}
