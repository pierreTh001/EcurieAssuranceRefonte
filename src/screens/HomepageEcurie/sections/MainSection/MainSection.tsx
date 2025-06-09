import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import './MainSection.css';
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

// Define the feature data for mapping
const features = [
  {
    icon: "https://c.animaapp.com/mbaid26t16qu9T/img/file---folder-download.svg",
    title: "Souscription rapide",
    description:
      "Une souscription rapide (moins de 10 jours si tous les documents justificatifs sont fournis)",
    alt: "File folder download",
  },
  {
    icon: "https://c.animaapp.com/mbaid26t16qu9T/img/bed.svg",
    title: "Développer votre activité",
    description:
      "La mise en place d'une relation gagnant-gagant en vous faisant profiter des conseils de nos experts techniques pour booster votre activité.",
    alt: "Bed",
  },
];

export const MainSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto DecouvrezSection">
      <div className="flex flex-col space-y-12">
        {/* Header with CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <p className="font-app-secondary font-[number:var(--app-secondary-font-weight)] text-[#243d38] text-[length:var(--app-secondary-font-size)] tracking-[var(--app-secondary-letter-spacing)] leading-[var(--app-secondary-line-height)] [font-style:var(--app-secondary-font-style)]">
              Découvrez tous nos services
            </p>
            <h2 className="font-['Playfair_Display',Helvetica] font-bold text-[#243d38] text-5xl">
              Vous êtes agent général ?
            </h2>
          </div>
          <ButtonComponent texte="Devis en ligne" lien="/signup" variant="filled" />

          {/* <Button className="bg-[#2ef3c5] text-[#141841] rounded-[38px] border-2 border-solid px-[38px] py-3.5 hover:bg-[#2ef3c5]/90 flex items-center gap-2">
            <span className="font-['Inter',Helvetica] font-medium text-base">
              Devis en ligne
            </span>
            <img
              className="w-[17px] h-[17px]"
              alt="Arrow right round"
              src="https://c.animaapp.com/mbaid26t16qu9T/img/arrow-right-02-round-4.svg"
            />
          </Button> */}
        </div>

        {/* Main content with image and features */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[92px]">
          <div className="w-full lg:w-auto flex-shrink-0">
            <img
              className="w-full lg:w-[515px] h-auto lg:h-[541px] object-cover imageRadius"
              alt="Rectangle"
              src="https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-10.png"
            />
          </div>

          <div className="flex flex-col gap-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex flex-col gap-2">
                  <img
                    className="w-[43px] h-[43px]"
                    alt={feature.alt}
                    src={feature.icon}
                  />
                  <h3 className="font-['Playfair_Display',Helvetica] font-semibold text-[#243d38] text-[40px]">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-medium text-[#243d38] text-[25px] max-w-[478px] txtSecond">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-[9px] py-[13px]">
                    <span className="font-['Inter',Helvetica] font-bold text-[#243d38] text-xl underline cursor-pointer">
                      En savoir +
                    </span>
                    <img
                      className="w-[25px] h-[25px]"
                      alt="Arrow right"
                      src="https://c.animaapp.com/mbaid26t16qu9T/img/arrowright.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
