export interface NavItem {
  title: string;
  path: string;
}

export const navLinks: NavItem[] = [
  { title: 'Accueil', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Avantages', path: '/avantages' },
  { title: 'Qui sommes-nous ?', path: '/societe' },
  // { title: 'Partenaires', path: '/partenaires' },
  { title: 'Contact', path: '/contact' },
];
