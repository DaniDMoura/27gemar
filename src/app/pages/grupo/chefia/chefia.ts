import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { PersonCard } from '../../../shared/components/person-card/person-card';
import { HeroMosaic, MosaicImage } from '../../../shared/components/hero-mosaic/hero-mosaic';

@Component({
  selector: 'app-chefia',
  standalone: true,
  imports: [CommonModule, Breadcrumb, PersonCard, HeroMosaic],
  templateUrl: './chefia.html',
  styleUrl: './chefia.scss'
})
export class Chefia {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/senior/senior2.jpg', alt: 'Chefia - Imagem 1', type: 'main' },
    { src: 'assets/photos/geral/promessa2.jpg', alt: 'Chefia - Imagem 2', type: 'side-vertical' }
  ];

  // Array vazio para adicionar membros futuramente
  members: {name: string, role: string, photo: string}[] = [];
}
