import { Link } from 'react-router-dom';
import './ButtonComponent.scss';

export interface ButtonProps {
  texte: string;
  lien: string;
  variant?: 'outlined' | 'filled';
  color: string;
}

export default function ButtonComponent({ texte, lien, variant = 'outlined', color='normal' }: ButtonProps) {
  const isExternal = lien.startsWith('http');

  const classNames = `btn ${variant} ${color}`;

  return isExternal ? (
    <a href={lien} className={classNames} target="_blank" rel="noopener noreferrer">
      <span>{texte}</span>
      {variant === 'filled' && <span className="arrow">→</span>}
    </a>
  ) : (
    <Link to={lien} className={classNames}>
      <span>{texte}</span>
      {variant === 'filled' && <span className="arrow">→</span>}
    </Link>
  );
}
