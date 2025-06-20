import React from "react";
import { Clock, Code2, FileText, Leaf, LogIn, Briefcase } from "lucide-react";
import "./AvantagesSection.scss";
import AdvantageCard from "../AdvantageCard/AdvantageCard";

const AvantagesSection = () => {
  return (
    <section className="avantages-section">
      <h2>Les avantages</h2>
      <p className="intro">
        Découvrez les nombreux avantages réservés à nos partenaires : un accompagnement expert, une rémunération attractive,
        une grande réactivité, et des outils professionnels pour vous aider à développer et réussir votre activité en toute sérénité.
      </p>

      <div className="grid">
        <AdvantageCard
          icon={<Clock />}
          title="Commission"
          description="Une commission intéressante pour toute affaire souscrite que vous apportez."
          dark
        />
        <AdvantageCard
          icon={<Code2 />}
          title="Outils innovants"
          description="La mise en place d'outils professionnels pour optimiser la gestion de votre portefeuille clients."
        />
        <AdvantageCard
          icon={<FileText />}
          title="Gestion contrats"
          description="Notre plateforme web vous permet de gérer au mieux vos clients, vos adhésions et vos demandes en cours."
          dark
        />
        <AdvantageCard
          icon={<Leaf />}
          title="Souscription rapide"
          description="Une souscription rapide proposition en 1 min sur l’extranet et édition des attestations dans les 24h à 48h."
        />
        <AdvantageCard
          icon={<LogIn />}
          title="Fidélisation et intégration"
          description="À l’issue de 12 à 36 mois, le client revient dans votre portefeuille dès l'accord de votre compagnie."
          dark
        />
        <AdvantageCard
          icon={<Briefcase />}
          title="Accompagnement"
          description="Les bénéfices d'une relation gagnant-gagnant vous faisant profiter des conseils de nos experts techniques."
        />
      </div>
    </section>
  );
};

export default AvantagesSection;
