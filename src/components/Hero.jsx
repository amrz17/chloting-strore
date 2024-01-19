import { hero } from "../assets/images";
import { Button } from "./Button";

const Hero = () => {
  return (
    <section
      className="flex flex-col w-screen
      bg-gray-1 pt-24 "
    >
      <div className="w-full">
        <div>
          <div
            className="flex flex-col absolute top-1/3 justify-center items-center 
            h-fit gap-6 px-20"
          >
            <div className="">
              <h1 className="font-IntegralCf font-extrabold lg:text-6xl">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="font-SatoshiRegular text-xl">
                Browse through our diverse range of meticulosly crafted
                garments, designed <br />
                to bring out your individuality and cater to your sense of
                style.
              </p>
              <Button />
            </div>
            <div className="flex text-2xl items-center text-center">
              <div>
                <h2 className="font-SatoshiBold text-4xl">200+</h2>
                <p className="font-SatoshiRegular text-xl">
                  International Brands
                </p>
              </div>
              <hr className="bg-black w-14 h-1 rotate-90" />
              <div>
                <h2 className="font-SatoshiBold text-4xl">2,000+</h2>
                <p className="font-SatoshiRegular text-xl">
                  High-Quality Products
                </p>
              </div>
              <hr className="bg-black w-14 h-1 rotate-90" />
              <div>
                <h2 className="font-SatoshiBold text-4xl">30,000+</h2>
                <p className="font-SatoshiRegular text-xl">Happy Customers</p>
              </div>
            </div>
          </div>
          <img src={hero} className="relative w-fit mx-auto bg-transparent" />
        </div>
      </div>
      <div className="text-white bg-black w-screen h-32"> GUCCI</div>
    </section>
  );
};

export default Hero;
