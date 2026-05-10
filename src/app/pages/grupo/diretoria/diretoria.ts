import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { PersonCard } from '../../../shared/components/person-card/person-card';
import { HeroMosaic, MosaicImage } from '../../../shared/components/hero-mosaic/hero-mosaic';

@Component({
  selector: 'app-diretoria',
  standalone: true,
  imports: [CommonModule, Breadcrumb, PersonCard, HeroMosaic],
  templateUrl: './diretoria.html',
  styleUrl: './diretoria.scss'
})
export class Diretoria {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/geral/escotismo.jpg', alt: 'Diretoria - Imagem 1', type: 'main' },
    { src: 'assets/photos/ramos/lobinho/lobinho.jpg', alt: 'Diretoria - Imagem 2', type: 'side-top' },
     { src: 'assets/photos/geral/diretoria.jpg', alt: 'Diretoria - Imagem 3', type: 'side-bottom' }
  ];

  members: {name: string, role: string, photo: string}[] = [];
}
