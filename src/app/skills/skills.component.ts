import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(private router: Router) {}

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
