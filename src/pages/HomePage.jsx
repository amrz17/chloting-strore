import { DressStyles } from "../components/DressStyles";
import Hero from "../components/Hero";
import { NewArrival } from "../components/NewArrival";
import { Review } from "../components/Review";
import { TopSelling } from "../components/TopSelling";

export const HomePage = () => {
  return (
    <section>
      <Hero />
      <NewArrival />
      <TopSelling />
      <DressStyles />
      <Review />
    </section>
  );
};
