import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent], 
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); 
  }
}
