import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MosaicImage {
  src: string;
  alt: string;
  type: 'main' | 'side-vertical' | 'side-top' | 'side-bottom';
}

@Component({
  selector: 'app-hero-mosaic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-mosaic.html',
  styleUrl: './hero-mosaic.scss'
})
export class HeroMosaic {
  title = input<string>('');
  images = input<MosaicImage[]>([]);

  hasTwoImages = computed(() => this.images().length === 2);
  hasThreeImages = computed(() => this.images().length === 3);
}
