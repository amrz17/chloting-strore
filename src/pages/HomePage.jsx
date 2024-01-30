import { DressStyles } from "../components/DressStyles";
import Hero from "../components/Hero";
import { NewArrival } from "../components/NewArrival";
import { Review } from "../components/Review";
import { TopSelling } from "../components/TopSelling";

export const HomePage = () => {
  return (
    <section
      className="flex flex-col w-full 
      pt-16 lg:pt-20"
    >
      <Hero />
      <NewArrival />
      <TopSelling />
      <DressStyles />
      <Review />
    </section>
  );
};
