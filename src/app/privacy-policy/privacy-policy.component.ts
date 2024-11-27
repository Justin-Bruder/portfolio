import { Component, OnInit, Input } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'; 
import { Router } from '@angular/router';
import { NavbarComponent } from '../header/navbar/navbar.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, NavbarComponent], 
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  @Input() isEnglish: boolean = true;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); 
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
