import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { YoutubePlayer } from "../../shared/components/youtube-player/youtube-player";

@Component({
  selector: 'app-escotismo',
  standalone: true,
  imports: [Breadcrumb, YoutubePlayer, RouterLink],
  templateUrl: './escotismo.html',
  styleUrl: './escotismo.scss'
})
export class Escotismo {}
