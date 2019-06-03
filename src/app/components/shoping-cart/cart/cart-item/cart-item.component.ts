import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart-service/cart.service";
import { CartItem } from "../cart-service/cart";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"]
})
export class CartItemComponent implements OnInit {
  private carts: CartItem[];
  private ids: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCarts()
  }
  getCarts() {
    this.cartService
      .getUserCart("5cdb103ef22d99085cc1115e")
      .subscribe(response => {
        this.carts = response;
        this.carts.forEach(e => {
          this.ids.push(e._id)

        })
      });
  }

  removeProductFromCart(index: string) {
    this.cartService.removeFromCart(this.ids[index]).subscribe(res => console.log(res));
    this.cartService
      .getUserCart("5cdb103ef22d99085cc1115e")
      .subscribe(response => {
        this.carts = response;
        this.carts.forEach(e => {
          this.ids.push(e._id)
        })
        this.getCarts()
      });
  }

}




