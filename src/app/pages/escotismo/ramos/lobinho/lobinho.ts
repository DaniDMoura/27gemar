import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-ramo-lobinho',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1 class="animate-fade-in">Ramo Lobinho</h1>
      </section>

      <app-breadcrumb currentPath="Lobinho"></app-breadcrumb>

      <section class="content-container">
        <div class="intro animate-fade-up">
          <h2>Lobinho (7 a 10 anos)</h2>
          <p>
            O Ramo Lobinho é voltado para crianças de 7 a 10 anos e utiliza o universo do “Livro da
            Jângal” como base simbólica para o desenvolvimento pessoal. Nesse período, os
            participantes aprendem a conviver em grupo, fortalecer a socialização e desenvolver
            valores como respeito, responsabilidade e cooperação.
          </p>
          <p>
            Organizados em alcateias e divididos em pequenas matilhas, vivenciam atividades lúdicas, 
            jogos e aventuras ao ar livre que estimulam a autonomia e o trabalho em equipe. 
            Guiados pela Lei do Lobinho e pelo lema “Melhor Possível”, são incentivados a praticar 
            boas ações no dia a dia, construindo desde cedo um senso de cidadania e convivência saudável.
          </p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    @use '../../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
  `]
})
export class RamoLobinho {}
