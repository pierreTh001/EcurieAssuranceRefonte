import React, { useState } from 'react';
import InsuranceBanner from './Composants/InsuranceBanner.tsx/InsuranceBanner';
import ServicesSection from './Composants/ServicesSection/ServicesSection';
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner';

import './ServicesPage.scss';
import ServiceDetail from './Composants/ServiceDetail/ServiceDetail';
import { services } from './servicesData';


const ServicesPage = () => {

  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = services.find((s) => s.id === selectedServiceId) || null;

  return (
    <main className='mainPage'>
      {selectedService ? (
        <ServiceDetail service={selectedService} onBack={() => setSelectedServiceId(null)} />
      ) : (
        <InsuranceBanner />
      )}

      <ServicesSection onSelectService={setSelectedServiceId} />
      <QuoteBanner />
    </main>
  );
};

export default ServicesPage;
