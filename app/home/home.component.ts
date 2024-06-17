import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  model: any = {};
  submitted = false;
  submitError = false;
  loginSuccess = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    // Assume a simple validation for demonstration. Replace with real authentication logic.
    if (this.model.username && this.model.password) {
      // Mock authentication success
      this.loginSuccess = true;
      this.submitError = false;
      // Navigate to the shop page
      this.router.navigate(['/shop']);
    } else {
      // Authentication failed
      this.loginSuccess = false;
      this.submitError = true;
    }
  }
}
