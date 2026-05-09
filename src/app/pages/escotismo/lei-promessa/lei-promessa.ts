import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { HeroMosaic, MosaicImage } from '../../../shared/components/hero-mosaic/hero-mosaic';
import { YoutubePlayer } from '../../../shared/components/youtube-player/youtube-player';

@Component({
  selector: 'app-lei-promessa',
  standalone: true,
  imports: [CommonModule, Breadcrumb, HeroMosaic, YoutubePlayer],
  templateUrl: './lei-promessa.html',
  styleUrl: './lei-promessa.scss'
})
export class LeiPromessa {
  mosaicImages: MosaicImage[] = [
    { src: 'assets/escotismo/lei-promessa/promessa.jpg', alt: 'Escoteira saudando', type: 'main' },
    { src: 'assets/escotismo/lei-promessa/promessa2.jpg', alt: 'Cerimônia de promessa', type: 'side-top' },
    { src: 'assets/escotismo/lei-promessa/promessa3.jpg', alt: 'Jovens escoteiros', type: 'side-bottom' }
  ];
}
