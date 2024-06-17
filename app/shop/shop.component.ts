// src/app/shop/shop.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service'; // Correct path

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  shopItems = [
    { title: 'Abstract Painting', description: 'A beautiful abstract painting to creative art', price: 1000, image: 'assets/s1.jpg' },
    { title: 'Modern Sculpture', description: 'A 3D modern  Sculpture for your home&work space', price: 2000, image: 'assets/s2.jpg' },
    { title: 'Digital Art', description: 'A vibrant digital art print to bring peace', price: 3500, image: 'assets/s3.jpg' },
  ];

  constructor(private cartService: CartService, private router: Router) { }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.router.navigate(['/cart']); // Navigate to cart page
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
