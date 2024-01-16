import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  getShippingPrices(){
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }

  addToCart(product: Product){
    this.items.push(product)
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
