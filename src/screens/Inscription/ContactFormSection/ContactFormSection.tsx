import React from 'react';
import './ContactFormSection.scss';

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="form-image">
        <img src="/public/img/signup-form.jpg" alt="Ordinateur sur un bureau" />
      </div>

      <div className="form-content">
        <h2>Merci de remplir ces informations pour<br />obtenir un accès à la tarification en ligne</h2>

        <form>
          <div className="form-grid">
            <input type="text" placeholder="Nom*" required />
            <input type="text" placeholder="Prénom*" required />
            <input type="text" placeholder="Adresse*" required />
            <input type="text" placeholder="Code postal*" required />
            <input type="text" placeholder="Ville*" required />
            <input type="text" placeholder="Raison Social*" required />
            <input type="email" placeholder="E-mail*" required />
            <input type="tel" placeholder="Téléphone*" required />
            <input type="tel" placeholder="Mobile" />
            <input type="text" placeholder="N° ORIAS*" required />
            <input type="text" placeholder="N° SIRET*" required />
            <select required>
              <option value="">Forme juridique*</option>
              <option value="sasu">SASU</option>
              <option value="eurl">EURL</option>
              <option value="auto">Auto-entrepreneur</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Devenir partenaire →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
