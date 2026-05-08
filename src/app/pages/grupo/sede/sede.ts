import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { MapComponent } from '../../../shared/components/map/map';

@Component({
  selector: 'app-sede',
  standalone: true,
  imports: [CommonModule, Breadcrumb, MapComponent],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1 class="animate-fade-in">Nossa Sede</h1>
      </section>

      <app-breadcrumb currentPath="Sede"></app-breadcrumb>

      <article class="content-container">
        <section class="sede-info animate-fade-up">
          <h2>Onde nos encontramos</h2>
          <p>
            Nossa sede está localizada em Jacuecanga, Angra dos Reis. Um espaço dedicado ao aprendizado e à convivência dos nossos jovens.
          </p>
          <p>
            <b>Endereço:</b> Rua Almirante Custódio de Melo, s/n, Jacuecanga, Angra dos Reis - RJ
          </p>
          <div class="map-wrapper">
            <app-map height="400px"></app-map>
          </div>
        </section>
      </article>
    </main>
  `,
  styles: [`
    @use '../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
    .map-wrapper {
      margin-top: 2rem;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #eee;
    }
  `]
})
export class Sede {}
