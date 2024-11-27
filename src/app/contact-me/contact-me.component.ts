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
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  @Input() isEnglish: boolean = true;

  http = inject(HttpClient);

  isChecked = false;
  formSubmitted = false;
  feedbackMessage: string | null = null;
  feedbackSuccess = true;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://justinbruder.de/sendMail.php',
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

    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: () => {
          this.feedbackMessage = this.isEnglish
            ? 'Your message has been sent successfully!'
            : 'Ihre Nachricht wurde erfolgreich gesendet!';
          this.feedbackSuccess = true;
          setTimeout(() => (this.feedbackMessage = null), 4000);
          ngForm.resetForm();
          this.isChecked = false; 
          this.formSubmitted = false;
        },
        error: () => {
          this.feedbackMessage = this.isEnglish
            ? 'There was an error sending your message. Please try again later.'
            : 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.';
          this.feedbackSuccess = false;
        },
      });
    }
  }
}
