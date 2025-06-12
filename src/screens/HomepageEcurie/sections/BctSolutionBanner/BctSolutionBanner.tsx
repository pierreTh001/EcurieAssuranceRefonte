import React from "react";
import "./BctSolutionBanner.scss";

const BctSolutionBanner: React.FC = () => {
  return (
    <section className="bct-banner mw92">
      <div className="bct-banner__content">
        <div className="bct-banner__left">
          <h2>
            Professionnels Refusés<br />
            Par Les Assureurs :<br />
            <span>Le BCT Comme<br />Solution</span>
          </h2>
        </div>
        <div className="bct-banner__right">
          <p>
            Certaines entreprises, notamment dans le BTP, rencontrent des refus d’assurance en responsabilité civile décennale. Le Bureau Central de Tarification (BCT) peut alors obliger un assureur à les couvrir.
          </p>
          <p>
            Nous accompagnons ces professionnels dans la constitution, le dépôt et le suivi de leur dossier auprès du BCT. Une solution efficace pour rester assuré, même en cas de refus répétés.
          </p>
          <a href="#contact" className="bct-banner__cta">
            Contactez-nous <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BctSolutionBanner;
