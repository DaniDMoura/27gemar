import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-ramo-senior',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Ramo Sênior</h1>
      </section>

      <app-breadcrumb currentPath="Sênior"></app-breadcrumb>

      <section class="content-container">
        <div class="intro">
          <h2>Sênior (15 a 17 anos)</h2>
          <p>
            O Ramo Sênior é voltado para jovens de 15 a 17 anos e marca uma fase de maior maturidade,
            autoconhecimento e superação pessoal. Nesse período, os desafios se tornam mais intensos e
            exigem preparo físico, emocional e tomada de decisão, incentivando cada jovem a
            ultrapassar seus próprios limites.
          </p>
          <p>
            As atividades envolvem experiências ao ar livre, técnicas mais avançadas e o contato com 
            novas habilidades e tecnologias, sempre em equipe e com espírito de cooperação. 
            Mantendo o lema “Sempre Alerta”, os seniores fortalecem a responsabilidade, a resiliência 
            e o protagonismo, contando com o apoio da patrulha para enfrentar desafios e construir 
            experiências marcantes.
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
export class RamoSenior {}
