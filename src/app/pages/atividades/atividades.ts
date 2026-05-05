import { Component } from '@angular/core';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [Breadcrumb],
  templateUrl: './atividades.html',
  styleUrl: './atividades.scss'
})
export class Atividades {}
