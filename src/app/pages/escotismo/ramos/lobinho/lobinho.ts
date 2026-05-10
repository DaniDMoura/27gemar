import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../../shared/components/hero-mosaic/hero-mosaic';
import { CtaBox } from '../../../../shared/components/cta-box/cta-box';

@Component({
  selector: 'app-ramo-lobinho',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, CtaBox],
  templateUrl: './lobinho.html',
  styleUrl: './lobinho.scss'
})
export class RamoLobinho {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/lobinho/lobinho.jpg', alt: 'Lobinho principal', type: 'main' },
    { src: 'assets/photos/ramos/lobinho/lobinho2.jpg', alt: 'Atividade vertical', type: 'side-vertical' }
  ];
}
