import { Component } from '@angular/core';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { YoutubePlayer } from "../../shared/components/youtube-player/youtube-player";

@Component({
  selector: 'app-escotismo',
  standalone: true,
  imports: [Breadcrumb, YoutubePlayer],
  templateUrl: './escotismo.html',
  styleUrl: './escotismo.scss'
})
export class Escotismo {}
