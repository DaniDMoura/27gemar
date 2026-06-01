import { Component, Input } from '@angular/core';
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
  @Input() title: string = '';
  @Input() images: MosaicImage[] = [];

  get hasTwoImages(): boolean {
    return this.images.length === 2;
  }

  get hasThreeImages(): boolean {
    return this.images.length === 3;
  }
}
