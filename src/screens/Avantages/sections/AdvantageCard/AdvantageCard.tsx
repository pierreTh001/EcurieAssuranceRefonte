import React from "react";
import "./AvantageCard.scss";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, dark }) => {
  return (
    <div className={`advantage-card ${dark ? "dark" : ""}`}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AdvantageCard;
