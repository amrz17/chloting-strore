import {
  calvin,
  gucci,
  hero,
  prada,
  star,
  versace,
  zara,
} from "../assets/images";
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
            className="flex flex-col absolute items-center h-fit 
            gap-6 px-24 pt-20"
          >
            <div className="flex flex-col gap-6">
              <h1 className="font-IntegralCf font-extrabold lg:text-6xl">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="font-SatoshiRegular text-gray-500 text-xl">
                Browse through our diverse range of meticulosly crafted
                garments, designed <br />
                to bring out your individuality and cater to your sense of
                style.
              </p>
              <Button />
            </div>
            <div className="flex text-2xl items-center mt-6 mr-14">
              <div>
                <h2 className="font-SatoshiBold text-4xl">200+</h2>
                <p className="font-SatoshiRegular text-lg text-gray-400">
                  International Brands
                </p>
              </div>
              <hr className="bg-gray-400 w-14 h-1 rotate-90" />
              <div>
                <h2 className="font-SatoshiBold text-4xl">2,000+</h2>
                <p className="font-SatoshiRegular text-lg text-gray-400">
                  High-Quality Products
                </p>
              </div>
              <hr className="bg-gray-400 w-14 h-1 rotate-90" />
              <div>
                <h2 className="font-SatoshiBold text-4xl">30,000+</h2>
                <p className="font-SatoshiRegular text-lg text-gray-400">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <img src={star} className="absolute top-40 right-[17%]  " />
          <img src={star} width={56} className="absolute top-80 right-[45%] " />
          <img src={hero} className="relative w-fit mx-auto bg-transparent" />
        </div>
      </div>
      <div
        className="flex justify-center gap-20 text-white 
        bg-black w-screen h-[122px]"
      >
        <img src={versace} width={166} height={33} />
        <img src={zara} width={91} height={38} />
        <img src={gucci} width={156} height={36} />
        <img src={prada} width={194} height={32} />
        <img src={calvin} width={206} height={33} />
      </div>
    </section>
  );
};

export default Hero;
