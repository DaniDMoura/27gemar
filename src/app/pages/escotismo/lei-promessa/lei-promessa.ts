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
    { src: 'assets/photos/geral/promessa.jpg', alt: 'Escoteira saudando', type: 'main' },
    { src: 'assets/photos/geral/promessa2.jpg', alt: 'Cerimônia de promessa', type: 'side-top' }
  ];
}
