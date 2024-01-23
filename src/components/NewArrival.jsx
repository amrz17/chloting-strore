import { newArrivals } from "../constant";

export const NewArrival = () => {
  return (
    <section className="bg-white text-black flex flex-col pt-8">
      <div className="flex justify-center pb-6">
        <h2 className="font-IntegralCf text-4xl">New Arrival</h2>
      </div>
      <div className="carousel carousel-center bg-white ml-4  p-4 space-x-4 rounded-box">
        <div className="carousel-item gap-6 flex lg:mx-auto">
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
        </div>
      </div>
      <div className="flex justify-center px-4 mb-4 font-SatoshiMedium">
        <button
          className="btn w-full rounded-full btn-md bg-white text-black 
          hover:text-white lg:btn-lg lg:btn-wide"
        >
          View All
        </button>
      </div>
    </section>
  );
};
