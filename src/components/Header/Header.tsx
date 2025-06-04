import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Menu } from "lucide-react";
import "./Header.scss";
import ButtonComponent from './../Shared/Button/ButtonComponent';
import logo from '../../../public/img/logo_transparent.png';


export const Header = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileOpen(false); // close menu on page change
  }, [location.pathname]);

  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 px-6 md:px-20 py-4 flex items-center justify-between headerNav ${
        isHome ? "bg-transparent absolute" : "bg-[#2ef3c5] fixed"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Écurie Assurance"
          className="h-10 md:h-12"
        />
      </Link>


      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        <Link to="/" className="nav-link active ">
          Accueil
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/societe" className="nav-link">
          Société
        </Link>
        <Link to="/partenaires" className="nav-link">
          Partenaires
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

          <ButtonComponent texte="Inscription" lien="/signup" variant="outlined" />
          <ButtonComponent texte="Espace pro" lien="/pro" variant="filled" />
       
    
      </nav>

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
        <Link to="/" className="text-white text-lg font-medium">
          Accueil
        </Link>
        <Link to="/services" className="text-white text-lg font-medium">
          Services
        </Link>
        <Link to="/societe" className="text-white text-lg font-medium">
          Société
        </Link>
        <Link to="/partenaires" className="text-white text-lg font-medium">
          Partenaires
        </Link>
        <Link to="/contact" className="text-white text-lg font-medium">
          Contact
        </Link>
  
          <ButtonComponent texte="Inscription" lien="/signup" variant="outlined" />
          <ButtonComponent texte="Espace pro" lien="/pro" variant="filled" />
      </div>
    </header>
  );
};
