import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { Casual } from "./pages/Casual";
import { Footer } from "./components/Footer";
import { Formal } from "./pages/Formal";
import { Party } from "./pages/Party";
import { Gym } from "./pages/Gym";
import { DressStyles } from "./components/DressStyles";
import { Shop } from "./pages/Shop";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <main className="bg-white">
      <Nav />
      <section
        className="flex flex-col w-full 
      pt-20 lg:pt-24"
      >
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/men" element={<Men />} />
          <Route path="/shop/women" element={<Women />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/styles" element={<DressStyles />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/formal" element={<Formal />} />
          <Route path="/party" element={<Party />} />
          <Route path="/gym" element={<Gym />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
