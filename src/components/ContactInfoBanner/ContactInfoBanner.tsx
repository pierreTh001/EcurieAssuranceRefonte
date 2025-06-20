import React from 'react';
import './ContactInfoBanner.scss';

const contactItems = [
  {
    id: 1,
    title: 'Adresse',
    content: '128 rue de la Boétie, immeuble D, 75008 Paris',
  },
  {
    id: 2,
    title: 'Vous pouvez nous écrire ici',
    content: 'contact@ecurie-assurance.fr',
  },
  {
    id: 3,
    title: 'Appelez-nous au',
    content: '+33 1 80 81 44 95',
  },
  {
    id: 4,
    title: "Heures d'ouverture",
    content: '10h00 - 18h00 du lundi au vendredi',
    contentLine2: '10h - 12h30 Samedi',
  },
];

const ContactInfoBanner = () => {
  return (
    <section className="contact-info-banner">
      {contactItems.map((item) => (
        <div key={item.id} className="contact-info-banner__item">
          <div className="circle">{item.id}</div>
          <div className="contact-info-banner__text">
            <strong>{item.title}</strong>
            <p>{item.content}</p>
            <p>{item.contentLine2}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactInfoBanner;
