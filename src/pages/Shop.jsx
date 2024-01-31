import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center w-full h-full
       gap-4 text-center font-SatoshiBold text-black text-4xl"
    >
      <Link to="/shop/men">
        <div
          className="flex items-center justify-center border w-[300px] h-[280px]
        rounded-lg"
        >
          Men
        </div>
      </Link>
      <Link to="/shop/women">
        <div
          className="flex items-center justify-center border w-[300px] h-[280px]
        rounded-lg"
        >
          Women
        </div>
      </Link>
    </section>
  );
};
