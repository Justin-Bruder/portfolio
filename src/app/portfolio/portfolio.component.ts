import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  selectedProject: any = null;

  projects = [
    {
      projectNumber: 1,
      projectName: 'Join',
      description: 'Task manager application. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDe: 'Task-Manager-Anwendung. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      skills: [
        { name: 'JavaScript', image: 'assets/img/scriptIconDialog.png' },
        { name: 'HTML', image: 'assets/img/htmlIconDialog.png' },
        { name: 'CSS', image: 'assets/img/cssIconDialog.png' },
        { name: 'Firebase', image: 'assets/img/firebaseIconDialog.png' },
      ],
      githubLink: 'https://github.com/Justin-Bruder/Join',
      liveLink: 'https://justinbruder.de/Join-backup/index.html',
      projectImage: 'assets/img/projectExample.png',
      hoverImage: 'assets/img/projectExample.png',
    },
    {
      projectNumber: 2,
      projectName: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionDe: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      skills: [
        { name: 'HTML', image: 'assets/img/htmlIconDialog.png' },
        { name: 'CSS', image: 'assets/img/cssIconDialog.png' },
        { name: 'JavaScript', image: 'assets/img/scriptIconDialog.png' },
      ],
      githubLink: 'https://github.com/Justin-Bruder/El-Pollo-Loco',
      liveLink: 'https://justinbruder.de/loco/index.html',
      projectImage: 'assets/img/locoStartScreen.png',
      hoverImage: 'assets/img/locoStartScreen.png',
    },
    {
      projectNumber: 3,
      projectName: 'Pokédex',
      description: 'A Pokédex application that uses the REST API to display Pokémon data.',
      descriptionDe: 'Eine Pokédex-Anwendung, die die REST-API verwendet, um Pokémon-Daten anzuzeigen.',
      skills: [
        { name: 'HTML', image: 'assets/img/htmlIconDialog.png' },
        { name: 'CSS', image: 'assets/img/cssIconDialog.png' },
        { name: 'JavaScript', image: 'assets/img/scriptIconDialog.png' },
      ],
      githubLink: 'https://github.com/Justin-Bruder/Pokedex',
      liveLink: 'https://justinbruder.de/pokemon/index.html',
      projectImage: 'assets/img/pokemonScreen.png',
      hoverImage: 'assets/img/pokemonScreen.png',
    },
  ];

  openDialog(project: any) {
    this.selectedProject = project;
  }

  closeDialog() {
    this.selectedProject = null;
  }

  @Input() isEnglish: boolean = true;
}
