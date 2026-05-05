import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    data: {
      seo: {
        title: 'Página Inicial',
        description: 'Bem-vindo ao 27º Grupo Escoteiro do Mar Cornelis Verolme. Desenvolvendo jovens por meio do Método Escoteiro em Angra dos Reis.',
        keywords: 'escoteiros, escoteiros do mar, angra dos reis, gemar, juventude, educação'
      }
    }
  },
  { 
    path: 'atividades', 
    loadComponent: () => import('./pages/atividades/atividades').then(m => m.Atividades),
    data: {
      seo: {
        title: 'Nossas Atividades',
        description: 'Conheça as atividades do 27º GEMAR divididas por ramos: Lobinho, Escoteiro, Sênior e Pioneiro.',
        keywords: 'atividades escoteiras, lobinho, escoteiro, sênior, pioneiro, acampamento'
      }
    }
  },
  { 
    path: 'escotismo', 
    loadComponent: () => import('./pages/escotismo/escotismo').then(m => m.Escotismo),
    data: {
      seo: {
        title: 'O Escotismo',
        description: 'Descubra a história do movimento escoteiro mundial e no Brasil, e conheça a Lei Escoteira que guia nossos jovens.',
        keywords: 'história do escotismo, baden-powell, lei escoteira, promessa escoteira'
      }
    }
  }
];
