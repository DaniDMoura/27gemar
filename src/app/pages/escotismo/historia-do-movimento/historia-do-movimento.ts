import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-historia-movimento',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  template: `
    <main class="page-layout">
      <section class="page-hero">
        <div class="overlay"></div>
        <h1>História do Movimento</h1>
      </section>

      <app-breadcrumb currentPath="História do Movimento"></app-breadcrumb>

      <article class="content-container">
        <section class="historia animate-fade-up" style="--i: 0">
          <h2>A História do Escotismo Mundial</h2>
          <p>
            Em agosto de 1907, Baden-Powell realizou, na Ilha de Brownsea, no Canal da Mancha, o
            primeiro acampamento experimental com vinte jovens de 12 a 16 anos. Nesse encontro, colocou
            em prática ideias que mais tarde se tornariam pilares do método escoteiro, ensinando
            técnicas de primeiros socorros, observação, orientação e segurança. Como símbolo, o grupo
            utilizava uma bandeira verde com uma flor-de-lis ao centro, que viria a se consolidar como
            um dos principais emblemas do movimento.
          </p>
          <p>
            Com o sucesso da experiência, Baden-Powell passou a organizar suas ideias no livro Escotismo
            para Rapazes, publicado em 1908 inicialmente em fascículos. A repercussão foi imediata: em
            poucas semanas, centenas de patrulhas escoteiras surgiram espontaneamente, demonstrando o
            forte apelo do método. O movimento rapidamente ultrapassou as fronteiras da Inglaterra,
            espalhando-se por diversos países e chegando à América do Sul ainda em 1908.
          </p>
          <p>
            O crescimento acelerado levou à necessidade de organização. Em 1910, Baden-Powell deixou o
            Exército para se dedicar integralmente ao Escotismo, iniciando o que chamou de sua “segunda
            vida”. Nesse mesmo período, surgiram novos ramos, como o Escotismo do Mar e as Guias
            Escoteiras, ampliando o alcance do movimento para diferentes públicos e consolidando sua
            proposta educativa.
          </p>
          <p>
            Hoje, o Escotismo é reconhecido como o maior movimento de educação não formal do mundo,
            presente em mais de 200 países e territórios. Representado internacionalmente pela
            Organização Mundial do Movimento Escoteiro, reúne cerca de 50 milhões de participantes
            ativos e já impactou mais de 300 milhões de jovens desde sua criação, mantendo-se relevante
            ao formar cidadãos comprometidos com a sociedade.
          </p>
        </section>

        <section class="historia">
          <h2>A História do Escotismo no Brasil</h2>
          <p>
            O escotismo foi introduzido no Brasil em 1910, por intermédio de marinheiros e oficiais de
            nossa Marinha, que trouxeram consigo uniformes escoteiros e o interesse de semear o
            movimento no país. No dia 14 de junho do mesmo ano, na casa número 13 da Rua do Chichorro,
            no Catumbi, Rio de Janeiro, reuniram-se formalmente todos os interessados pelo escotismo e
            embarcados nos navios que haviam chegado ao Brasil. Naquele local foi oficialmente fundado o
            Centro de Boy Scouts do Brasil.
          </p>
          <p>
            Na década de 1920, o movimento passou por um processo de organização nacional. Em 1924, foi
            criada a União dos Escoteiros do Brasil, com o objetivo de unificar os diversos grupos e
            federações existentes. Esse marco consolidou o Escotismo no país, permitindo maior
            padronização de práticas e fortalecimento institucional. Nos anos seguintes, a UEB recebeu
            reconhecimento oficial do governo e passou a atuar como entidade dirigente do Escotismo
            brasileiro.
          </p>
        </section>

        <section class="historia animate-fade-up" style="--i: 2">
          <h2>A História do Escotismo do Mar</h2>
          <p>
            Baden-Powell costumava a sair para aventuras marítimas com seus irmãos, suas férias de nosso
            eram repletas de descobertas à bordo de embarcações. Por conta da paixão e envolvimento de
            B.P. com as atividades em alto mar, um acampamento, liderado pelo Fundador em agosto de
            1909, reuniu jovens às margens do Rio Beaulieu, para o primeiro Acampamento de Escoteiros do
            Mar.
          </p>
          <p>
            No Brasil, a modalidade foi introduzida após uma visita proposta pelo Velho Lobo, Tenente
            Benjamin Sodré, à cerimônia de Promessa dos primeiros Escoteiros do Pará. Os oficiais da
            missão José Bonifácio acabaram convidando os novos Escoteiros para visitar o cruzador, e
            Benjamin Sodré, juntamente com Frederico Villar e Gumercindo Loretti desenvolveram a ideia
            de criar o Escotismo do Mar em terras brasileiras. A partir de 1921, quando o primeiro grupo
            do Mar surgiu – (G.E. do Mar Decimo (10°/RJ), outros grupos foram surgindo, fortalecendo o
            interesse e importância da modalidade.
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
export class HistoriaMovimento {}
