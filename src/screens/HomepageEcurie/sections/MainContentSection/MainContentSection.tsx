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

export const MainContentSection = (): JSX.Element => {
  const productOfferings = [
    {
      id: 1,
      title: "Gros / second\noeuvre",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8.png",
    },
    {
      id: 2,
      title: "Dommages\nouvrage",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-1.png",
    },
    {
      id: 3,
      title: "Ossature\nbois",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-2.png",
    },
    {
      id: 4,
      title: "Etancheur\nPisciniste",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-3.png",
    },
    {
      id: 5,
      title: "Photovoltaïque",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-4.png",
    },
    {
      id: 6,
      title: "Entreprises\nÉtrangères",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-5.png",
    },
    {
      id: 7,
      title: "Redressement\nJudiciaire",
      description: "Maçons et professionnels du bâtiment",
      image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-8-6.png",
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

      <Carousel className="w-full">
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
                <CardContent className="p-0 h-full relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${offering.image})` }}
                  />
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-[#112f38]" />
                  <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 px-4">
                    <h3 className="font-playfair font-medium text-white text-2xl md:text-[37px] text-center whitespace-pre-line">
                      {offering.title}
                    </h3>
                    <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
                      {offering.description}
                    </p>
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
