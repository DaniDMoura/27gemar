import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-lei-promessa',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>Lei e Promessa</h1>
      </section>

      <app-breadcrumb currentPath="Lei e Promessa"></app-breadcrumb>

      <article class="content-container">
        <section class="promessa">
          <h2>A Promessa Escoteira</h2>
          <p>
            No momento da sua Promessa, o escoteiro assume, livremente, o compromisso de viver de acordo com os princípios do Movimento Escoteiro.
          </p>
          <blockquote class="promessa-text">
            "Prometo pela minha honra fazer o melhor possível para:<br>
            Cumprir meus deveres para com Deus e minha Pátria;<br>
            Ajudar o próximo em toda e qualquer ocasião;<br>
            E obedecer à Lei Escoteira."
          </blockquote>
        </section>

        <section class="leis">
          <h2>A Lei Escoteira</h2>
          <p>
            A Lei Escoteira é um código de conduta composto por dez artigos fundamentais, baseado em
            princípios como honra, lealdade, respeito e serviço ao próximo.
          </p>
          <ul>
            <li>Lei 1: O Escoteiro tem uma só palavra; sua honra vale mais que a própria vida.</li>
            <li>Lei 2: O Escoteiro é leal.</li>
            <li>Lei 3: O Escoteiro está sempre alerta para ajudar o próximo e pratica diariamente uma boa ação.</li>
            <li>Lei 4: O Escoteiro é amigo de todos e irmão dos demais Escoteiros.</li>
            <li>Lei 5: O Escoteiro é cortês.</li>
            <li>Lei 6: O Escoteiro é bom para os animais e as plantas.</li>
            <li>Lei 7: O Escoteiro é obediente e disciplinado.</li>
            <li>Lei 8: O Escoteiro é alegre e sorri nas dificuldades.</li>
            <li>Lei 9: O Escoteiro é econômico e respeita o bem alheio.</li>
            <li>Lei 10: O Escoteiro é limpo de corpo e alma.</li>
          </ul>
        </section>
      </article>
    </main>
  `,
  styles: [`
    @use '../../../shared/styles/layout';
    .page-layout { @extend .page-layout; }
    .promessa-text {
      font-size: 1.4rem;
      font-style: italic;
      color: #05998c;
      padding: 2rem;
      border-left: 4px solid #05998c;
      background: #f9f9f9;
      margin: 2rem 0;
      line-height: 1.6;
    }
  `]
})
export class LeiPromessa {}
