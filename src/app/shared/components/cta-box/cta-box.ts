import { Component, Input } from '@angular/core';
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
  @Input() title: string = 'QUERO PARTICIPAR';
  @Input() description: string = 'Venha viver esta aventura com a gente! Entre em contato para saber mais.';
  @Input() buttonText: string = 'PROCURAR';
  @Input() link: string = '/fale-conosco';
}
