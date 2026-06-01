import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.html',
  styleUrl: './person-card.scss'
})
export class PersonCard {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() photo: string = '';

  fallbackTriggered = false;

  get displayPhoto(): string {
    return this.fallbackTriggered || !this.photo ? 'assets/icons/default-avatar.svg' : this.photo;
  }

  onImageError(): void {
    if (!this.fallbackTriggered) {
      this.fallbackTriggered = true;
    }
  }
}
