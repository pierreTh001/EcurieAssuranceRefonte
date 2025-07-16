import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES } from "../../services/Articles";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ArticlePage.scss";
import PressSection from "../HomepageEcurie/sections/PressSection/PressSection";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const idx = ARTICLES.findIndex((a) => a.id === Number(id));
  const article = ARTICLES[idx];

  if (!article) {
    return <div className="article-page__notfound">Article introuvable.</div>;
  }

  // On suppose que article.date = "YYYY-MM-DDTHH:mm:ss"
  const dt = new Date(article.date);
  const formattedDate = dt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = dt
    .toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h");

  const prev = ARTICLES[idx - 1];
  const next = ARTICLES[idx + 1];

  return (
    <div className="mainPage">
      {/* ==== ARTICLE PRINCIPAL ==== */}
      <div className="article-page">
        {/* couverture à gauche */}
        <div className="article-page__cover">
          <img src={article.imageUrl} alt={article.titre} />
          <div className="article-page__overlay" />
        </div>

        {/* contenu à droite */}
        <main className="article-page__main">
          <div className="article-page__pub-info">
            Publié par <strong>{article.auteur}</strong> — {formattedDate} à {formattedTime}
          </div>

          <div className="article-page__actions">
            <div className="article-page__share">
              <span>Partager avec</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="article-page__nav">
              <button
                onClick={() => prev && navigate(`/article/${prev.id}`)}
                disabled={!prev}
                aria-label="Article précédent"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => next && navigate(`/article/${next.id}`)}
                disabled={!next}
                aria-label="Article suivant"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <h1 className="article-page__title">{article.titre}</h1>

          <div
            className="article-page__body"
            dangerouslySetInnerHTML={{ __html: article.contenuHtml }}
          />
        </main>
      </div>

      {/* ==== SECTION “ON PARLE DE NOUS” PLEIN-LARGEUR ==== */}
      <section className="article-page__related">
        <PressSection />
      </section>
    </div>
  );
};

export default ArticlePage;
