import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-chefia',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1 class="animate-fade-in">Chefia</h1>
      </section>

      <app-breadcrumb currentPath="Chefia"></app-breadcrumb>

      <article class="content-container">
        <section class="chefia-intro animate-fade-up">
          <h2>Nossos Chefes</h2>
          <p>
            A chefia do 27º GEMAR é composta por voluntários dedicados que passam por constante formação para aplicar o Método Escoteiro com segurança e eficiência.
          </p>
          <div class="placeholder-grid">
            <p>Conteúdo sobre os chefes de cada ramo em breve.</p>
          </div>
        </section>
      </article>
    </main>
  `,
  styles: [`
    @use '../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
    .placeholder-grid {
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
      text-align: center;
      margin-top: 2rem;
    }
  `]
})
export class Chefia {}
