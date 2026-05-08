import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-galeria-sede',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Atividades na Sede</h1>
      </section>

      <app-breadcrumb currentPath="Atividades na Sede"></app-breadcrumb>

      <article class="content-container">
        <section class="galeria-intro">
          <h2>Atividades na Sede</h2>
          <p>Registros das nossas atividades de sábado de manhã.</p>
          <div class="gallery-placeholder">
            <p>Galeria de fotos em desenvolvimento.</p>
          </div>
        </section>
      </article>
    </main>
  `,
  styles: [`
    @use '../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
    .gallery-placeholder {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
      min-height: 300px;
      background: #f9f9f9;
      border: 2px dashed #ddd;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
    }
  `]
})
export class GaleriaSede {}
