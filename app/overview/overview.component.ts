import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  messageSent: boolean = false;

  onSubmitContact(form: any): void {
    if (form.valid) {
      console.log('Contact message sent:', form.value);
      this.messageSent = true;
      alert('Message sent successfully!');
      form.reset();  // Optionally reset the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
