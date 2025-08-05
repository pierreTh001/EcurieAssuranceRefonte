import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

import './MainContentSection.css';

import gros from '../../../../../public/img/offresspe/gros.jpg'
import bois from '../../../../../public/img/offresspe/bois.jpg'
import etrange from '../../../../../public/img/offresspe/etrange.jpg'
import intel from '../../../../../public/img/offresspe/intel.jpg'
import jamais from '../../../../../public/img/offresspe/jamais.jpg'
import judiciaire from '../../../../../public/img/offresspe/judiciaire.jpg'
import nonpaie from '../../../../../public/img/offresspe/nonpaie.jpg'
import ouvrage from '../../../../../public/img/offresspe/ouvrage.jpg'
import photo from '../../../../../public/img/offresspe/photo.jpg'
import piscine from '../../../../../public/img/offresspe/piscine.jpg'
import refus from '../../../../../public/img/offresspe/refus.jpg'
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

export const MainContentSection = (): JSX.Element => {
  const productOfferings = [
    {
      id: 1,
      title: "Gros / second\noeuvre",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le gros œuvre désigne les parties d'une construction qui en constituent l'ossature. Elles comprennent à la fois : Les éléments porteurs qui contribuent à la stabilité ou à la solidité du bâtiment et tous les autres éléments qui leur sont intégrés ou forment corps avec eux...",
      image: gros,
      link: 'services/gros-oeuvre'
    },
    {
      id: 2,
      title: "Dommages\nouvrage",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "L'Assurance Dommages Ouvrage prend en charge tous les travaux de réparation des dommages affectant la solidité d'un ouvrage ou le rendant impropre à sa destination.",
      image: ouvrage,
      link: 'services/dommage-ouvrage'
    },
    {
      id: 3,
      title: "Ossature\nbois",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "L'ossature bois est une méthode de construction de plus en plus courante et prisée de nos jours. Avant de s'engager dans un projet de construction en bois, il est essentiel de contracter les bonnes assurances.",
      image: bois,
      link: 'services/ossature-bois'
    },
    {
      id: 4,
      title: "Etancheur\nPisciniste",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "L'étancheur est celui qui prévoit l'étanchéité d'un ouvrage, les techniques et les matériaux à employer * pour prévenir toute infiltration d'eau, d'humidité ou tout autre élément extérieur dans une construction.",
      image: piscine,
      link: 'services/etancheur-pisciniste'
    },
    {
      id: 5,
      title: "Photovoltaïque",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Que vous exerciez comme développeurs de projets photovoltaïques, bureaux d’études spécialisés, ou encore installateurs, mainteneurs / fabricants d’éléments de centrales, de panneaux photovoltaïques, de structures d’intégration en toiture ou au sol, d’onduleurs, de connectique ou autres compteurs...",
      image: photo,
      link: 'services/photovoltaique'
    },
    {
      id: 6,
      title: "Entreprises\nÉtrangères",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "L'assurance décennale est obligatoire pour toute entreprise, étrangère ou non, dès lors que celle-ci opère en France. Toutes les entreprises étrangères sont dans l'obligation de se soumettre à la Loi relative à l'assurance décennale et de souscrire à une assurance décennale...",
      image: etrange,
      link: 'services/entreprises-etrangeres'
    },
    {
      id: 7,
      title: "Redressement\nJudiciaire",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
      image: judiciaire,
      link: 'services/edressement-judiciaire'
    },
    {
      id: 8,
      title: "Jamais\nassuré",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
      image: jamais,
      link: 'services/jamais-assure'
    },
    {
      id: 9,
      title: "Résilié\nNon-paiement",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
      image: nonpaie,
      link: 'services/resilie-non-paiement'
    },
    {
      id: 10,
      title: "Professions\nIntellectuelles",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
      image: intel,
      link: 'services/professions-intellectuelles'
    },
    {
      id: 11,
      title: "Refus\ncompagnie",
      description: "Professionnels du bâtiment",
       descriptionDetail:
      "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
      image: refus,
      link: 'services/refus-compagnie'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 md:px-20">
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col gap-2.5">
          <p className="font-app-secondary text-[#243d38] text-base tracking-wide leading-tight">
            Nos gammes de produit
          </p>
          <h2 className="font-playfair font-bold text-[#243d38] text-5xl">
            Offres Spécialisés
          </h2>
        </div>
      </div>

      <Carousel className="w-full" opts={{
    align: "start",
    slidesToScroll: 1
  }}>
        <div className="flex items-center gap-[17px] mt-6 buttonSliderOffre">
          <CarouselPrevious className="relative w-[82px] h-[45px] bg-[#ffffff8a] rounded-[33px] border-2 border-solid border-[#243d38] flex items-center justify-center sliderArrowLeft">
            <img
              className="w-[34px] h-[34px]"
              alt="Arrow left"
              src="https://c.animaapp.com/mbaid26t16qu9T/img/arrow-right-02-round.svg"
            />
          </CarouselPrevious>

          <CarouselNext className="relative w-[82px] h-[45px] bg-[#243d38] rounded-[33px] flex items-center justify-center">
            <img
              className="w-[34px] h-[34px]"
              alt="Arrow right"
              src="https://c.animaapp.com/mbaid26t16qu9T/img/arrow-right-02-round-1.svg"
            />
          </CarouselNext>
        </div>
        <CarouselContent className="-ml-4">
          {productOfferings.map((offering) => (
            <CarouselItem
              key={offering.id}
              className="pl-4 basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)]"
            >
              <Card
                className="w-full h-[380px] md:h-[452px] rounded-[20px] overflow-hidden border-none"
              >
                <CardContent className="p-0 h-full relative group">
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${offering.image})` }}
                  />
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-[#112f38] z-10" />

                  <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 px-4 z-20 transition-all duration-300 group-hover:opacity-0">
                    <h3 className="font-playfair font-medium text-white text-2xl md:text-[33px] text-center whitespace-pre-line">
                      {offering.title}
                    </h3>
                    <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
                      {offering.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(36,61,56,0.8)] text-white p-6 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-30 flex flex-col justify-center items-center text-center overCard">
                    <h3 className="font-playfair font-medium text-white text-2xl md:text-[33px] whitespace-pre-line mb-4">
                      {offering.title}
                    </h3>
                    <p className="font-inter text-sm leading-snug max-w-[90%]">
                      {offering.descriptionDetail}
                    </p>
                    <ButtonComponent texte="Voir ce produit" lien={offering.link} variant="filled" />
                  </div>

                </CardContent>
                              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>


      </Carousel>
    </section>
  );
};
