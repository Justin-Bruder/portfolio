import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isEnglish = true; 
  isMenuVisible = false;

  @Output() languageChanged = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  scrollToAboutMe() {
    this.router.navigate([], { fragment: 'about-section' }).then(() => {
      const element = document.getElementById('about-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.closeMenu();
      }
    });
  }

  scrollToSkills() {
    this.router.navigate([], { fragment: 'skill-section' }).then(() => {
      const element = document.getElementById('skill-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.closeMenu();
      }
    });
  }

  scrollToProjects() {
    this.router.navigate([], { fragment: 'project-section' }).then(() => {
      const element = document.getElementById('project-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.closeMenu();
      }
    });
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    this.languageChanged.emit(this.isEnglish);
  }

  showMenu() {
    this.isMenuVisible = !this.isMenuVisible; 
  }

  closeMenu() {
    this.isMenuVisible = false; 
  }
}
