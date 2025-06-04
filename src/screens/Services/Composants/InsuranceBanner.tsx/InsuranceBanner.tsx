import React from 'react';
import './InsuranceBanner.scss';

const InsuranceBanner = () => {
  return (
    <section className="insurance-banner">
      <div className="insurance-banner__left">
        <h1>
          Nos services <br /> d’assurance
        </h1>
      </div>
      <div className="insurance-banner__right">
        <p>
          Ecurie Assurance vous accompagne avec des solutions d'assurance
          décennale spécialement conçues pour les professionnels du bâtiment.
          Découvrez notre gamme complète d'assurances construction adaptées à
          tous les métiers du bâtiment.
        </p>
      </div>
    </section>
  );
};

export default InsuranceBanner;
