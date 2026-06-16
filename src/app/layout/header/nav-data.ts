export interface NavItem {
  label: string;
  route?: string;
  children?: NavItem[];
  isCTA?: boolean;
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: 'O Escotismo',
    children: [
      {
        label: 'O Movimento',
        children: [
          { label: 'O que é o Escotismo', route: '/escotismo' },
          { label: 'Lei e Promessa', route: '/escotismo/lei-promessa' },
        ],
      },
      {
        label: 'Ramos Escoteiros',
        children: [
          { label: 'Lobinho', route: '/escotismo/ramos/lobinho' },
          { label: 'Escoteiro', route: '/escotismo/ramos/escoteiro' },
          { label: 'Sênior', route: '/escotismo/ramos/senior' },
          { label: 'Pioneiro', route: '/escotismo/ramos/pioneiro' },
        ],
      },
      {
        label: 'História',
        children: [{ label: 'História do Movimento', route: '/escotismo/historia-do-movimento' }],
      },
    ],
  },
  {
    label: 'Quem Somos',
    children: [
      {
        label: 'História',
        children: [{ label: 'Nossa História', route: '/grupo/nossa-historia' }],
      },
      {
        label: 'Sobre Nós',
        children: [
          { label: 'Chefia', route: '/grupo/chefia' },
          { label: 'Diretoria', route: '/grupo/diretoria' },
        ],
      },
      {
        label: 'Sede',
        children: [{ label: 'Nossa Sede', route: '/grupo/sede/' }],
      },
    ],
  },
  {
    label: 'Galeria',
    children: [
      {
        label: 'Fotos',
        children: [
          { label: 'Eventos', route: '/galeria/eventos' },
          { label: 'Acampamentos', route: '/galeria/acampamentos' },
          { label: 'Atividades na Sede', route: '/galeria/atividades-sede' },
        ],
      },
    ],
  },
  {
    label: 'Fale Conosco',
    route: '/fale-conosco',
  },
  {
    label: 'Seja Escoteiro',
    route: 'https://wa.me/5524974010894?text=Ol%C3%A1%21%20Tenho%20interesse%20de%20participar%20do%2027%20GEMAR.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F',
    isCTA: true,
  },
];
