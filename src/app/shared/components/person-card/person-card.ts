import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.html',
  styleUrl: './person-card.scss'
})
export class PersonCard {
  name = input<string>('');
  role = input<string>('');
  photo = input<string>('');

  fallbackTriggered = signal(false);

  displayPhoto = computed(() => {
    return this.fallbackTriggered() || !this.photo() ? 'assets/icons/default-avatar.svg' : this.photo();
  });

  onImageError(): void {
    if (!this.fallbackTriggered()) {
      this.fallbackTriggered.set(true);
    }
  }
}
