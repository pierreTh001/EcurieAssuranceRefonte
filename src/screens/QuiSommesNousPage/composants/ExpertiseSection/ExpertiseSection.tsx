import React from "react";
import "./ExpertiseSection.scss";

import expertise1 from '/public/img/expertise/1.jpg';
import expertise2 from '/public/img/expertise/2.jpg';
import expertise3 from '/public/img/expertise/3.jpg';
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

// Données de démonstration
const EXPERTISE_ITEMS = [
  {
    id: 1,
    img: expertise1,
    title: "Notre spécialisation couvre notamment",
    text: `Les professionnels du gros œuvre et du second œuvre, les métiers spécifiques tels que les piscinistes, charpentiers bois, étancheurs, Les professions intellectuelles du bâtiment (PIB), Les entreprises en situation particulière : jamais assurées, résiliées, en redressement judiciaire ou refusées par d'autres compagnies. Nous apportons des réponses concrètes et personnalisées à ces profils souvent laissés de côté par le marché traditionnel.`
  },
  {
    id: 2,
    img: expertise2,
    title: "Accompagnement BCT",
    text: `En cas de refus d'assurance, nous aidons à monter un dossier auprès du Bureau Central de Tarification (BCT), qui peut contraindre une compagnie à assurer. On s’occupe de tout : analyse, dossier, suivi jusqu’à la décision. Plus de 150 agents nous font confiance pour placer temporairement leurs clients difficiles à assurer. Une fois la situation régularisée, le client peut réintégrer le portefeuille de son agent.`
  },
  {
    id: 3,
    img: expertise3,
    title: "Une équipe engagée et des outils digitaux",
    text: `Devis, souscriptions, suivi : tout est accessible depuis notre plateforme web, pensée pour vous faire gagner du temps. Nos experts sont disponibles, réactifs, et vous accompagnent à chaque étape. Vous n’êtes jamais seul face à vos démarches d’assurance.`
  }
];

const ExpertiseSection: React.FC = () => {
  return (
    <section className="expertise">
      <div className="expertise__inner mw80 w92">
        <div className="expertise__intro">
          <small className="expertise__label">NOTRE EXPERTISE</small>
          <h2 className="expertise__title">Spécialiste des risques complexes</h2>
          <p className="expertise__desc">
            Depuis 5 ans, Écurie Assurance accompagne les professionnels du bâtiment,
            y compris les profils résiliés, refusés ou jamais assurés. Nous nous
            appuyons sur les 20 ans d’expérience de Pacific Assurance pour offrir des
            solutions solides, même dans les situations les plus complexes.
          </p>
          <p className="expertise__desc">
            <strong>Notre force :</strong> trouver des solutions pour les profils que
            d’autres refusent.
          </p>
          <ButtonComponent texte="Voir nos produits" lien="/services" variant="filled" />
        </div>
        <div className="expertise__cards">
          {EXPERTISE_ITEMS.map((item) => (
            <div key={item.id} className="expertise__card">
              <div className="expertise__card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="expertise__card-title">{item.title}</h3>
              <p className="expertise__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
