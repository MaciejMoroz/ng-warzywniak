import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./products";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";
import { CartItem } from '../../cart/cart-service/cart';

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
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }
  addProductToCart(id: string, quantity: number): Observable<CartItem> {
    const headers = new HttpHeaders().set("access-token", "2");

    return this.http.put<CartItem>(`${this.apiUrl}/cart/5cdb103ef22d99085cc1115e/${id}/${quantity}`, { headers })

  }
}
