import React from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES } from "../../../../services/Articles";
import "./PressSection.scss";

const formatDate = (date: string) => {
  // Format : "2020-09-09" → "09 septembre 2020"
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const PressSection: React.FC = () => {
  const navigate = useNavigate();

  // Tri par date décroissante, puis garde les 3 plus récents
  const lastArticles = [...ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="press-section">
      <div className="w92">
        <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-5xl text-[#243d38] tracking-[0] leading-[normal] presscardtitle">On parle de nous</h2>
        <div className="press-section__list">
            {lastArticles.map((article) => (
            <div className="press-card" key={article.id}>
                <div className="press-card__img">
                <img src={article.imageUrl} alt={article.titre} />
                </div>
                <div className="press-card__meta">
                <span className="press-card__author">
                    <strong>{article.auteur}</strong>
                </span>
                <span className="press-card__date">
                    {formatDate(article.date)}
                </span>
                </div>
                <h3 className="press-card__title">{article.titre}</h3>
                <p className="press-card__desc">{article.resume}</p>
                <button
                className="press-card__btn"
                onClick={() => navigate(`/article/${article.id}`)}
                >
                Lire l’article <span className="arrow">→</span>
                </button>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
