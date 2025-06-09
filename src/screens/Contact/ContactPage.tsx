import React from 'react';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import ContactInfoBanner from '../../components/ContactInfoBanner/ContactInfoBanner';
import DualCTASection from '../../components/DualCTASection/DualCTASection';
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner';
import SimpleContactFormSection from './SimpleContactFormSection/SimpleContactFormSection';

const ContactPage = () => {
  return (
    <main className='mainPage'>
      <ContactBanner
        title={`Nous serions ravis\nde vous entendre`}
        paragraph={`Merci de votre intérêt pour Ecurie Assurance et notre mission de vous accompagner dans la protection de ce qui vous tient à cœur. Nous valorisons vos questions, suggestions et retours. N'hésitez pas à nous contacter. Nos équipes dédiées sont là pour vous assister dans tous vos besoins d'assurance.`}
        showSocialIcons={true}
      />
      <ContactInfoBanner />
      <SimpleContactFormSection />
      <DualCTASection />
      <QuoteBanner />
      {/* Autres blocs d'inscription à venir ici, ex: formulaire d'inscription */}
    </main>
  );
};

export default ContactPage;
