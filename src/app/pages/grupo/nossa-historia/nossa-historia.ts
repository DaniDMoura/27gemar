import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-nossa-historia',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Nossa História</h1>
      </section>

      <app-breadcrumb currentPath="Nossa História"></app-breadcrumb>

      <article class="content-container">
        <section class="historia-grupo">
          <h2>27º GEMAR Cornelis Verolme</h2>
          <p>
            Fundado com o objetivo de levar os valores do escotismo para a comunidade de Angra dos Reis, o 27º Grupo Escoteiro do Mar Cornelis Verolme tem uma longa trajetória de dedicação à formação de jovens.
          </p>
          <p>
            Nossa história está ligada ao desenvolvimento da região e ao compromisso com a educação não formal, utilizando o mar como cenário para aprendizados inesquecíveis.
          </p>
        </section>
      </article>
    </main>
  `,
  styles: [`
    @use '../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
  `]
})
export class NossaHistoria {}
