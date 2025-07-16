import React from "react";
import "./AproposSection.scss";
import AproposImg from "../../../../../public/img/quisommesnous.jpg"; // remplace par ton chemin d’image
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

const AproposSection: React.FC = () => {
  return (
    <section className="apropos mainPage">
      <div className="apropos__container w92">
        <div className="apropos__text mw80">
          <h2 className="apropos__title">
            à propos de<br />
            l’écurie de<br />
            l’assurance
          </h2>
          <p className="apropos__paragraph">
            L’écurie de l’assurance est un cabinet de courtage nouvelle génération,
            spécialisé dans l’assurance construction notamment la responsabilité civile
            décennale, les risques spéciaux et les professions intellectuelles du BTP.
          </p>
          <p className="apropos__paragraph">
            En tant que courtier accessoire dédié aux agents généraux nous offrons des
            solutions concrètes et rapides face aux situations de résiliation, de
            non-assurabilité ou d’impasse technique. Notre rôle : accompagner,
            stabiliser, faire rebondir nos clients.
          </p>
          <p className="apropos__paragraph">
            Avec une plateforme 100 % digitale et un suivi expert.
          </p>
          <p className="apropos__paragraph">
            Notre mission est de vous proposer une solution d’assurance optimisée,
            efficace et complètement adaptée à vos besoins.
          </p>
          <ButtonComponent texte="Contactez-nous" lien="/contact" variant="filled" />
        </div>
        <div className="apropos__image">
          <img src={AproposImg} alt="Équipe autour d'une table" />
        </div>
      </div>
    </section>
  );
};

export default AproposSection;
