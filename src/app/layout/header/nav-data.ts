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
      { label: 'O que é o Escotismo', route: '/escotismo' },
      { label: 'Lei e Promessa', route: '/escotismo/lei-promessa' },
      {
        label: 'Ramos Escoteiros',
        children: [
          { label: 'Lobinho', route: '/escotismo/ramos/lobinho' },
          { label: 'Escoteiro', route: '/escotismo/ramos/escoteiro' },
          { label: 'Sênior', route: '/escotismo/ramos/senior' },
          { label: 'Pioneiro', route: '/escotismo/ramos/pioneiro' },
        ]
      },
      { label: 'História do Movimento', route: '/escotismo/historia-do-movimento' },
    ]
  },
  {
    label: 'Quem Somos',
    children: [
      { label: 'Nossa História', route: '/grupo/nossa-historia' },
      { label: 'Chefia', route: '/grupo/chefia' },
      { label: 'Diretoria', route: '/grupo/diretoria' },
      { label: 'Nossa Sede', route: '/grupo/sede' },
    ]
  },
  {
    label: 'Galeria',
    children: [
      { label: 'Eventos', route: '/galeria/eventos' },
      { label: 'Acampamentos', route: '/galeria/acampamentos' },
      { label: 'Atividades na Sede', route: '/galeria/atividades-sede' },
    ]
  },
  {
    label: 'Fale Conosco',
    route: '/fale-conosco'
  },
  {
    label: 'Seja Escoteiro',
    route: '/seja-escoteiro',
    isCTA: true
  }
];
