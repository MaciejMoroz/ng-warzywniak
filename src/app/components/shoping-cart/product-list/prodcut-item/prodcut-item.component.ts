import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product-service/product.service";
import { Product } from "../product-service/products";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-prodcut-item",
  templateUrl: "./prodcut-item.component.html",
  styleUrls: ["./prodcut-item.component.scss"]
})
export class ProdcutItemComponent implements OnInit {
  private products: Product[];
  private currentProduct: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then(response => {
      console.log(response, "response");
      console.log(response.value, "response.value");
      this.products = response.value;
      console.log(this.products, "this.products");
    });
  }
}
