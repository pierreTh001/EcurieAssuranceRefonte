// src/services/contactService.js
import axios from 'axios';

export const saveRegistration = async (data) => {
  return await axios.post('https://ecurie-assurance.fr/devenir-partenaire/envoi', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
