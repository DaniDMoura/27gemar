import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../../shared/components/hero-mosaic/hero-mosaic';
import { CtaBox } from '../../../../shared/components/cta-box/cta-box';

@Component({
  selector: 'app-ramo-senior',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, CtaBox],
  templateUrl: './senior.html',
  styleUrl: './senior.scss'
})
export class RamoSenior {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/senior/senior.jpg', alt: 'Sênior principal', type: 'main' },
    { src: 'assets/photos/ramos/senior/senior2.jpg', alt: 'Atividade sênior mato', type: 'side-top' },
    { src: 'assets/photos/ramos/senior/senior3.jpg', alt: 'Jovem sênior', type: 'side-bottom' }
  ];
}
