import Hero from "../components/homePage/Hero";
import NewArrival from "../components/homePage/NewArrival";
import TopSelling from "../components/homePage/TopSelling";
import { DressStyles } from "../components/DressStyles";
import { Review } from "../components/Review";

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
