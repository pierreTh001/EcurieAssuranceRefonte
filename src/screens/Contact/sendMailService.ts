import axios from 'axios';

export const sendContactMessage = async (data: {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}) => {
  return await axios.post('https://api.ecurie-assurance.fr/contactez-nous/envoi', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
