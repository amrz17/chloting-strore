import {
  calvin,
  gucci,
  hero,
  heroMobile,
  prada,
  star,
  versace,
  zara,
} from "../../assets/images";
import Button from "../btn/Button";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-gray-1">
        <div className="flex flex-col mx-auto">
          <div
            className="flex flex-col w-full lg:absolute h-fit 
            gap-y-6 md:px-5 lg:px-8 xl:px-32 pt-12 lg:pt-20 2xl:pt-56 "
          >
            <div className="flex flex-col text-center lg:text-start gap-6 lg:gap-8 xl:gap-10">
              <h1
                className="font-IntegralCf text-black font-extrabold md:pt-4 text-4xl 
                 md:text-6xl lg:text-5xl xl:text-6xl"
              >
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p
                className="font-SatoshiRegular text-gray-500 text-sm 
                md:text-xl lg:text-lg xl:text-xl"
              >
                Browse through our diverse range of meticulosly crafted
                garments, designed <br className="hidden md:flex" />
                to bring out your individuality and
                <br className="flex md:hidden" /> cater to your sense of style.
              </p>
              <Button
                type="button"
                variant="lg:z-10 md:btn-lg w-[75%] lg:w-1/3 mx-auto lg:mx-0 lg:btn-lg
                text-white lg:text-xl bg-black md:text-sm hover:text-black hover:bg-white"
              >
                Shop Now
              </Button>
            </div>
            <div
              className="grid grid-cols-2 gap-y-2 lg:gap-y-0 lg:grid-cols-none text-center lg:text-start w-full 
              lg:flex items-center mt-2 lg:mt-2 
              "
            >
              <div className="">
                <h2 className="font-SatoshiBold text-black text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
                  200+
                </h2>
                <p className="font-SatoshiRegular text-sm md:text-base xl:text-lg text-gray-400">
                  International Brands
                </p>
              </div>
              <hr className="hidden lg:flex mx-auto lg:mx-0 bg-gray-400 w-14 h-1 rotate-90" />
              <div className="">
                <h2 className="font-SatoshiBold text-black text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
                  2,000+
                </h2>
                <p className="font-SatoshiRegular text-sm md:text-base  xl:text-lg text-gray-400">
                  High-Quality Products
                </p>
              </div>
              <hr className="hidden lg:flex bg-gray-400 w-14 h-1 rotate-90" />
              <div className="col-span-2">
                <h2 className="font-SatoshiBold text-black text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
                  30,000+
                </h2>
                <p className="font-SatoshiRegular text-sm md:text-base xl:text-lg text-gray-400">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <img
            src={star}
            className="absolute w-20 top-[75%] right-4 md:top-[75%]  md:right-[25%] lg:top-[20%] lg:right-[7%]  xl:top-[20%] xl:right-[6%] 2xl:top-[23%] 2xl:right-[10%]"
          />
          <img
            src={star}
            width={56}
            className="absolute top-[92%] left-4 md:top-[88%] md:left-[28%] lg:top-[33%] lg:left-[55%] xl:top-[40%] xl:left-[60%] 2xl:top-[48%] 2xl:left-[58%] "
          />

          <div className="md:hidden mx-auto bg-gray-1">
            <img src={heroMobile} className="" />
          </div>
          <img
            src={hero}
            className="relative hidden md:flex w-full xl:ml-10 2xl:mx-auto lg:pt-10  
            bg-transparent md:right-[22%] lg:right-0"
          />

          <div
            className="flex items-center lg:flex-row justify-center gap-4 md:gap-8 flex-col xl:gap-24 text-white 
        bg-black w-full h-[122px]"
          >
            <div className="flex flex-row gap-4 md:gap-14 xl:gap-24">
              <img src={versace} className="w-24 md:w-40 xl:w-52" />
              <img src={zara} className="w-20 md:w-24 xl:w-32" />
              <img src={gucci} className="w-24 md:w-40 xl:w-52 " />
            </div>
            <div className="flex flex-row gap-8 md:gap-12 xl:gap-24">
              <img src={prada} className="w-24 md:w-40 xl:w-52" />
              <img src={calvin} className="w-24 md:w-40 xl:w-52" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
