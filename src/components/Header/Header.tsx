import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import ButtonComponent from "../Shared/Button/ButtonComponent";
import { navLinks } from "../../constants/navigation";
import { NavLinks } from "./components/NavLinks";
import logo from "../../../public/img/logo_transparent.png";

import './Header.scss';


export const Header = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileOpen(false); // close menu on page change
  }, [location.pathname]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 px-6 md:px-20 py-4 flex items-center justify-between headerNav ${
        isHome && !isScrolled
          ? "bg-transparent absolute"
          : "bg-[#233D38] fixed variantHeader"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Écurie Assurance" className="h-10 md:h-12" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        <NavLinks items={navLinks} className="" />
        <ButtonComponent texte="Inscription" lien="/signup" variant="outlined" />
        <ButtonComponent texte="Espace pro" lien="https://clientspace.ecurie-assurance.fr/connexion-espace-partenaire" variant="filled" />
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden z-50" onClick={() => setMobileOpen(!mobileOpen)}>
        <Menu className="text-white" size={28} />
      </button>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] p-6 transition-transform duration-300 md:hidden flex flex-col gap-6 pt-20 mobileMenu ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLinks items={navLinks} onNavigate={() => setMobileOpen(false)} className="text-white text-lg" />
        <ButtonComponent texte="Inscription" lien="/signup" variant="outlined" />
        <ButtonComponent texte="Espace pro" lien="https://clientspace.ecurie-assurance.fr/connexion-espace-partenaire" variant="filled" />
      </div>
    </header>
  );
};
