import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Markiert die Komponente als standalone
  imports: [CommonModule, HeaderComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactMeComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isEnglish = true; 
  isPrivacyPolicyPage = false;
  isLegalNoticePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPrivacyPolicyPage = event.url === '/privacy-policy';
        this.isLegalNoticePage = event.url === '/legal-notice';
      }
    });
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   const cursorShadow = document.querySelector('.cursor-shadow') as HTMLElement;
  //   if (cursorShadow) {
  //     cursorShadow.style.left = `${event.pageX}px`;
  //     cursorShadow.style.top = `${event.pageY}px`;
  //   }
  // }

  updateLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish;
  }
}
