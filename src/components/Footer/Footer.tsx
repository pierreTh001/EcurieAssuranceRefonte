import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks } from "../../constants/navigation";

// Social media links data
const socialLinks = [
  { icon: InstagramIcon, alt: "Instagram", href: "#" },
  { icon: LinkedinIcon, alt: "Linkedin", href: "#" },
  { icon: FacebookIcon, alt: "Facebook", href: "#" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col items-start">
            <img
              className="w-[168px] h-[52px] object-cover"
              alt="Ecurie Assurance Logo"
              src="https://c.animaapp.com/mbaid26t16qu9T/img/image-3.png"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <nav className="flex flex-wrap gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-medium text-[#243d38] text-base"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <Button
              variant="outline"
              className="rounded-full border-2 border-[#243d38] text-[#243d38] px-9 py-3.5 font-medium"
            >
              Inscription
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#06222b42]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-black text-base">
              copyright@ Ecurie Assurance&nbsp;&nbsp;2025
            </p>

            <div className="flex items-center gap-7 mt-4 md:mt-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} aria-label={social.alt}>
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
