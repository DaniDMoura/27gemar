import { Component, OnInit, PLATFORM_ID, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MapComponent } from '../../shared/components/map/map';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  currentYear = new Date().getFullYear();

  links = [
    { name: 'Escoteiros RJ', url: 'https://www.escoteirosrj.org.br/' },
    { name: 'UEB', url: 'https://www.escoteiros.org.br/' },
    { name: 'WOSM', url: 'https://www.scout.org/' },
    { name: 'Paxtu', url: 'https://paxtu100.escoteiros.org.br' },
    { name: 'Loja Escoteira', url: 'https://loja.escoteiros.org.br//' }
  ];

  social = [
    { name: 'Instagram', url: 'https://www.instagram.com/27gemar/' },
    { name: 'Email: gemarcornelisverolme@gmail.com', url: 'mailto:gemarcornelisverolme@gmail.com' },
    { name: 'Telefone: (24) 97401-0894', url: 'tel:24974010894' },
  ];

  ngOnInit(): void {

  }
}
