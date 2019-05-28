import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private apiUrl = "http://localhost:4001";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    console.log("constructor product service");
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  getProductById(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`).toPromise();
  }
}
