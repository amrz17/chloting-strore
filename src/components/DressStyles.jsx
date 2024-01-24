import { casualLg, formalLg, gymLg, partyLg } from "../assets/images";
import { dressStyle } from "../constant";

export const DressStyles = () => {
  return (
    <div className="bg-white">
      <div
        className="flex flex-col mx-[5%] items-center bg-gray-1
      rounded-3xl mb-6"
      >
        <div className="">
          <h2
            className="font-IntegralCf text-black text-4xl xl:text-5xl
          text-center py-10"
          >
            BROWSE BY <br /> DRESS STYLE
          </h2>
        </div>
        {dressStyle.map((style) => (
          <div
            key={style.label}
            className="flex justify-center lg:hidden pb-8 mx-auto w-full"
          >
            <img src={style.img} className=" rounded-xl w-fit" />
          </div>
        ))}
        <div
          className="hidden lg:flex lg:flex-col lg:mx-auto gap-4
          lg:mb-8"
        >
          <div className="flex gap-4 xl:w-full">
            <img src={casualLg} className="rounded-xl lg:w-[300px] xl:w-fit" />
            <img src={formalLg} className="rounded-xl lg:w-[450px] xl:w-fit" />
          </div>
          <div className="flex gap-4">
            <img src={partyLg} className="rounded-xl lg:w-[450px] xl:w-fit" />
            <img src={gymLg} className="rounded-xl lg:w-[300px] xl:w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};
