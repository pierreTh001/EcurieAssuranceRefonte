import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InsuranceBanner from './Composants/InsuranceBanner.tsx/InsuranceBanner';
import ServicesSection from './Composants/ServicesSection/ServicesSection';
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner';
import ServiceDetail from './Composants/ServiceDetail/ServiceDetail';
import { services } from './servicesData';

import './ServicesPage.scss';

const ServicesPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const selectedService = services.find((s) => s.id === id) || null;

  const handleSelectService = (id: string) => {
    navigate(`/services/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className='mainPage'>
      {selectedService ? (
        <ServiceDetail service={selectedService} onBack={() => navigate('/services')} />
      ) : (
        <InsuranceBanner />
      )}
      <ServicesSection onSelectService={handleSelectService} />
      <QuoteBanner />
    </main>
  );
};

export default ServicesPage;
