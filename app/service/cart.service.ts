// src/app/service/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
  }
}
