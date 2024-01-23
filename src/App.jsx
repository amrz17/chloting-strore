import { DressStyles } from "./components/DressStyles";
import Hero from "./components/Hero";
import { Nav } from "./components/Nav";
import { NewArrival } from "./components/NewArrival";
import { TopSelling } from "./components/TopSelling";

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
      </section>
    </main>
  );
}

export default App;
