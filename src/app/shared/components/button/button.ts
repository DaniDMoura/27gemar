import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
  @Input() link: string = '';
  @Input() text: string = '';
  @Input() mobileFullWidth: boolean = false;
  @Input() size: 'sm' | 'lg' = 'lg';
  @Input() theme: 'glass' | 'solid-white' | 'outline' | 'ghost' = 'glass';
}
