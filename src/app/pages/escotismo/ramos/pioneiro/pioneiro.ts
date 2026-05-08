import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-ramo-pioneiro',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Ramo Pioneiro</h1>
      </section>

      <app-breadcrumb currentPath="Pioneiro"></app-breadcrumb>

      <section class="content-container">
        <div class="intro">
          <h2>Pioneiro (18 a 21 anos)</h2>
          <p>
            O Ramo Pioneiro é destinado a jovens de 18 até 21 anos e representa a transição para a
            vida adulta, com foco em autonomia, responsabilidade e serviço à comunidade. Organizados
            em clãs, os participantes planejam e executam suas próprias atividades, desenvolvendo
            liderança, senso crítico e compromisso social.
          </p>
          <p>
            Diferente dos ramos anteriores, a vivência deixa de ser simbólica e passa a ter impacto real, 
            por meio de ações comunitárias e projetos de transformação. Guiados pelo lema “Servir”, 
            os pioneiros consolidam seus valores e princípios, ao mesmo tempo em que podem atuar 
            como voluntários nos demais ramos, encerrando sua jornada como jovens no movimento 
            com a preparação para a vida adulta e o engajamento contínuo como escotistas ou dirigentes.
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
export class RamoPioneiro {}
