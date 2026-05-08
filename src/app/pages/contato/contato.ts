import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { MapComponent } from '../../shared/components/map/map';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, Breadcrumb, MapComponent],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {}
