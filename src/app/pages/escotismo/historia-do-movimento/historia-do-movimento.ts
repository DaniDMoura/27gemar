import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../shared/components/hero-mosaic/hero-mosaic';
import { CtaBox } from '../../../shared/components/cta-box/cta-box';

@Component({
  selector: 'app-historia-movimento',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, CtaBox],
  templateUrl: './historia-do-movimento.html',
  styleUrl: './historia-do-movimento.scss'
})
export class HistoriaMovimento {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/historicas/badenpowell.webp', alt: 'Baden-Powell com escoteiros', type: 'main' },
    { src: 'assets/photos/historicas/badenpowell.jpg', alt: 'Fundador do movimento', type: 'side-top' },
    { src: 'assets/photos/historicas/boysscout.jpg', alt: 'Placa histórica do Centro de Boy Scouts do Brasil', type: 'side-bottom' }
  ];
}
