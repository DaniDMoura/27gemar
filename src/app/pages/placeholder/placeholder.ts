import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Página em Construção</h1>
      </section>
      <app-breadcrumb currentPath="Em breve"></app-breadcrumb>
      <div class="content-container">
        <p>Esta página estará disponível em breve com conteúdo atualizado sobre o 27º GEMAR.</p>
      </div>
    </main>
  `,
  styles: [`
    @use '../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
  `]
})
export class PlaceholderPage {}
