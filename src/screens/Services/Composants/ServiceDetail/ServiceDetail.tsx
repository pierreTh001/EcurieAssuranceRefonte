import React from 'react';
import { Service } from './servicesData';
import './ServiceDetail.scss';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  return (
    <section className="service-detail">
      <button className="back" onClick={onBack}>
        ← Retour aux services
      </button>

      <div className="service-detail__content">
        <div className="left">
          <div className="icon">
              <span class="material-symbols-outlined">
                {service.icon}
              </span>  
          </div>
          <h1>{service.title}</h1>
          <p>{service.description}</p>

          <div className="pricing">
            <div className="price">
              <strong>Prix à partir de</strong> <br /> {service.price}
            </div>
            <div className="cover">
              <strong>Couverture</strong> <br /> {service.coverageAmount}
            </div>
          </div>

          <div className="buttons">
            <button className="btn-solid">Devis en ligne →</button>
            <button className="btn-outline">📞 01 85 09 26 52</button>
          </div>
        </div>

        <div className="right">
          <h3>Couvertures incluses</h3>
          <ul className="checklist">
            {service.coverages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Avantages</h4>
          <ul className="advantages">
            {service.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
