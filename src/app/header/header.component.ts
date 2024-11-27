import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderHeadlineComponent } from './header-headline/header-headline.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, HeaderHeadlineComponent, HeaderBannerComponent, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isEnglish = true;
  @Output() languageChanged = new EventEmitter<boolean>();

  onLanguageChange(isEnglish: boolean) {
    this.languageChanged.emit(isEnglish);
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    this.languageChanged.emit(this.isEnglish);
  }
}
