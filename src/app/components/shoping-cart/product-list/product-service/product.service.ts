import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductResponse, Product } from "./products";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private apiUrl = "http://localhost:4001";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    console.log("constructor pizza service");
  }

  getProducts(): Promise<ProductResponse> {
    return this.http
      .get<ProductResponse>(`${this.apiUrl}/products`)
      .toPromise();
  }
}
