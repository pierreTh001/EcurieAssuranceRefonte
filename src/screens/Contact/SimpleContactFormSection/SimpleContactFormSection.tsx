import React, { useState } from 'react';
import './SimpleContactFormSection.scss';
import { sendContactMessage } from '../sendMailService';
import photo from "../../../../public/img/contact-form.jpg";

const SimpleContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const alphaRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.firstname || !alphaRegex.test(formData.firstname)) {
      errors.firstname = 'Prénom invalide (lettres uniquement)';
    }
    if (!formData.lastname || !alphaRegex.test(formData.lastname)) {
      errors.lastname = 'Nom invalide (lettres uniquement)';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Email invalide';
    }
    if (!formData.message || formData.message.length < 20) {
      errors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validate()) {
      setError('Merci de corriger les erreurs du formulaire.');
      return;
    }

    try {
      await sendContactMessage(formData);
      setSuccess('Votre message a bien été envoyé !');
      setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
      setFieldErrors({});
    } catch (err) {
      setError("Une erreur est survenue. Merci de réessayer.");
    }
  };

  return (
    <section className="simple-contact-form">
      <div className="form-image">
        <img src={photo} alt="Téléphone rétro" />
      </div>

      <div className="form-content">
        <h2>Merci de remplir ces informations pour<br />nous laisser un message</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid formMobile">
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Nom*"
                value={formData.lastname}
                onChange={handleChange}
                className={fieldErrors.lastname ? 'error' : ''}
                required
              />
              {fieldErrors.lastname && <span className="error">{fieldErrors.lastname}</span>}
            </div>

            <div>
              <input
                type="text"
                name="firstname"
                placeholder="Prénom*"
                value={formData.firstname}
                onChange={handleChange}
                className={fieldErrors.firstname ? 'error' : ''}
                required
              />
              {fieldErrors.firstname && <span className="error">{fieldErrors.firstname}</span>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className={fieldErrors.email ? 'error' : ''}
                required
              />
              {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone (facultatif)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <textarea
                name="message"
                placeholder="Message*"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={fieldErrors.message ? 'error' : ''}
                required
              />
              {fieldErrors.message && <span className="error">{fieldErrors.message}</span>}
            </div>
          </div>

          <button type="submit" className="submit-button">Envoyer un message →</button>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default SimpleContactFormSection;
