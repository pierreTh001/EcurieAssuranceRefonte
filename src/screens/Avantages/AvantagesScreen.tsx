import React from "react";
import AvantagesSection from "./sections/AvantagesSection/AvantagesSection";
import DevenirApporteur from "./sections/DevenirApporteur/DevenirApporteur";
import PressSection from "../HomepageEcurie/sections/PressSection/PressSection";

const AvantagesScreen = () => {
  return (
    <main className="mainPage">
      <DevenirApporteur />
      <AvantagesSection />
      <PressSection />
    </main>
  );
};

export default AvantagesScreen;
