import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import ButtonComponent from "../../../../components/Shared/Button/ButtonComponent";

export const ImageFrameSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#243d38] relative">
      <div className="container mx-auto max-w-5xl relative">
        {/* Background image with opacity */}
        <div className="absolute inset-0 opacity-[0.07] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Background texture"
            src="https://c.animaapp.com/mbaid26t16qu9T/img/image-3.png"
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center gap-14 relative z-10 py-5">
          <h2 className="font-['Playfair_Display',Helvetica] font-bold text-white text-5xl text-center leading-normal">
            Prêt à sécuriser votre
            <br />
            activité professionnelle ?
          </h2>
          <ButtonComponent texte="Contactez-nous" lien="/contact" variant="filled" />
        </div>
      </div>
    </section>
  );
};
