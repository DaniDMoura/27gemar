import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { MapComponent } from '../../shared/components/map/map';
import { HeroMosaic, MosaicImage } from '../../shared/components/hero-mosaic/hero-mosaic';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, Breadcrumb, MapComponent, HeroMosaic],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/senior/senior.jpg', alt: 'Atividade Sênior', type: 'main' },
    { src: 'assets/photos/ramos/pioneiro/pioneiro.jpg', alt: 'Atividade Pioneiro', type: 'side-top' },
    { src: 'assets/photos/ramos/lobinho/lobinho.jpg', alt: 'Atividade Lobinho', type: 'side-bottom' }
  ];
}
