// SuccessRaceComponent.tsx
import React from 'react';
import './SuccessRaceComponent.scss';

import cheval from '../../../../../public/img/reussite/cheval.png';
import aupas from '../../../../../public/img/reussite/aupas.png';
import galos from '../../../../../public/img/reussite/galos.png';
import trophe from '../../../../../public/img/reussite/trophe.png';

const SuccessRaceComponent = () => {
  const steps = [
    {
      icon: cheval,
      title: "Étape 1",
      heading: 'Paddock',
      description: 'Prêt au départ ! Inscrivez-vous et rejoignez la ligne de départ.',
      bonus: 'Accès immédiat à la course',
    },
    {
      icon: aupas,
      title: "Étape 2",
      heading: "Galop d'essai",
      description: 'Premiers contrats : élancez-vous sous les acclamations du turf !',
      bonus: 'Réduction spéciale pour vos clients',
    },
    {
      icon: galos,
      title: "Étape 3",
      heading: 'Course',
      description: 'Accumulez les ventes et franchissez les obstacles, au coude-à-coude avec vos concurrents.',
      bonus: 'Commission bonus exclusive',
    },
    {
      icon: trophe,
      title: "Étape 4",
      heading: "Ligne d'arrivée",
      description: 'La victoire se rapproche : franchissez la ligne, une pluie de récompenses vous attend.',
      bonus: 'Avantage premium Ecurie Assurance',
    },
  ];

  return (
    <section className="success-race">
      <h2>Faites galoper votre <span>réussite</span> !</h2>
      <p className="intro">
        Ecurie Assurance lance un défi : chaque contrat décennal vendu fait avancer votre cheval sur la piste.<br />
        Vivez l’esprit Ecurie Assurance dans une <strong>compétition amicale inédite</strong> !
      </p>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon"><img src={step.icon} alt="icon" /></div>
            <h3>{step.title}</h3>
            <h4>{step.heading}</h4>
            <p>{step.description}</p>
            <div className="bonus">{step.bonus}</div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p className="emphasis">
          Emmenez votre cheval vers la victoire : <strong>chaque étape franchie booste votre performance et vous rapproche du podium !</strong>
        </p>
        <p className="light">
          Défiez vos confrères dans la bonne humeur : grimpez au classement, faites vibrer l’ambiance hippodrome et remportez la course !
        </p>
        <button className="cta">Je m’inscris →</button>
      </div>
    </section>
  );
};

export default SuccessRaceComponent; 
