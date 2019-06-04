import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart-service/cart.service";
import { CartItem } from "../cart-service/cart";
import { MsgService } from "../../product-list/product-service/shared.service";



@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"]
})
export class CartItemComponent implements OnInit {
  public carts: CartItem[];
  public ids: any[] = [];


  constructor(private cartService: CartService, private data: MsgService) { }

  ngOnInit() {
    this.getCarts()
    this.data.currentData.subscribe(() => this.getCarts())


  }

  ngOnChanges(changes: CartItem): void {
    console.log("change");

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
        this.ids = []
        this.carts.forEach(e => {
          this.ids.push(e._id)
        })
        this.getCarts()
      });
  }

}




