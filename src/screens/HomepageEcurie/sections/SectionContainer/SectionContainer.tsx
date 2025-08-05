import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

import './SectionContainer.css';
import './../../../../styles/mobiles.scss'
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

import jamais from '../../../../../public/img/categpop/jamais.jpg'
import judiciaire from '../../../../../public/img/categpop/judiciaire.jpg'
import oeuvre from '../../../../../public/img/categpop/oeuvre.jpg'
import refus from '../../../../../public/img/categpop/refus.jpg'
import resilie from '../../../../../public/img/categpop/resilie.jpg'

// Define the category data for mapping
const categories = [
  {
    id: 1,
    title: "Gros / Second oeuvre",
    description: "Professionnels du bâtiment",
    imageUrl: oeuvre,
    isWide: false,
    hasTwoLines: true,
    isSmallClass: true,
    descriptionDetail: "Le gros œuvre désigne les parties d'une construction qui en constituent l'ossature. Elles comprennent à la fois : Les éléments porteurs qui contribuent à la stabilité ou à la solidité du bâtiment et tous les autres éléments qui leur sont intégrés ou forment corps avec eux...",
    link: 'services/gros-oeuvre'
  },
  {
    id: 2,
    title: "Jamais assuré",
    description: "Professionnels du bâtiment",
    imageUrl: jamais,
    isWide: true,
    hasTwoLines: false,
    isSmallClass: false,
    descriptionDetail: "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
    link: 'services/jamais-assure'
  },
  {
    id: 3,
    title: "Refus de compagnie",
    description: "Professionnels du bâtiment",
    imageUrl: refus,
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false,
    descriptionDetail: "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
    link: 'services/refus-compagnie'
  },
  {
    id: 4,
    title: "Redressement judiciaire",
    description: "Professionnels du bâtiment",
    imageUrl: judiciaire,
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false,
    descriptionDetail: "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
    link: 'services/edressement-judiciaire'
  },
  {
    id: 5,
    title: "Résilié non-paiement",
    description: "Professionnels du bâtiment",
    imageUrl: resilie,
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false,
    descriptionDetail: "Le redressement judiciaire est une alternative proposée par la loi lorsqu'une entreprise, quelle que soit la nature de ses activités, est en cessation de paiement. Il est mis en place pour maintenir l'activité de l'entreprise.",
    link: 'services/resilie-non-paiement'
  },
];

export const SectionContainer = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="relative w-full">
        {/* Background gray area */}
        <div className="absolute w-full bottom-0 bg-[#f3f3f3] grayBackground h-[600px] md:h-[797px]" />

        {/* Section header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="font-app-secondary font-[number:var(--app-secondary-font-weight)] text-[length:var(--app-secondary-font-size)] text-[#243d38] tracking-[var(--app-secondary-letter-spacing)] leading-[var(--app-secondary-line-height)] [font-style:var(--app-secondary-font-style)]">
            Nos solutions
          </div>
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-5xl text-center text-[#243d38] tracking-[0] leading-[normal]">
            Nos catégories les plus populaires
          </h2>
        </div>

        {/* Cards container */}
        <div className="container max-w-[1242px] mx-auto containerImg">
          <div className="grid gap-[45px_36px] md:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`relative overflow-hidden rounded-none border-none shadow-none
                  w-full
                  ${category.isWide ? "md:col-span-2" : ""}
                  h-[404px]`}
                style={{
                  backgroundImage: `url(${category.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  borderRadius: "20px"
                }}
              >
                <CardContent className="p-0 h-full relative group">
                  <div
                    className={`inline-flex flex-col items-start justify-center gap-[5px] absolute item
                      bottom-20 left-4
                      ${category.isWide
                        ? "md:bottom-[95px] md:left-[47px]"
                        : "md:bottom-[134px] md:left-[35px]"}
                    `}
                  >
                    <div className="relative w-fit [font-family:'Playfair_Display',Helvetica] font-medium text-white text-[37px] tracking-[0] leading-[normal]">
                      {category.title}
                    </div>
                    <div className="inline-flex items-start gap-[7px]">
                      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
                        {category.description}
                      </div>
                    </div>
                  </div>

                   {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[rgba(36,61,56,0.8)] text-white p-6 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-30 flex flex-col justify-center items-center text-center overCard">
                      <h3 className="font-playfair font-medium text-white text-2xl md:text-[33px] whitespace-pre-line mb-4">
                        {category.title}
                      </h3>
                      <p className="font-inter text-sm leading-snug max-w-[90%]">
                        {category.descriptionDetail}
                      </p>
                      <ButtonComponent texte="Voir ce produit" lien={category.link} variant="filled" />
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}

        </div>
          <div className="flex justify-center mt-12 buttonOffre">
            <div className="button">
              <ButtonComponent texte="Voir toutes nos offres" lien="/services" variant="filled" />
            </div>
          </div>
      </div>
    </section>
  );
};
