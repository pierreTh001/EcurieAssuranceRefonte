import React from 'react';
import './QuoteBanner.scss';
import { useNavigate } from 'react-router-dom';

const QuoteBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="quote-banner">
      <h2>Obtenez votre devis personnalisé en quelques minutes</h2>
      <p>
        Profitez de notre expertise pour protéger ce qui vous tient à cœur. Nos conseillers vous
        accompagnent dans le choix de vos assurances avec des solutions sur mesure et des tarifs
        compétitifs.
      </p>
      <div className="quote-banner__buttons">
        <button className="btn-outline" onClick={() => navigate('/services')}>
          Découvrez nos solutions d’assurance adaptées à vos besoins →
        </button>
        <button className="btn-solid" onClick={() => navigate('/signup')}>Demander un devis →</button>
      </div>
    </section>
  );
};

export default QuoteBanner;
