import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import './../../../../styles/mobiles.scss';
import './ImageSliderSection.scss';

const slides = [
  {
    id: 1,
    background: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-2.png",
    overlay: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-3.svg",
    title: "Vous êtes agent général",
    subtitle:
      "Vous recherchez un Fournisseur d’assurance responsabilité civile décennale pour répondre aux besoins d’un client ?",
  },
  {
    id: 2,
    background: "https://picsum.photos/id/1015/1600/900",
    overlay: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-3.svg",
    title: "Votre avenir en sécurité",
    subtitle: "Des solutions d’assurance fiables et adaptées à vos besoins.",
  },
  {
    id: 3,
    background: "https://picsum.photos/id/1021/1600/900",
    overlay: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-3.svg",
    title: "Rejoignez notre réseau",
    subtitle:
      "Devenez partenaire et bénéficiez de notre expertise reconnue dans l’assurance pro.",
  },
];

const bottomBlocks = [
  {
    title: "01",
    subtitle: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Eu tincidunt vulputate nibh eleifend leo.",
  },
  {
    title: "02",
    subtitle: "Dolor Sit Amet",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu volutpat risus proin justo sit.",
  },
  {
    title: "03",
    subtitle: "Consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Mi massa nibh ante facilisis varius duis.",
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
        style={{ backgroundImage: `url('${slide.overlay}')` }}
      />

      {/* Texte principal */}
      <div className="absolute top-20 md:top-[180px] left-8 md:left-[132px] z-10 w-[90%] md:w-[700px] text-white SliderInfo">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[64px] font-['Playfair_Display']">
          {slide.title}
        </h1>
        <p className="mt-8 text-lg font-medium font-['Inter'] leading-7">
          {slide.subtitle}
        </p>

        <Button className="mt-12 bg-[#2ef3c5] text-[#141841] font-medium text-base rounded-[38px] px-[38px] py-3.5 border-2 border-solid hover:bg-[#2ef3c5]/90 flex items-center gap-2 btnGreen">
          Inscription
          <img
            src="https://c.animaapp.com/mbaid26t16qu9T/img/arrow-right-02-round-4.svg"
            alt="arrow"
            className="w-[17px] h-[17px]"
          />
        </Button>
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
            <div key={index} className="max-w-[300px]">
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
