import { Component, OnInit, Input } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { NavbarComponent } from '../header/navbar/navbar.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit {
  @Input() isEnglish: boolean = true;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
