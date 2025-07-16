import React from "react";
import "./BrandSection.scss";

const BrandSection: React.FC = () => {
  return (
    <section className="brand">
      <div className="brand__inner mw80 w92">
        <h2 className="brand__title">
          Une marque de <strong>Pacific Assurances</strong>
        </h2>
        <p className="brand__text">
          Agence de Souscription en Assurances dont le siège social est situé au 128
          Rue de la Boétie Immeuble D étage 4 - 75008 PARIS, Société à Responsabilité
          Limitée (SARL) au capital de 20.000€ immatriculée au RCS PARIS 489 719 605.
        </p>
        <p className="brand__text">
          Toute réclamation peut être adressée directement à la société PACIFIC
          ASSURANCES à l’attention du Service Réclamations :{" "}
          <a href="mailto:reclamation@ecurie-assurance.fr">
            reclamation@ecurie-assurance.fr
          </a>{" "}
          ou à l’adresse du siège social. Un accusé de réception est envoyé sous 10
          jours maximum et elles seront traitées dans un délai de 60 jours maximum.
        </p>
        <p className="brand__text">
          Médiation : (si échec de la réclamation) La Médiation de l’Assurance, Pole
          CSCA, TSA 50110 – 75441 Paris Cedex 09 ou{" "}
          <a href="mailto:le.mediateur@mediation-assurance.org">
            le.mediateur@mediation-assurance.org
          </a>
        </p>
        <p className="brand__text">
          Garanties financières et Assurance de Responsabilité Civile Professionnelle
          conformes à l’article L 512-7 du Code des Assurances.
        </p>
      </div>
    </section>
  );
};

export default BrandSection;
