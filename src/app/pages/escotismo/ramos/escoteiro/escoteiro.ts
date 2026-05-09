import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../../shared/components/hero-mosaic/hero-mosaic';
import { CtaBox } from '../../../../shared/components/cta-box/cta-box';

@Component({
  selector: 'app-ramo-escoteiro',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, CtaBox],
  templateUrl: './escoteiro.html',
  styleUrl: './escoteiro.scss',
})
export class RamoEscoteiro {
  mosaicImages: MosaicImage[] = [
    {
      src: 'assets/escotismo/ramos/images/escoteiro2.jpg',
      alt: 'Escoteiro principal',
      type: 'main',
    },
    {
      src: 'assets/escotismo/ramos/images/escoteiro.jpg',
      alt: 'Atividade vertical',
      type: 'side-top',
    },
    {
      src: 'assets/escotismo/ramos/images/escoteiro3.jpg',
      alt: 'Atividade vertical',
      type: 'side-bottom',
    },
  ];
}
