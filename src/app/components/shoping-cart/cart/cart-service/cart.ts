export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  __t?: any;
}

export interface Pay {
  pay: number;
}
export interface CartItemResponse {
  value: CartItem[];
}

