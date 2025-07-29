import React from "react";
import "./BctSolutionBanner.scss";
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

const BctSolutionBanner: React.FC = () => {
  return (
    <section className="bct-banner mw92">
      <div className="bct-banner__content">
        <div className="bct-banner__left">
          <h2>
            Professionnels refusés<br />
            par les assureurs :<br />
            <span>le BCT comme<br />solution</span>
          </h2>
        </div>
        <div className="bct-banner__right">
          <p>
            Certaines entreprises, notamment dans le BTP, rencontrent des refus d’assurance en responsabilité civile décennale. Le Bureau Central de Tarification (BCT) peut alors obliger un assureur à les couvrir.
          </p>
          <p>
            Nous accompagnons ces professionnels dans la constitution, le dépôt et le suivi de leur dossier auprès du BCT. Une solution efficace pour rester assuré, même en cas de refus répétés.
          </p>

          <div className="BctButton">
            <ButtonComponent texte="Je m'inscris" lien="/signup" variant="filled" />
            <ButtonComponent texte="Contactez-nous" lien="/contact" variant="filled" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BctSolutionBanner;
