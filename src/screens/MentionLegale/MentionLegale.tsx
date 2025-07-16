import React from 'react';
import './MentionLegale.scss';

const sections = [
  { id: 'presentation', label: 'Présentation du site' },
  { id: 'hebergement', label: 'Hébergement' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'propriete', label: 'Propriété intellectuelle' },
  { id: 'donnees', label: 'Données personnelles' },
  { id: 'cookies', label: 'Cookies & outils tiers' },
  { id: 'responsabilite', label: 'Responsabilité' },
  { id: 'liens', label: 'Liens hypertextes' },
  { id: 'loi', label: 'Loi applicable' },
  { id: 'contact', label: 'Contact' }
];

const MentionLegale = () => {
  return (
     <div className='layout mainPage'>
      <nav className="sidebar mainPage">
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="content">
        <h1>Mentions légales</h1>
        <p><em>Actualisé le : 13 juin 2025</em></p>

        <section id="presentation">
          <h2>1. Présentation du site</h2>
          <p><strong>Nom du site</strong> : Écurie-Assurance</p>
          <p><strong>URL</strong> : <a href="https://ecurie-assurance.fr" target="_blank" rel="noopener noreferrer">https://ecurie-assurance.fr</a></p>
          <ul>
            <li>Dénomination sociale : Écurie Assurances</li>
            <li>Forme juridique : SARL</li>
            <li>Capital social : 20 000€</li>
            <li>Siège social : 128 rue de la Boétie, Immeuble D, Étage 4, 75008 Paris</li>
            <li>RCS : [Ville] B [000 000 000]</li>
            <li>SIRET : 489 716 605 00083</li>
            <li>TVA intracommunautaire : FR 49 489 716 605</li>
            <li>Directeur : Hanaty Karim</li>
            <li>Contact : <a href="mailto:contact@ecurie-assurance.fr">contact@ecurie-assurance.fr</a></li>
          </ul>
        </section>

        <section id="hebergement">
          <h2>2. Hébergement</h2>
          <ul>
            <li>Hébergeur : OVH</li>
            <li>Adresse : 2 rue Kellermann, 59053 Roubaix</li>
            <li>Téléphone : 08 203 203 63</li>
          </ul>
        </section>

        <section id="privacy">
          <h2>3. Propriété intellectuelle</h2>
          <p>Tout le contenu (textes, images, vidéos, etc.) est protégé par le droit d’auteur. Toute reproduction est interdite sans autorisation.</p>
        </section>

        <section id="donnees">
          <h2>4. Données personnelles</h2>
          <p>Les données collectées sont utilisées pour traiter votre demande et ne sont pas cédées à des tiers. Vous disposez de droits (accès, rectification, etc.) en écrivant à <a href="mailto:contact@ecurie-assurance.fr">contact@ecurie-assurance.fr</a>.</p>
        </section>

        <section id="cookies">
          <h2>5. Cookies & outils tiers</h2>
          <p>Le site utilise des cookies (Google Analytics, etc.). Vous pouvez gérer vos préférences via un bandeau ou les paramètres navigateur.</p>
        </section>

        <section id="responsabilite">
          <h2>6. Responsabilité</h2>
          <p>Les informations sont fournies à titre indicatif. L’éditeur ne peut être tenu responsable d’erreurs ou d’interruptions du site.</p>
        </section>

        <section id="liens">
          <h2>7. Liens hypertextes</h2>
          <p>Les liens vers des sites tiers ne relèvent pas de la responsabilité de l’éditeur. Toute mise en lien vers ce site nécessite autorisation.</p>
        </section>

        <section id="loi">
          <h2>8. Loi applicable</h2>
          <p>Les présentes mentions sont régies par le droit français. En cas de litige, le tribunal du siège social est compétent.</p>
        </section>

        <section id="contact">
          <h2>9. Contact</h2>
          <p>Email : <a href="mailto:contact@ecurie-assurance.fr">contact@ecurie-assurance.fr</a></p>
          <p>Adresse : 128 rue de la Boétie, Immeuble D, Étage 4, 75008 Paris</p>
        </section>
      </main>
    </div>
  );
};

export default MentionLegale;
