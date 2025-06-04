import React from "react";
import './ServiceGropSection.css';

export const ServicesGroupSection = (): JSX.Element => {
  // Array of services to display
  const services = [
    "Gros oeuvre",
    "Dommages Ouvrage",
    "Photovoltaïque",
    "Construction",
    "Décennale",
  ];

  return (
    <section className="w-full py-8 md:py-16 relative bandeauLien">
      <div className="relative h-[120px] md:h-[167px]">
        {/* Background decorative elements */}
        <div className="absolute w-full h-[50px] md:h-[81px] top-[60px] md:top-[59px] left-0 bg-[#2ef3c5] rotate-[180deg] bandeauBack" />

        <div className="absolute w-full h-[50px] md:h-[81px] top-[24px] md:top-7 left-0 bg-[#233c37] rotate-2">
          {/* Services list */}
          <div className="flex flex-wrap justify-center md:justify-start items-start gap-4 sm:gap-8 md:gap-[65px] relative top-2 md:top-4 md:left-[62px] px-4 md:px-0 bandeauFront">
            {services.map((service, index) => (
              <div
                key={index}
                className="[font-family:'Playfair_Display',Helvetica] font-medium text-white text-base sm:text-2xl md:text-[37px] tracking-[0] leading-normal"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
