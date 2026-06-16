import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-cta-box',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './cta-box.html',
  styleUrl: './cta-box.scss'
})
export class CtaBox {
  title = input<string>('QUERO PARTICIPAR');
  description = input<string>('Venha viver esta aventura com a gente! Entre em contato para saber mais.');
  buttonText = input<string>('PROCURAR');
  link = input<string>('/fale-conosco');
}
