import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../shared/components/hero-mosaic/hero-mosaic';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss'
})
export class PlaceholderPage {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/geral/construcao.jpg', alt: 'Trabalhos manuais e pioneirias', type: 'main' },
    { src: 'assets/photos/ramos/pioneiro/pioneiro2.jpg', alt: 'Pioneira trabalhando', type: 'side-bottom' }
  ];
}
