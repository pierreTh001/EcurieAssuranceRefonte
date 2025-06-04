import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import './FeatureSection.css';

export const FeaturesSection = (): JSX.Element => {
  const features = [
    {
      icon: "https://c.animaapp.com/mbaid26t16qu9T/img/shieldcheck.svg",
      title: "Superviser votre activité",
      description:
        "Mise en place d'outils numériques professionnels pour vous permettre de gérer votre activité",
    },
    {
      icon: "https://c.animaapp.com/mbaid26t16qu9T/img/interface---chart-pie.svg",
      title: "Commissionnement",
      description:
        "Une commission intéressante pour toute affaire souscrite apportée par vous.",
    },
    {
      icon: "https://c.animaapp.com/mbaid26t16qu9T/img/faders.svg",
      title: "Tarification rapide",
      description:
        "Une proposition de tarif rapide (en 2 jours ouvrés) vous apportant de la réactivité par rapport à vos clients.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-8 px-4 presentationBlock">
      {features.map((feature, index) => (
        <Card key={index} className="border-none shadow-none bg-transparent">
          <CardContent className="flex flex-col items-start gap-5 p-0 w-[332px]">
            <img
              className="w-[67px] h-[67px]"
              alt={feature.title}
              src={feature.icon}
            />
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-extrabold text-[#243d38] text-[28px]">
              {feature.title}
            </h3>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#243d38] text-lg">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
