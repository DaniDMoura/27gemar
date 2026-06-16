import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  link = input<string>('');
  text = input<string>('');
  mobileFullWidth = input<boolean>(false);
  size = input<'sm' | 'lg'>('lg');
  theme = input<'glass' | 'solid-white' | 'outline' | 'ghost' | 'primary'>('glass');
}
