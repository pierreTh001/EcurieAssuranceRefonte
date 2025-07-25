import { Routes, Route } from "react-router-dom";
import { HomepageEcurie } from "./screens/HomepageEcurie/HomepageEcurie";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import ServicesPage from "./screens/Services/ServicesPage";
import InscriptionPage from "./screens/Inscription/InscriptionPage";

import './global.scss';
import ContactPage from "./screens/Contact/ContactPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ArticlePage from "./screens/Articles/ArticlePage";
import QuiSommesNousPage from "./screens/QuiSommesNousPage/QuiSommesNousPage";
import AvantagesScreen from "./screens/Avantages/AvantagesScreen";
import MentionLegale from "./screens/MentionLegale/MentionLegale";

export const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomepageEcurie />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/signup" element={<InscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/societe" element={<QuiSommesNousPage />} />
          <Route path="/avantages" element={<AvantagesScreen />} />
          <Route path="/mentions-legales" element={<MentionLegale />} />
          {/* Tu pourras ajouter d'autres routes ici plus tard */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};
