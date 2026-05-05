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
  ];

  social = [
    { name: 'Instagram', url: 'https://www.instagram.com/27gemar/' },
    { name: 'Email', url: 'mailto:contato@27gemar.org.br' },
    { name: 'Telefone: (24) 99999-9999', url: 'tel:24999999999' },
  ];

  ngOnInit(): void {
    // Logic if needed
  }
}
