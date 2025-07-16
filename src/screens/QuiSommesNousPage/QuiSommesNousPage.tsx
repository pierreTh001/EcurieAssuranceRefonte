import React from "react";
import "./QuiSommesNousPage.scss";
import AproposSection from "./composants/AproposSection/AproposSection";
import ExpertiseSection from "./composants/ExpertiseSection/ExpertiseSection";
import BrandSection from "./composants/BrandSection/BrandSection";

const QuiSommesNousPage: React.FC = () => {
  return (
    <main className="qui-sommes-nous mainPage">
      <AproposSection />
      <ExpertiseSection />
      <BrandSection />
    </main>
  );
};

export default QuiSommesNousPage;
