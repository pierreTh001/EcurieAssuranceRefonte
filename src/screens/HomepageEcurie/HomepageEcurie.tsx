import { FeaturesSection } from "./sections/FeaturesSection";
import { ImageFrameSection } from "./sections/ImageFrameSection";
import { ImageSliderSection } from "./sections/ImageSliderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { MainSection } from "./sections/MainSection";
import { SectionContainer } from "./sections/SectionContainer";
import { ServicesGroupSection } from "./sections/ServicesGroupSection";


import './HomepageEcurie.css';
import './../../styles/mobiles.scss'
import BctSolutionBanner from "./sections/BctSolutionBanner/BctSolutionBanner";
import PressSection from "./sections/PressSection/PressSection";
import SuccessRaceComponent from "./sections/SuccessRaceComponent/SuccessRaceComponent";

export const HomepageEcurie = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", active: false },
    { label: "Services", active: false },
    { label: "Société", active: false },
    { label: "Partenaires", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <div className="relative w-full mainBlock">
          <ImageSliderSection />
          <ServicesGroupSection />
          <FeaturesSection />
        </div>
        
          <MainContentSection />
          <MainSection />
          <BctSolutionBanner />
          <SectionContainer />
          <SuccessRaceComponent />
          <PressSection />
          <ImageFrameSection />
      </div>
    </div>
  );
};
