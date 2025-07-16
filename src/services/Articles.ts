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
    "Un courtier vient de lancer un service à destination des agents généraux qui permet de placer temporairement en pension leurs clients en passe d’être résiliés (ou déjà résiliés) par leur mandante.",
    `<div>
  <p><strong>Exigences de volumes d’affaires, fermetures de codes courtage</strong> : les courtiers de proximité doivent redoubler d’efforts pour trouver des partenaires leur permettant de poursuivre leur activité. Illustration avec l’Écurie Assurance, fondée par Karim Hanaty.</p>
  <p>Il devient de plus en plus dur pour les courtiers de proximité de répondre aux exigences de production des compagnies.</p>
  <p>En 2020, L’Argus de l’assurance présentait l’Écurie Assurance, un concept fondé par Karim Hanaty. L’idée : proposer une solution d’accueil temporaire aux clients refusés par les assureurs traditionnels, leur permettant de stabiliser leur situation avant une réintégration éventuelle.</p>
  <p>L’Écurie Assurance fonctionne ainsi comme un filet de sécurité, offrant une seconde chance aux clients résiliés ou présentant un profil jugé trop risqué.</p>

  <h2>Un parcours du combattant</h2>
  <p>Quatre ans plus tard, Karim Hanaty dresse un constat amer : travailler avec les grands assureurs et les courtiers grossistes relève d’un parcours du combattant pour les courtiers de proximité.</p>
  <p>« Nous avons dû prospecter de nombreuses compagnies d’assurance, mais elles exigeaient déjà un volume d’affaires conséquent pour nous accorder leur confiance », explique Karim Hanaty.</p>
  <p>L’accès aux codes courtage se complexifie, et les petits courtiers se heurtent à des conditions de production de plus en plus strictes.</p>
  <p>« Certains grossistes imposent désormais des objectifs sous peine de fermer des codes. Cela met en péril de nombreux acteurs qui n’ont pas la capacité d’atteindre ces seuils », ajoute-t-il.</p>

  <h2>"Sans partenaire, nous ne pouvions rien proposer"</h2>
  <p>Le concept de l’Écurie Assurance repose sur un système de "conciergerie" permettant aux agents généraux de placer temporairement des clients refusés par leurs assureurs habituels. Mais sans accès aux produits, difficile de faire vivre cette solution. « Nous avions la demande, les clients, mais sans partenaire, nous ne pouvions rien proposer », se souvient le courtier.</p>
  <p>L’Écurie Assurance a pourtant démontré son utilité avec plus de 150 agents inscrits utilisant sa plateforme et un modèle basé sur la réversibilité des placements clients.</p>

  <h2>Ne pas baisser les bras</h2>
  <p>Face à ces difficultés, Karim Hanaty n’a pas baissé les bras. Après des mois de recherche, il a trouvé un nouvel allié : Help Courtage (Help Assurance). « Nous les avons rencontrés en septembre dernier au Salon du Courtage et avons rapidement signé un premier contrat », précise-t-il.</p>
  <p>Cette collaboration a permis à l’Écurie Assurance de reprendre son activité et d’automatiser la tarification pour les agents généraux. « Avant, tout était manuel, ce qui ralentissait considérablement le processus. »</p>
</div>
`
  ),
  new Article(
    2,
    "Entre amertume et débrouillardise, les difficultés des courtiers de proximité face aux grands acteurs de l’assurance",
    "L'argus de l’assurance",
    "2020-09-09",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "Quatre ans plus tard, Karim Hanaty dresse un constat amer : travailler avec les grands assureurs et les courtiers grossistes relève d’un parcours du combattant pour les courtiers de proximité.",
    `<div>
  <p>L’ampleur de la crise sanitaire liée au coronavirus a fait que professionnels ont été touchés par les interruptions d’activité consécutives au confinement. En l’absence de prise en charge de leurs pertes d’exploitation, certains d’entre eux se retrouvent aujourd’hui dans l’incapacité de régler leurs primes d’assurance.</p>
  <p>En réponse à ces difficultés, l’Écurie Assurance, forée en France par Karim Hanaty, propose aux agents généraux une solution de placement pour leurs clients dont les contrats sont résiliés ou en voie de résiliation par une compagnie mandante, en leur offrant la possibilité de les mettre en pension pour une durée de 12 à 36 mois.</p>
  <p>Le principe est simple : « notre cabinet actionne son réseau de courtage pour maintenir la couverture des assurés qui font face à des difficultés de paiement » explique Karim Hanaty. Sans cette intervention, souligne-t-il, ceux-ci sortiraient du parcours assurantiel et donc du portefeuille de l’agent. La solution consiste à permettre aux agents de garder leurs clients dans le respect des règles de souscription de leur mandant et d’éviter les pertes sur leur portefeuille. Ce dispositif s’adresse aussi aux professionnels qui n’ont jamais été couverts car il rend possible la création d’antécédents d’assurance et de relevés d’information.</p>

  <h2>Expérience optimisée</h2>
  <p>« Attentif à la révolution digitale en cours et aux nouvelles attentes des clients qu’elle suppose », le cabinet de courtage s’applique à répondre à leur volonté de pouvoir gérer leurs contrats d’assurance de manière autonome, n’importe où et tout le temps. « C’est dans cet objectif que l’Écurie assurance décline son expertise assurantielle sur le web à travers ses services de souscription en ligne » explique le promoteur de cette innovation.</p>
  <p>Le site <a href="https://www.ecurie-assurance.fr" target="_blank">www.ecurie-assurance.fr</a> est conçu pour garantir un usage mobile, en matière de devis, de souscription, de paiement et de suivi de dossier aux agents généraux.</p>
  <p>Les clients sont placés à l’Écurie jusqu’à l’acceptation du risque par la compagnie mandante.</p>
  <p>L’agent général reprendra le risque chez lui une fois passée la période "purgatoire" de son client et en accord avec la compagnie d’assurance. Libéré de ses antécédents au terme de la période de référence, le client pourra être repris par l’agent et stabiliser son portefeuille en le remettant chez sa mandante.</p>
  <p>« L’Écurie répond avant tout aux attentes des agents généraux et de leurs clients en s’adaptant aux problématiques qu’ils traversent, que ce soit au regard du contexte actuel que des contraintes liées à leur métier, par un système combinant fiabilité et pragmatisme afin de gérer et structurer leurs affaires », souligne Karim Hanaty.</p>
</div>
`
  ),
  new Article(
    3,
    "Assurances : Une solution Web innovante pour les agents généraux",
    "l'Observateur",
    "2020-09-10",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    " Attentif à la révolution digitale en cours et aux nouvelles attentes des clients qu’elle suppose », le cabinet de courtage s’applique à répondre à leur volonté de pouvoir gérer leurs contrats d’assurance de manière autonome, n’importe où et tout le temps.",
    `<div>
  <h2>Courtage : L’Écurie Assurance invente la pension pour les clients des agents généraux</h2>
  <p>Un courtier vient de lancer un service à destination des agents généraux qui permet de placer temporairement en pension leurs clients en passe d’être résiliés (ou déjà résiliés) par leur mandante.</p>
  <p>La crise du coronavirus et l’absence de prise en charge de la perte d’exploitation sont venues affecter de nombreuses entreprises et professionnels et, de fait, les agents généraux.</p>
  <p>Une situation, qui n’a pas échappé au courtier Pacific Assurances. « J’ai remarqué que j’avais beaucoup de demandes d’agents généraux qui n’arrivaient pas à replacer leurs risques "aggravés". C’est un manque à gagner pour eux et une menace pour la stabilité de leur portefeuille », explique Karim Hanaty, gérant de Pacific Assurances.</p>
  <p>Au regard de cette tendance, le courtier a décidé de lancer l’Ecurie-Assurance.fr, une site internet permettant aux agents généraux de placer temporairement en pension leurs clients en voie d’être résiliés – ou déjà résiliés – par leur mandante, pendant une durée de 12 à 36 mois. « Nous travaillons de concert avec l’agent général afin de savoir à quel moment le client est assez sain pour pouvoir réintégrer le portefeuille », explique Karim Hanaty.</p>

  <h3>Typologie d’antécédents</h3>
  <p>Le dispositif s’adresse également aux professionnels qui n’ont jamais été couverts, car il rend possible la création d’antécédents d’assurance et de relevés d’information. « Nous avons beaucoup d’artisans qui ont été résiliés pour non-paiement. Nous plaçons aussi ceux résiliés pour sinistre, fausse déclaration intentionnelle ou non », souligne Karim Hanaty. L’Écurie Assurance reprend également les clients qui ont essuyé une liquidation judiciaire. « Malgré la résiliation pour non-paiement, nous avons des accords avec notre réseau pour qu’ils puissent payer mensuellement et échelonner sur leur trésorerie ».</p>
  <p>Le service est proposé pour les risques courants en assurance dommages des professionnels : la multirisque immeuble (Propriétaire non exploitant/Propriétaire non occupant), la RC pro, la multirisque professionnelle ainsi que la RC décennale et la dommages-ouvrage. « Nous passons par le Lloyd’s de Londres via notre intermédiaire Nexus Europe, nous arrivons ainsi à proposer des solutions RC pour les activités dites dangereuses, travaux en hauteur, désamiantage, déplombage, photovoltaïque, etc. », explique Karim Hanaty.</p>

  <h3>Suivi des clients</h3>
  <p>Le site <a href="https://www.ecurie-assurance.fr" target="_blank">www.ecurie-assurance.fr</a> est conçu pour garantir un usage mobile, en matière de devis, de souscription, de paiement et de suivi de dossier aux agents généraux. Il fournit une interface dédiée aux clients, mais aussi un back office de gestion et de suivi de leurs portefeuilles, ainsi que des services personnalisés. Une plateforme de régulation et de suivi munie d’un système de relance régulier permet d’établir avec l’agent général le moment de reprise de son client mis en pension et de faire le point avec lui (notamment si les produits de sa compagnie mandante ne satisfont pas le client final, voire si sa compagnie met fin à des contrats professionnels).</p>

  <h3>Les porteurs de risques</h3>
  <p>Courtier gestionnaire, Pacific Assurances, par l’intermédiaire de sa solution L’Écurie Assurance, travaille avec plusieurs acteurs de l’assurance comme QBE via le courtier grossiste Solly Azar « qui possède de bonnes conditions de souscriptions sur les produits en RC décennale et RC pro », ou encore Leader Insurance par sa filiale Axre, qui place le risque auprès d’assureurs comme la Mutuelle d’assurance Bresse Bugey. « Les artisans qui n’ont pas été assurés pendant 2, 5, voire 7 ans, par exemple, peuvent être aussi repris ».</p>

  <h3>Commissions et réglementation</h3>
  <p>Le modèle de rémunération repose sur un principe de rétrocessions de commission entre le courtier pensionnaire et l’agent général. Concrètement, l’Écurie Assurance perçoit, dans un premier temps, les commissions en lieu et place de l’agent général et lui rétrocède dans un second temps une partie. « Nous lui versons une commission "modulable". La compagnie nous reverse la nôtre. Nous faisons du 50-50, c’est un partenariat gagnant-gagnant » précise Karim Hanaty.</p>
  <p>Ce dernier affirme que tout est parfaitement en règle avec la réglementation. « Un agent a le droit de faire du courtage accessoire à hauteur de 10 % de son portefeuille. À partir du moment où l’agent place provisoirement son client chez l’Écurie et le reprend chez lui, ça ne pose aucun problème juridique au niveau de la mandante », affirme le gérant de Pacific Assurance. « Cela fait partie du devoir de conseil que d’aider un client, de le replacer s’il n’a pas de solution. C’est DDA-compatible », conclut-il.</p>
</div>
`
  ),
];
