import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

// Define testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Peter",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13.png",
    profession: "",
  },
  {
    id: 2,
    name: "Victor",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-1.png",
    profession: "",
  },
  {
    id: 3,
    name: "Lucilia L.",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-2.png",
    profession: "",
  },
  {
    id: 4,
    name: "Sabrina F.",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-3.png",
    profession: "Architecte DPLG,\nStudio d'architecture",
  },
  {
    id: 5,
    name: "Marvin",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-4.png",
    profession: "",
  },
  {
    id: 6,
    name: "Darell",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-5.png",
    profession: "",
  },
  {
    id: 7,
    name: "Jin Wei",
    image: "https://c.animaapp.com/mbaid26t16qu9T/img/rectangle-13-6.png",
    profession: "",
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col items-center gap-[45px] p-0">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div className="font-app-secondary font-[number:var(--app-secondary-font-weight)] text-[#243d38] text-[length:var(--app-secondary-font-size)] tracking-[var(--app-secondary-letter-spacing)] leading-[var(--app-secondary-line-height)] whitespace-nowrap [font-style:var(--app-secondary-font-style)]">
              Témoignages
            </div>

            <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-5xl text-center text-[#243d38] tracking-[0] leading-normal">
              Ce que nos clients disent de nous
            </h2>
          </div>

          <p className="w-full max-w-[754px] [font-family:'Inter',Helvetica] font-medium text-[#0e3d4db2] text-xl text-center tracking-[0] leading-[22.9px]">
            &#34;En tant qu&#39;architecte, j&#39;avais besoin d&#39;une
            couverture complète pour ma responsabilité décennale. Leur expertise
            m&#39;a permis d&#39;obtenir un contrat sur-mesure.&#34;
          </p>

          <div className="flex items-start justify-center gap-[11px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                className="w-[31px] h-[31px]"
                alt="Star"
                src="https://c.animaapp.com/mbaid26t16qu9T/img/star.svg"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="relative w-full mt-12 overflow-hidden">
        <div className="relative">
          <div className="flex items-start gap-[62px] justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center gap-5"
              >
                <Avatar className="w-20 h-20 rounded-none">
                  <AvatarImage
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="object-cover"
                  />
                </Avatar>

                <div className="flex flex-col items-center justify-center gap-2.5">
                  <div className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#243d38] text-xl text-center tracking-[0] leading-normal">
                    {testimonial.name}
                  </div>

                  {testimonial.profession && (
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#0e3d4dcc] text-lg text-center tracking-[0] leading-normal whitespace-pre-line">
                      {testimonial.profession}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for carousel effect */}
          <div className="absolute w-[575px] h-[233px] top-0 left-0 rotate-180 [background:linear-gradient(270deg,rgba(255,255,255,1)_35%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute w-[589px] h-full top-0 right-0 [background:linear-gradient(270deg,rgba(255,255,255,1)_35%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>
    </section>
  );
};
