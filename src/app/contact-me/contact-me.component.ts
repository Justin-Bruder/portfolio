import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, PrivacyPolicyComponent, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  @Input() isEnglish: boolean = true;

  http = inject(HttpClient);

  isChecked = false; 
  formSubmitted = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  toggleCheck() {
    this.isChecked = !this.isChecked; 
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true; 

    if (!this.isChecked) {
      console.warn('Checkbox is not checked');
      return; 
    }

    if (ngForm.valid) {
      if (!this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              console.log('Mail sent successfully', response);
              ngForm.resetForm();
              this.isChecked = false; 
              this.formSubmitted = false;
            },
            error: (error) => {
              console.error('Error sending mail', error);
            },
            complete: () => console.info('Send post complete'),
          });
      } else {
        console.log('Mail test mode active');
        ngForm.resetForm();
        this.isChecked = false; 
        this.formSubmitted = false;
      }
    }
  }
}
