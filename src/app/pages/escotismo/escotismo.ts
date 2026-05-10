import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { YoutubePlayer } from "../../shared/components/youtube-player/youtube-player";
import { HeroMosaic, MosaicImage } from '../../shared/components/hero-mosaic/hero-mosaic';

@Component({
  selector: 'app-escotismo',
  standalone: true,
  imports: [CommonModule, Breadcrumb, YoutubePlayer, RouterLink, HeroMosaic],
  templateUrl: './escotismo.html',
  styleUrl: './escotismo.scss'
})
export class Escotismo {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/photos/ramos/escoteiro/escoteiro2.jpg', alt: 'Atividade escoteira', type: 'main' },
    { src: 'assets/photos/geral/escotismo.jpg', alt: 'Atividade sênior', type: 'side-top' },
    { src: 'assets/photos/ramos/escoteiro/escoteiro.jpg', alt: 'Atividade lobinho', type: 'side-bottom' }
  ];
}
