import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart-service/cart.service";
import { CartItem, Pay } from "./cart-service/cart";
import { SharedService } from '../../shared/sharedService/shared.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  private pay: Pay;
  constructor(private cartService: CartService, private data: SharedService) { }
  ngOnInit() {
    this.data.currentPay.subscribe(() =>

      this.cartService
        .getTotalPrice("5cdb103ef22d99085cc1115e")
        .subscribe(response => {
          this.pay = response;

        })
    )
  }

}
