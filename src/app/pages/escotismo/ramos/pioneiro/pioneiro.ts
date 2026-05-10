import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../../shared/components/hero-mosaic/hero-mosaic';
import { CtaBox } from '../../../../shared/components/cta-box/cta-box';

@Component({
  selector: 'app-ramo-pioneiro',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, CtaBox],
  templateUrl: './pioneiro.html',
  styleUrl: './pioneiro.scss'
})
export class RamoPioneiro {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/pioneiro/pioneiro.jpg', alt: 'Pioneiro principal', type: 'main' },
    { src: 'assets/photos/ramos/pioneiro/pioneiro2.jpg', alt: 'Atividade pioneira', type: 'side-vertical' }
  ];
}
