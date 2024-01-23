import { dressStyle } from "../constant";

export const DressStyles = () => {
  return (
    <div className="bg-white">
      <div
        className="flex flex-col mx-[5%] items-center bg-gray-1
      rounded-3xl mb-6 lg:grid lg:grid-cols-2"
      >
        <div className="col-span-2">
          <h2
            className="font-IntegralCf text-black text-4xl xl:text-5xl
          text-center py-10"
          >
            BROWSE BY <br /> DRESS STYLE
          </h2>
        </div>
        {dressStyle.map((style) => (
          <div key={style.label} className="pb-5 lg:mx-auto">
            <img src={style.img} className="xl:hidden rounded-xl" />
            <img src={style.imgLg} className="hidden xl:flex rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
