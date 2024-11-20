import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DialogComponent } from './portfolio/dialog/dialog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactMeComponent,
    FooterComponent,
    DialogComponent,
    PrivacyPolicyComponent,
    LegalNoticeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursorShadow = document.querySelector('.cursor-shadow') as HTMLElement;
    if (cursorShadow) {
      cursorShadow.style.left = `${event.pageX}px`;
      cursorShadow.style.top = `${event.pageY}px`;
    }
  }

  updateLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish;
  }
}
