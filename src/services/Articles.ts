export class Article {
  id: number;
  titre: string;
  auteur: string;
  date: string; // format "YYYY-MM-DD" ou "DD MMMM YYYY"
  imageUrl: string;
  resume: string;
  contenuHtml: string;

  constructor(
    id: number,
    titre: string,
    auteur: string,
    date: string,
    imageUrl: string,
    resume: string,
    contenuHtml: string
  ) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.date = date;
    this.imageUrl = imageUrl;
    this.resume = resume;
    this.contenuHtml = contenuHtml;
  }
}

// Exemple de mock data (remplace les images par tes URLs)
export const ARTICLES: Article[] = [
  new Article(
    1,
    "Courtage : L’Ecurie Assurance Invente La Pension Pour Les Clients Des Agents Généraux",
    "L'argus de l’assurance",
    "2020-09-09",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "Lorem ipsum dolor sit amet consectetur. Volutpat risus hendrerit mi fermentum tellus nisl. Elit libero odio eu quis ut.",
    `<h2>Contenu complet de l'article 1</h2><p>Lorem ipsum dolor sit amet, ...</p>`
  ),
  new Article(
    2,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "Lorem ipsum",
    "2025-06-04",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "Lorem ipsum dolor sit amet consectetur. In volutpat pharetra aliquam sagittis eu lectus elementum pretium. Eu non nibh donec aliquet hac.",
    `<h2>Contenu complet de l'article 2</h2><p>Lorem ipsum dolor sit amet, ...</p>`
  ),
  new Article(
    3,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "Lorem",
    "2025-06-04",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    "Lorem ipsum dolor sit amet consectetur. Felis arcu sit risus neque viverra aliquam pharetra magnis risus. Magna malesuada faucibus ut.",
    `<h2>Contenu complet de l'article 3</h2><p>Lorem ipsum dolor sit amet, ...</p>`
  ),
];
