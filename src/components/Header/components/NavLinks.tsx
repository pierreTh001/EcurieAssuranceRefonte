import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../../../constants/navigation';

interface NavLinksProps {
  items: NavItem[];
  onNavigate?: () => void;
  className?: string;
}

export const NavLinks = ({ items, onNavigate, className = '' }: NavLinksProps) => {
  const location = useLocation();
  return (
    <nav className={`flex flex-col md:flex-row gap-6 ${className}`.trim()}>
      {items.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onNavigate}
          className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
