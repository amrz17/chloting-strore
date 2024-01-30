import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { Casual } from "./pages/Casual";
import { Footer } from "./components/Footer";
import { Formal } from "./pages/Formal";
import { Party } from "./pages/Party";
import { Gym } from "./pages/Gym";
import { DressStyles } from "./components/DressStyles";

function App() {
  return (
    <main className="bg-white">
      <Nav />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/styles" element={<DressStyles />} />
        <Route path="/casual" element={<Casual />} />
        <Route path="/formal" element={<Formal />} />
        <Route path="/party" element={<Party />} />
        <Route path="/gym" element={<Gym />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
