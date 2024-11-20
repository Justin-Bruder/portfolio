import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss'
})
export class HeaderBannerComponent {

  constructor(private router: Router) {}

  scrollToAboutMe() {
    this.router.navigate([], { fragment: 'about-section' }).then(() => {
      const element = document.getElementById('about-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @Input() isEnglish: boolean = true;
}
