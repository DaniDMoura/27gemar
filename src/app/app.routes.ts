import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    data: { seo: { title: 'Página Inicial' } }
  },
  // O Escotismo
  { 
    path: 'escotismo',
    data: { breadcrumb: 'Escotismo' },
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/escotismo/escotismo').then(m => m.Escotismo),
        data: { seo: { title: 'O que é o Escotismo' } }
      },
      {
        path: 'lei-promessa',
        loadComponent: () => import('./pages/escotismo/lei-promessa/lei-promessa').then(m => m.LeiPromessa),
        data: { seo: { title: 'Lei e Promessa' } }
      },
      {
        path: 'historia-do-movimento',
        loadComponent: () => import('./pages/escotismo/historia-do-movimento/historia-do-movimento').then(m => m.HistoriaMovimento),
        data: { seo: { title: 'História do Movimento' } }
      },
      {
        path: 'ramos',
        data: { breadcrumb: 'Ramos' },
        children: [
          {
            path: 'lobinho',
            loadComponent: () => import('./pages/escotismo/ramos/lobinho/lobinho').then(m => m.RamoLobinho),
            data: { seo: { title: 'Lobinho' } }
          },
          {
            path: 'escoteiro',
            loadComponent: () => import('./pages/escotismo/ramos/escoteiro/escoteiro').then(m => m.RamoEscoteiro),
            data: { seo: { title: 'Escoteiro' } }
          },
          {
            path: 'senior',
            loadComponent: () => import('./pages/escotismo/ramos/senior/senior').then(m => m.RamoSenior),
            data: { seo: { title: 'Sênior' } }
          },
          {
            path: 'pioneiro',
            loadComponent: () => import('./pages/escotismo/ramos/pioneiro/pioneiro').then(m => m.RamoPioneiro),
            data: { seo: { title: 'Pioneiro' } }
          }
        ]
      }
    ]
  },
  // Quem Somos
  {
    path: 'grupo',
    children: [
      {
        path: 'nossa-historia',
        loadComponent: () => import('./pages/grupo/nossa-historia/nossa-historia').then(m => m.NossaHistoria),
        data: { seo: { title: 'Nossa História' } }
      },
      {
        path: 'chefia',
        loadComponent: () => import('./pages/grupo/chefia/chefia').then(m => m.Chefia),
        data: { seo: { title: 'Chefia' } }
      },
      {
        path: 'diretoria',
        loadComponent: () => import('./pages/grupo/diretoria/diretoria').then(m => m.Diretoria),
        data: { seo: { title: 'Diretoria' } }
      },
      {
        path: 'sede',
        loadComponent: () => import('./pages/grupo/sede/sede').then(m => m.Sede),
        data: { seo: { title: 'Nossa Sede' } }
      }
    ]
  },
  // Galeria
  {
    path: 'galeria',
    children: [
      {
        path: 'eventos',
        loadComponent: () => import('./pages/galeria/eventos/eventos').then(m => m.GaleriaEventos),
        data: { seo: { title: 'Eventos' } }
      },
      {
        path: 'acampamentos',
        loadComponent: () => import('./pages/galeria/acampamentos/acampamentos').then(m => m.GaleriaAcampamentos),
        data: { seo: { title: 'Acampamentos' } }
      },
      {
        path: 'atividades-sede',
        loadComponent: () => import('./pages/galeria/atividades-sede/atividades-sede').then(m => m.GaleriaSede),
        data: { seo: { title: 'Atividades na Sede' } }
      }
    ]
  },
  // Links Principais
  {
    path: 'fale-conosco',
    loadComponent: () => import('./pages/contato/contato').then(m => m.Contato),
    data: { seo: { title: 'Fale Conosco' } }
  },
  {
    path: 'seja-escoteiro',
    loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderPage),
    data: { seo: { title: 'Seja Escoteiro' } }
  },
  // Redirecionamentos para compatibilidade
  { path: 'atividades', redirectTo: 'escotismo/ramos/lobinho', pathMatch: 'full' },
  { path: 'contato', redirectTo: 'fale-conosco', pathMatch: 'full' },
  { path: 'nossa-historia', redirectTo: 'grupo/nossa-historia', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
