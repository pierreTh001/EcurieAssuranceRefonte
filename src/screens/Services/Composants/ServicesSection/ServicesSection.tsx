import React, { useState } from 'react';
import './ServicesSection.scss';
import { services } from './../../servicesData';

const categories = [
  'Tous les services',
  'Les plus consultés',
  'Gros œuvre',
  'Second œuvre',
  'Spécialisé',
];

// const services = [
//   {
//     id: 1,
//     title: 'Assurance Décennale Gros Oeuvre',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Maçonnerie', 'Charpente', 'Couverture', 'Fondations', 'Lorem'],
//     icon: 'shield',
//   },
//   {
//     id: 2,
//     title: 'Assurance Décennale Second Œuvre',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Plomberie', 'Électricité', 'Menuiserie'],
//     icon: 'shield',
//   },
//   {
//     id: 3,
//     title: 'Dommages Ouvrage',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Préfinancement', 'Expertise rapide', 'Réparations garanties'],
//     icon: 'group',
//   },
//   {
//     id: 4,
//     title: 'Maison Ossature Bois',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Construction bois', 'Isolation', 'Bardage'],
//     icon: 'home',
//   },
//   {
//     id: 5,
//     title: 'Étancheur Pisciniste',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Étanchéité toiture', 'Piscines', 'Terrasses'],
//     icon: 'water_pump',
//   },
//   {
//     id: 6,
//     title: 'Profils Difficiles',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     tags: ['Jamais assuré', 'Sinistres passés', 'Activités à risque'],
//     icon: 'group',
//   },
// ];

const ServicesSection = ({ onSelectService }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous les services');

  const normalize = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const filteredServices = services.filter((service) => {
  const searchTerm = normalize(search);
  const globalText = normalize(
    `${service.title} ${service.description} ${service.tags.join(' ')} ${service.coverages.join(' ')} ${service.advantages.join(' ')}`
  );

  const matchSearch = globalText.includes(searchTerm);
  const matchCategory =
    activeCategory === 'Tous les services' ||
    service.categories?.includes(activeCategory);

  return matchSearch && matchCategory;
});

  return (
    <section className="services-section">
      <div className="services-section__search">
    <input
          type="text"
          placeholder="Rechercher un service, une activité, une profession..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="services-section__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <h2>Consultez nos produits et services</h2>

      <div className="services-section__cards">
        
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon iconCardService">
                <span class="material-symbols-outlined">
                  {service.icon}
                </span>  
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <button onClick={() => onSelectService(service.id)}>Voir ce service →</button>
            </div>
          ))
        ) : (
          <div className="services-section__empty">
            Aucun service ne correspond à votre recherche.
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
