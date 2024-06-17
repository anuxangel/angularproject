import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  submitted = false;

  constructor(private router: Router) {}

  onSubmit(username: string, password: string) {
    this.submitted = true;

    if (!username || !password) {
      return;
    }

    // Perform your authentication logic here
    // Example: this.authService.login(username, password).subscribe(...);

    // If authentication is successful, navigate to the home page
    this.router.navigate(['/home']);
  }
}

