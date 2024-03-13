import { Star } from "lucide-react";
import { tShirt } from "../assets/images";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <div>
      <div className="font-SatoshiRegular p-2">
        <Link>Home</Link>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-center">
          <img src={tShirt} />
        </div>
        <div className="flex justify-center gap-2">
          <img src={tShirt} width={110} />
          <img src={tShirt} width={110} />
          <img src={tShirt} width={110} />
        </div>
      </div>
      <div className="p-4">
        <h1
          className="font-IntegralCf font-bold text-3xl
          text-black"
        >
          T-shirt
        </h1>
        <Star />
        <span
          className="font-SatoshiBold text-3xl
          text-black"
        >
          $260
        </span>
        <p>lorem</p>
      </div>
      <hr className="w-[90%] mx-auto" />
    </div>
  );
};

export default DetailProduct;
