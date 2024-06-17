import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  purchaseMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      artwork: [''], // Initialize artwork field
      price: ['']    // Initialize price field
    });
  }
  calculatePrice() {
    const artwork = this.form.get('artwork')?.value;
    let price = 0;

    switch (artwork) {
      case 'artwork1':
        price = 1000; // Example price for Abstract Painting
        break;
      case 'artwork2':
        price = 2000; // Example price for Modern Sculpture
        break;
      case 'artwork3':
        price = 3500; // Example price for Digital Art Print
        break;
      default:
        price = 0;
        break;
    }

    this.form.get('price')?.setValue(price);
  }
  ngOnInit(): void {
    // Read query parameters and initialize form fields
    this.route.queryParams.subscribe(params => {
      this.form.patchValue({
        artwork: params['artwork'],
        price: params['price']
      });
    });
  }

  book(): void {
    if (this.form.valid) {
      const order = this.form.value;

      this.http.post('http://localhost:3000/api/orders', order).subscribe(
        (response: any) => {
          console.log('Order saved:', response);
          window.location.href='/success';
          this.form.reset();
          this.form.patchValue({ price: '$0.00' });
        },
        (error) => {
          console.error('Error saving order:', error);
          this.purchaseMessage = 'An error occurred. Please try again.';
        }
      );
    } else {
      this.purchaseMessage = 'Please fill in all required fields.';
    }
  }
}
