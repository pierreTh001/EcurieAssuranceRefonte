import './ButtonComponent.scss'
import { Link } from 'react-router-dom'

export default function ButtonComponent({ texte, lien, variant = 'outlined' }) {
  return (
    <Link to={lien} className={`btn ${variant}`}>
      <span>{texte}</span>
      {variant === 'filled' && <span className="arrow">→</span>}
    </Link>
  )
}
