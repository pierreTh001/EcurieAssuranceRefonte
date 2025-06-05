import React from 'react';
import './SimpleContactFormSection.scss';

const SimpleContactFormSection = () => {
  return (
    <section className="simple-contact-form">
      <div className="form-image">
        <img src="/public/img/contact-form.jpg" alt="Téléphone rétro" />
      </div>

      <div className="form-content">
        <h2>Merci de remplir ces informations pour<br />nous laisser un message</h2>

        <form>
          <div className="form-grid">
            <input type="text" placeholder="Nom*" required />
            <input type="text" placeholder="Prénom*" required />
            <input type="email" placeholder="E-mail*" required />
            <input type="tel" placeholder="Téléphone" />
            <textarea placeholder="Message" rows={5} required></textarea>
          </div>

          <button type="submit" className="submit-button">
            Envoyer un message →
          </button>
        </form>
      </div>
    </section>
  );
};

export default SimpleContactFormSection;
