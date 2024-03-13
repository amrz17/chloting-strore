import { newArrivals } from "../../constant";
import Button from "../btn/Button";
import CardItem from "../card/CardItem";

const NewArrival = () => {
  return (
    <section className="bg-white text-black flex flex-col pt-8">
      <div className="flex justify-center pb-6">
        <h2 className="font-IntegralCf text-4xl">New Arrival</h2>
      </div>
      <CardItem>
        {newArrivals.map((product) => (
          <div key={product.label}>
            <div>
              <img src={product.img} />
            </div>
            <div className="flex flex-col font-SatoshiBold py-2 gap-2">
              <h3 className="text-xl">{product.label}</h3>
              <span className="text-2xl">{product.price}</span>
            </div>
          </div>
        ))}
      </CardItem>
      <div className="flex justify-center px-4 mb-4 font-SatoshiMedium">
        <Button
          type="button"
          variant="w-full btn-md bg-white text-black hover:text-white lg:btn-lg lg:btn-wide"
        >
          View All
        </Button>
      </div>
    </section>
  );
};

export default NewArrival;
