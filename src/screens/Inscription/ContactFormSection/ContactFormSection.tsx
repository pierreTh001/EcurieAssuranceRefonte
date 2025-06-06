import React, { useState } from 'react';
import './ContactFormSection.scss';
import { saveRegistration } from '../../../services/contactService';
import photo from "../../../../public/img/signup-form.jpg";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
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
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const urlEncodedData = new URLSearchParams(formData);
      await saveRegistration(urlEncodedData);
      setSuccess("Demande envoyée avec succès !");
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
            <input name="lastName" type="text" placeholder="Nom*" value={formData.lastName} onChange={handleChange} required />
            <input name="firstName" type="text" placeholder="Prénom*" value={formData.firstName} onChange={handleChange} required />
            <input name="address" type="text" placeholder="Adresse*" value={formData.address} onChange={handleChange} required />
            <input name="zip" type="text" placeholder="Code postal*" value={formData.zip} onChange={handleChange} required />
            <input name="city" type="text" placeholder="Ville*" value={formData.city} onChange={handleChange} required />
            <input name="company" type="text" placeholder="Raison Sociale*" value={formData.company} onChange={handleChange} required />
            <input name="email" type="email" placeholder="E-mail*" value={formData.email} onChange={handleChange} required />
            <input name="phone" type="tel" placeholder="Téléphone*" value={formData.phone} onChange={handleChange} required />
            <input name="mobile" type="tel" placeholder="Mobile" value={formData.mobile} onChange={handleChange} />
            <input name="orias" type="text" placeholder="N° ORIAS*" value={formData.orias} onChange={handleChange} required />
            <input name="siret" type="text" placeholder="N° SIRET*" value={formData.siret} onChange={handleChange} required />
            <select name="formejuridique" value={formData.formejuridique} onChange={handleChange} required>
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

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
