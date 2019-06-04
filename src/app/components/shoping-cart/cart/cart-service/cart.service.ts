import { Injectable } from "@angular/core";
import { CartItem, Pay } from "./cart";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private apiUrl = "http://localhost:4001";
  carts: CartItem[];
  ids: any;
  constructor(private http: HttpClient) {
  }
  getUserCart(id: string): Observable<CartItem[]> {
    const headers = new HttpHeaders().set("access-token", "2");

    return this.http.get<CartItem[]>(`${this.apiUrl}/cart/${id}`, { headers });
  }

  getCarts() {

    this.getUserCart("5cdb103ef22d99085cc1115e")
      .subscribe(response => {
        this.carts = response;
        this.carts.forEach(e => {
          this.ids.push(e._id)

        })
      });
  }

  getTotalPrice(id: string): Observable<Pay> {
    const headers = new HttpHeaders().set("access-token", "2");

    return this.http.get<Pay>(`${this.apiUrl}/pay/${id}`, { headers });
  }
  removeFromCart(id: string): Observable<CartItem> {
    const headers = new HttpHeaders().set("access-token", "2");
    return this.http.delete<CartItem>(`${this.apiUrl}/cart/5cdb103ef22d99085cc1115e/${id}`, { headers })
  }
  addProductToCart(id: string, quantity: number): Observable<CartItem> {
    const headers = new HttpHeaders().set("access-token", "2");

    return this.http.put<CartItem>(`${this.apiUrl}/cart/5cdb103ef22d99085cc1115e/${id}/${quantity}`, { headers })

  }


}
