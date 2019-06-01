import { Injectable } from "@angular/core";
import { CartItem, Pay } from "./cart";
import { Observable } from "rxjs";
import { SharedService } from "../../product-list/product-service/shared.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private apiUrl = "http://localhost:4001";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    console.log("constructor product service");
  }
  getUserCart(id: string): Observable<CartItem[]> {
    // , authToken: string | number <- dadac logowanie póki co na sztywno
    const headers = new HttpHeaders().set("access-token", "2");

    return this.http.get<CartItem[]>(`${this.apiUrl}/cart/${id}`, { headers });
  }

  getTotalPrice(id: string): Observable<Pay> {
    return this.http.get<Pay>(`${this.apiUrl}/pay/${id}`);
  }
  removeFromCart(id: string): Observable<CartItem> {
    const headers = new HttpHeaders().set("access-token", "2");

    console.log(`removed ${id}`);
    return this.http.delete<CartItem>(`${this.apiUrl}/cart/5cdb103ef22d99085cc1115e/${id}`, { headers })
  }

}
