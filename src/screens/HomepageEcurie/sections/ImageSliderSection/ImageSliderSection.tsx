import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import './../../../../styles/mobiles.scss';
import './ImageSliderSection.scss';

import slider1 from '../../../../../public/img/slider/1.jpg';
import slider2 from '../../../../../public/img/slider/2.jpg';
import slider3 from '../../../../../public/img/slider/3.jpg';
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

const slides = [
  {
    id: 1,
    background: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-2.png",
    overlay: slider1,
    title: "Vous êtes agent général",
    subtitle:
      "Vous recherchez un Fournisseur d’assurance responsabilité civile décennale pour répondre aux besoins d’un client ?",
  },
  {
    id: 2,
    background: "https://picsum.photos/id/1015/1600/900",
    overlay: slider2,
    title: "Votre avenir en sécurité",
    subtitle: "Des solutions d’assurance fiables et adaptées à vos besoins.",
  },
  {
    id: 3,
    background: "https://picsum.photos/id/1021/1600/900",
    overlay: slider3,
    title: "Rejoignez notre réseau",
    subtitle:
      "Devenez partenaire et bénéficiez de notre expertise reconnue dans l’assurance pro.",
  },
];

const bottomBlocks = [
  {
    title: "01",
    subtitle: "Identifier les clients non assurables",
    text: "Nous intervenons dès qu'un client est résilié ou en voie de résiliation, sans soulition d'assurance possible via un parcours 100% digitalisé.",
  },
  {
    title: "02",
    subtitle: "Prise en charge et solution adaptée",
    text: "Nous trouvons une solution pour votre clientvia nos meilleurs partenaires. En l'absence d'alternative immédiate, nous accompagnons votre dossier jusqu'au Bureau Contral de Tarification (BCT)",
  },
  {
    title: "03",
    subtitle: "Fidélisation et réintégration",
    text: "A l'issue de 12 à 36 mois, le client revient dans votre portefeuille dès l'accord de votre compagnie.",
  },
];

export const ImageSliderSection = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[900px] overflow-hidden">
      {/* Image dynamique */}
      <div
        key={slide.id}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url('${slide.background}')` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${slide.overlay}')`,
          boxShadow: '400px 400px 400px rgba(3, 3, 74, 0.3) inset'
 }}
      />

      {/* Texte principal */}
      <div className="absolute top-20 md:top-[180px] left-8 md:left-[132px] z-10 w-[90%] md:w-[700px] text-white SliderInfo">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[64px] font-['Playfair_Display']">
          {slide.title}
        </h1>
        <p className="mt-8 text-lg font-medium font-['Inter'] leading-7">
          {slide.subtitle}
        </p>
        <div className="mt-12">
          <ButtonComponent texte="Je m'inscris" lien="/signup" variant="filled" />
        </div>

      </div>

      {/* Navigation */}
      <div className="absolute bottom-20 md:bottom-[120px] right-8 md:right-[132px] z-10 flex items-center gap-4 buttonSection">
        <button
          onClick={prevSlide}
          className="w-[82px] h-[45px] bg-white rounded-full flex items-center justify-center align-center"
        >
            <span className="material-symbols-outlined">
            arrow_back
            </span>
        </button>

        <span className="text-lg font-medium text-white">
          {current + 1}/{slides.length}
        </span>

        <button
          onClick={nextSlide}
          className="w-[82px] h-[45px] bg-white rounded-full flex items-center justify-center align-center"
        >
            <span className="material-symbols-outlined">
            arrow_forward
            </span>
        </button>
      </div>

      {/* Séparateur + blocs fixes */}
      <div className="absolute bottom-4 md:bottom-[100px] left-4 right-4 md:left-[132px] md:right-[132px] z-10">
        <div className="h-px bg-white/30 w-full mb-8 cacheMobile" />

        <div className="flex justify-between text-white gap-4 cacheMobile">
          {bottomBlocks.map((block, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold italic">{block.title}</h3>
              <h4 className="text-xl font-bold mt-2 ">{block.subtitle}</h4>
              <p className="text-lg mt-2">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
