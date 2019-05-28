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
  private quantities: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
      this.products.forEach(e => {
        this.quantities.push(1);
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
}
