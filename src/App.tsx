import { Routes, Route } from "react-router-dom";
import { HomepageEcurie } from "./screens/HomepageEcurie/HomepageEcurie";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomepageEcurie />} />
          {/* Tu pourras ajouter d'autres routes ici plus tard */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};
