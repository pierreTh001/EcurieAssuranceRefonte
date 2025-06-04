export interface NavItem {
  title: string;
  path: string;
}

export const navLinks: NavItem[] = [
  { title: 'Accueil', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Société', path: '/societe' },
  { title: 'Partenaires', path: '/partenaires' },
  { title: 'Contact', path: '/contact' },
];
