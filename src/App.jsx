import { DressStyles } from "./components/DressStyles";
import Hero from "./components/Hero";
import { Nav } from "./components/Nav";
import { NewArrival } from "./components/NewArrival";
import { Review } from "./components/Review";
import { TopSelling } from "./components/TopSelling";
import { Footer } from "./components/footer";

function App() {
  return (
    <main className="bg-white">
      <Nav />
      <section
        className="flex flex-col w-full h-screen
      pt-20 lg:pt-24"
      >
        <Hero />
        <NewArrival />
        <TopSelling />
        <DressStyles />
        <Review />
        <Footer />
      </section>
    </main>
  );
}

export default App;
