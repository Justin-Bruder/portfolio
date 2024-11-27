import { CommonModule } from '@angular/common'; 
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() isEnglish = true;
  @Output() languageChanged = new EventEmitter<boolean>();
  isMenuVisible = false;

  constructor(private router: Router) {}

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    this.languageChanged.emit(this.isEnglish);
  }

  showMenu() {
    this.isMenuVisible = true;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }

  navigateToHome() {
    this.router.navigate(['/']).then(() => window.scrollTo(0, 0));
  }

  scrollToAboutMe() {
    this.router.navigate(['/'], { fragment: 'about-section' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('about-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
  
  scrollToSkills() {
    this.router.navigate(['/'], { fragment: 'skill-section' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('skill-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
  
  scrollToProjects() {
    this.router.navigate(['/'], { fragment: 'project-section' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('project-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
  
}
