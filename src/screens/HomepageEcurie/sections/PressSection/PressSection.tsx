import React from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES } from "../../../../services/Articles";
import "./PressSection.scss";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const PressSection: React.FC = () => {
  const navigate = useNavigate();
  const last3 = [...ARTICLES]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <section className="press">
      <h2 className="press__title">On parle de nous</h2>
      <div className="press__grid">
        {last3.map((art) => (
          <article className="press__card" key={art.id}>
            <div className="press__image">
              <img src={art.imageUrl} alt={art.titre} />
            </div>
            <div className="press__meta">
              <span className="press__author">{art.auteur}</span>
              <span className="press__date">{formatDate(art.date)}</span>
            </div>
            <h3 className="press__headline">{art.titre}</h3>
            <p className="press__excerpt">{art.resume}</p>
            <button
              className="press__btn"
              onClick={() => navigate(`/article/${art.id}`)}
            >
              Lire l’article&nbsp;<span className="press__arrow">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PressSection;
