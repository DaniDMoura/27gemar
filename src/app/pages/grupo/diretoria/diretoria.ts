import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-diretoria',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Diretoria</h1>
      </section>

      <app-breadcrumb currentPath="Diretoria"></app-breadcrumb>

      <article class="content-container">
        <section class="diretoria-intro">
          <h2>Gestão Institucional</h2>
          <p>
            A diretoria é responsável pela administração do grupo, garantindo os recursos necessários para que as atividades ocorram e mantendo a regularidade institucional junto à UEB.
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
export class Diretoria {}
