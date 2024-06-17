// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service'; // Correct path
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];

  constructor(private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update the local cart items
  }
  buyNow(item: any): void {
    // Navigate to form component and pass parameters
    this.router.navigate(['/form'], {
      queryParams: {
        artwork: item.title,
        price: item.price,

      }
    });
  }
}
