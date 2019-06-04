import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product-service/product.service";
import { Product } from "../product-service/products";
import { CartService } from "../../cart/cart-service/cart.service"
import { MsgService } from '../product-service/shared.service';

@Component({
  selector: "app-prodcut-item",
  templateUrl: "./prodcut-item.component.html",
  styleUrls: ["./prodcut-item.component.scss"]
})
export class ProdcutItemComponent implements OnInit {
  private products: Product[];
  private quantities: any[] = [];
  private ids: any[] = [];
  newData: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private data: MsgService
  ) { }
  ngOnInit() {
    this.data.currentData.subscribe(newData => this.newData = newData)
    this.productService.getProducts().subscribe(response => {
      this.products = response;
      this.products.forEach(e => {
        this.quantities.push(1);

        this.ids.push(e._id)
      });
    });
  }


  increaseQuant(index: number) {
    this.quantities[index] += 1;
  }

  decreaseQuant(index: number) {
    if (this.quantities[index] >= 2) {
      this.quantities[index] -= 1;
    }
  }
  addProductToCart(index: number, ) {
    this.cartService.addProductToCart(this.ids[index], this.quantities[index]).subscribe(res =>
      this.data.changeData(res)
    )

  }



}
