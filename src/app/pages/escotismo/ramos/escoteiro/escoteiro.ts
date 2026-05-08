import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-ramo-escoteiro',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Ramo Escoteiro</h1>
      </section>

      <app-breadcrumb currentPath="Escoteiro"></app-breadcrumb>

      <section class="content-container">
        <div class="intro">
          <h2>Escoteiro (11 a 14 anos)</h2>
          <p>
            O Ramo Escoteiro é destinado a jovens de 11 a 14 anos e tem como foco o desenvolvimento da
            autonomia, liderança e espírito de equipe. Organizados em patrulhas que formam a tropa, os
            participantes assumem responsabilidades progressivas, aprendendo na prática a tomar
            decisões, colaborar e respeitar o coletivo.
          </p>
          <p>
            As atividades incluem acampamentos, excursões e desafios ao ar livre, sempre com orientação, 
            incentivando o contato com a natureza e o aprendizado contínuo. Com o lema “Sempre Alerta”, 
            os escoteiros são estimulados a explorar, descobrir e superar limites, fortalecendo a 
            confiança, o senso de responsabilidade e a capacidade de agir com iniciativa.
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
export class RamoEscoteiro {}
