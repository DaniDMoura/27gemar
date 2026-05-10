import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { MapComponent } from '../../../shared/components/map/map';
import { HeroMosaic, MosaicImage } from '../../../shared/components/hero-mosaic/hero-mosaic';

@Component({
  selector: 'app-sede',
  standalone: true,
  imports: [CommonModule, Breadcrumb, MapComponent, HeroMosaic],
  templateUrl: './sede.html',
  styleUrl: './sede.scss'
})
export class Sede {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/escoteiro/escoteiro2.jpg', alt: 'Atividade no 27º GEMAR', type: 'main' },
  ];
}
