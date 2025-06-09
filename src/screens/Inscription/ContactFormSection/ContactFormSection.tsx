import React, { useState } from 'react';
import './ContactFormSection.scss';
import { saveRegistration } from '../../../services/contactService';
import photo from "../../../../public/img/signup-form.jpg";

const initialFormData = {
  lastName: '',
  firstName: '',
  address: '',
  zip: '',
  city: '',
  company: '',
  email: '',
  phone: '',
  mobile: '',
  orias: '',
  siret: '',
  formejuridique: '',
};

const initialErrors = {
  lastName: '',
  firstName: '',
  address: '',
  zip: '',
  city: '',
  company: '',
  email: '',
  mobile: '',
  orias: '',
  siret: '',
  formejuridique: '',
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState(initialErrors);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    const siretRegex = /^\d{14}$/;
    const oriasRegex = /^\d{8}$/;
    const alphaRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

    for (const field in initialErrors) {
      if (!formData[field]) {
        errors[field] = 'Ce champ est requis';
      }
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Email invalide';
    }

    if (formData.mobile && !phoneRegex.test(formData.mobile)) {
      errors.mobile = 'Numéro de mobile invalide';
    }

    if (formData.siret && !siretRegex.test(formData.siret)) {
      errors.siret = 'Le SIRET doit contenir exactement 14 chiffres';
    }

    if (formData.orias && !oriasRegex.test(formData.orias)) {
      errors.orias = 'Le numéro ORIAS doit contenir exactement 8 chiffres';
    }

    if (formData.lastName && !alphaRegex.test(formData.lastName)) {
      errors.lastName = 'Nom invalide (lettres uniquement)';
    }

    if (formData.firstName && !alphaRegex.test(formData.firstName)) {
      errors.firstName = 'Prénom invalide (lettres uniquement)';
    }

    if (formData.city && !alphaRegex.test(formData.city)) {
      errors.city = 'Ville invalide (lettres uniquement)';
    }

    setFieldErrors({ ...initialErrors, ...errors });
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validate()) {
      setError('Merci de corriger les erreurs dans le formulaire.');
      return;
    }

    try {
      const urlEncodedData = new URLSearchParams(formData);
      await saveRegistration(urlEncodedData);
      setSuccess("Demande envoyée avec succès !");
      setFormData(initialFormData);
      setFieldErrors(initialErrors);
    } catch (err) {
      const message = err.response?.data?.error || "Erreur lors de l'envoi.";
      setError(message);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="form-image">
        <img src={photo} alt="Ordinateur sur un bureau" />
      </div>

      <div className="form-content">
        <h2>Merci de remplir ces informations pour<br />obtenir un accès à la tarification en ligne</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid formMobile">
            <div>
              <input name="lastName" type="text" placeholder="Nom*" value={formData.lastName} onChange={handleChange} className={fieldErrors.lastName ? 'error' : ''} />
              {fieldErrors.lastName && <span className="error">{fieldErrors.lastName}</span>}
            </div>

            <div>
              <input name="firstName" type="text" placeholder="Prénom*" value={formData.firstName} onChange={handleChange} className={fieldErrors.firstName ? 'error' : ''} />
              {fieldErrors.firstName && <span className="error">{fieldErrors.firstName}</span>}
            </div>

            <div>
              <input name="address" type="text" placeholder="Adresse*" value={formData.address} onChange={handleChange} className={fieldErrors.address ? 'error' : ''} />
              {fieldErrors.address && <span className="error">{fieldErrors.address}</span>}
            </div>

            <div>
              <input name="zip" type="text" placeholder="Code postal*" value={formData.zip} onChange={handleChange} className={fieldErrors.zip ? 'error' : ''} />
              {fieldErrors.zip && <span className="error">{fieldErrors.zip}</span>}
            </div>

            <div>
              <input name="city" type="text" placeholder="Ville*" value={formData.city} onChange={handleChange} className={fieldErrors.city ? 'error' : ''} />
              {fieldErrors.city && <span className="error">{fieldErrors.city}</span>}
            </div>

            <div>
              <input name="company" type="text" placeholder="Raison Sociale*" value={formData.company} onChange={handleChange} className={fieldErrors.company ? 'error' : ''} />
              {fieldErrors.company && <span className="error">{fieldErrors.company}</span>}
            </div>

            <div>
              <input name="email" type="email" placeholder="E-mail*" value={formData.email} onChange={handleChange} className={fieldErrors.email ? 'error' : ''} />
              {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}
            </div>

            <div>
              <input name="phone" type="tel" placeholder="Téléphone (facultatif)" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <input name="mobile" type="tel" placeholder="Mobile*" value={formData.mobile} onChange={handleChange} className={fieldErrors.mobile ? 'error' : ''} />
              {fieldErrors.mobile && <span className="error">{fieldErrors.mobile}</span>}
            </div>

            <div>
              <input name="orias" type="text" placeholder="N° ORIAS*" value={formData.orias} onChange={handleChange} className={fieldErrors.orias ? 'error' : ''} />
              {fieldErrors.orias && <span className="error">{fieldErrors.orias}</span>}
            </div>

            <div>
              <input name="siret" type="text" placeholder="N° SIRET*" value={formData.siret} onChange={handleChange} className={fieldErrors.siret ? 'error' : ''} />
              {fieldErrors.siret && <span className="error">{fieldErrors.siret}</span>}
            </div>

            <div className='divSelect'>
              <select name="formejuridique" value={formData.formejuridique} onChange={handleChange} className={fieldErrors.formejuridique ? 'error' : ''}>
                <option value="">Forme juridique*</option>

                {/* Personnes physiques */}
                <option value="ei">Entreprise Individuelle (EI)</option>
                <option value="auto">Auto-entrepreneur / Micro-entreprise</option>

                {/* Sociétés commerciales */}
                <option value="eurl">EURL (Entreprise Unipersonnelle à Responsabilité Limitée)</option>
                <option value="sarl">SARL (Société à Responsabilité Limitée)</option>
                <option value="sasu">SASU (Société par Actions Simplifiée Unipersonnelle)</option>
                <option value="sas">SAS (Société par Actions Simplifiée)</option>
                <option value="sa">SA (Société Anonyme)</option>
                <option value="snc">SNC (Société en Nom Collectif)</option>
                <option value="sca">SCA (Société en Commandite par Actions)</option>
                <option value="sces">Société Coopérative d’Intérêt Collectif (SCIC)</option>
                <option value="scop">SCOP (Société Coopérative et Participative)</option>

                {/* Sociétés civiles */}
                <option value="sci">SCI (Société Civile Immobilière)</option>
                <option value="scp">SCP (Société Civile Professionnelle)</option>
                <option value="scm">SCM (Société Civile de Moyens)</option>

                {/* Autres */}
                <option value="association">Association loi 1901</option>
                <option value="autre">Autre</option>
              </select>
              {fieldErrors.formejuridique && <span className="error">{fieldErrors.formejuridique}</span>}
            </div>
          </div>

          <button type="submit" className="submit-button">
            Devenir partenaire →
          </button>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
