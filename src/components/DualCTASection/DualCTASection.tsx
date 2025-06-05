import React from 'react';
import './DualCTASection.scss';
import { useNavigate } from 'react-router-dom';

const DualCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="dual-cta">
      <div className="dual-cta__block">
        <h3>Nos Services d'Assurance</h3>
        <p>
          Découvrez notre large gamme de produits d'assurance adaptés à vos besoins :
          assurance auto, habitation, santé, professionnelle et bien plus encore.
          Nos experts vous accompagnent pour trouver la solution qui vous convient.
        </p>
        <button onClick={() => navigate('/services')}>Voir nos produits →</button>
      </div>

      <div className="dual-cta__block">
        <h3>Espace Partenaires</h3>
        <p>
          Découvrez notre programme de partenariat et rejoignez notre réseau de professionnels.
          Ensemble, offrons les meilleures solutions d'assurance à nos clients.
        </p>
        <button onClick={() => navigate('/inscription')}>Devenir partenaire →</button>
      </div>
    </section>
  );
};

export default DualCTASection;
