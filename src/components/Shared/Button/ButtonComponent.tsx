import { Link } from 'react-router-dom';
import './ButtonComponent.scss';

export interface ButtonProps {
  texte: string;
  lien: string;
  variant?: 'outlined' | 'filled';
}

export default function ButtonComponent({ texte, lien, variant = 'outlined' }: ButtonProps) {
  return (
    <Link to={lien} className={`btn ${variant}`}>
      <span>{texte}</span>
      {variant === 'filled' && <span className="arrow">→</span>}
    </Link>
  );
}
