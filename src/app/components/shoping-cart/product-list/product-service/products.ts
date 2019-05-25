export interface Product {
  _id: string;
  name: string;
  phtoUrl?: string;
}

export interface ProductResponse {
  value: Product[];
}
