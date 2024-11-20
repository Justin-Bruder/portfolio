import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-headline',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-headline.component.html',
  styleUrl: './header-headline.component.scss'
})
export class HeaderHeadlineComponent {

  constructor(private router: Router) {}

  scrollToProjects() {
    this.router.navigate([], { fragment: 'project-section' }).then(() => {
      const element = document.getElementById('project-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  scrollToContactMe() {
    this.router.navigate([], { fragment: 'contactMe-section' }).then(() => {
      const element = document.getElementById('contactMe-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @Input() isEnglish: boolean = true;
}
