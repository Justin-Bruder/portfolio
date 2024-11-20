import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() projects: any[] = []; 
  @Input() currentProjectIndex: number = 0; 
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }

  get project() {
    return this.projects[this.currentProjectIndex];
  }
  
  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  @Input() isEnglish: boolean = true;
}
