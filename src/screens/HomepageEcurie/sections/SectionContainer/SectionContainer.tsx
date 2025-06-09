import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

import './SectionContainer.css';
import './../../../../styles/mobiles.scss'
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

// Define the category data for mapping
const categories = [
  {
    id: 1,
    title: "Gros / Second oeuvre",
    description: "Maçon et professionnels du bâtiment",
    imageUrl: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-11.png",
    isWide: false,
    hasTwoLines: true,
    isSmallClass: true
  },
  {
    id: 2,
    title: "Gros / Second oeuvre",
    description: "Maçon et professionnels du bâtiment",
    imageUrl: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-11-1.png",
    isWide: true,
    hasTwoLines: false,
    isSmallClass: false
  },
  {
    id: 3,
    title: "Gros / Second oeuvre",
    description: "Maçon et professionnels du bâtiment",
    imageUrl: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-11-2.png",
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false
  },
  {
    id: 4,
    title: "Gros / Second oeuvre",
    description: "Maçon et professionnels du bâtiment",
    imageUrl: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-11-3.png",
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false
  },
  {
    id: 5,
    title: "Gros / Second oeuvre",
    description: "Maçon et professionnels du bâtiment",
    imageUrl: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-11-4.png",
    isWide: false,
    hasTwoLines: true,
    isSmallClass: false
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
                <CardContent className="p-0">
                  <div
                    className={`inline-flex flex-col items-start justify-center gap-[5px] absolute item
                      bottom-20 left-4
                      ${category.isWide
                        ? "md:bottom-[95px] md:left-[47px]"
                        : "md:bottom-[134px] md:left-[35px]"}
                    `}
                  >
                    <div className="relative w-fit [font-family:'Playfair_Display',Helvetica] font-medium text-white text-[37px] tracking-[0] leading-[normal]">
                      {category.hasTwoLines ? (
                        <>
                          Gros / Second <br />
                          oeuvre
                        </>
                      ) : (
                        "Gros / Second oeuvre"
                      )}
                    </div>
                    <div className="inline-flex items-start gap-[7px]">
                      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
                        {category.description}
                      </div>
                    </div>
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
