import {
  ArrowRight,
  ChevronRight,
  Minus,
  Plus,
  Tag,
  Trash,
} from "lucide-react";
import { gradientTshirt } from "../assets/images";

export const Cart = () => {
  return (
    <div>
      <div className="flex p-2">
        <a>Home</a>
        <ChevronRight />
        <a>Cart</a>
      </div>
      <div className="p-2 mb-4">
        <h1 className="font-IntegralCf text-4xl text-black">YOUR CART</h1>
      </div>
      <div className="flex justify-center gap-2">
        <div
          className="flex border p-2 w-[94%] rounded-xl
          gap-4"
        >
          <div className="flex justify-between">
            <img src={gradientTshirt} width={150} />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <h2 className="font-SatoshiBold text-black">
                Gradient Grapihic{" "}
              </h2>
              <Trash />
            </div>
            <p className="font-SatoshiRegular text-black">
              Size: <span className="text-gray-1"></span>
            </p>
            <p className="font-SatoshiRegular text-black">
              Color: <span className="text-gray-1"></span>
            </p>
            <div className="flex justify-between">
              <h2 className="font-SatoshiBold text-black text-2xl">$142</h2>
              <div
                className="flex justify-between items-center border w-24 h-8
                rounded-xl p-1 font-SatoshiMedium bg-gray-1 text-black"
              >
                <Minus size={20} />
                <p>1</p>
                <Plus size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div
          className="flex flex-col border p-4 w-[94%] rounded-xl
          gap-4"
        >
          <div
            className="flex flex-col gap-2
            w-full"
          >
            <h2 className="font-SatoshiBold text-black text-xl">
              Order Summary
            </h2>
            <p className="flex justify-between font-SatoshiRegular">
              Subtotal <span className="font-SatoshiBold"></span>
            </p>
            <p className="flex justify-between font-SatoshiRegular">
              Discount (-20%) <span className="font-SatoshiBold"></span>
            </p>
            <p className="flex justify-between font-SatoshiRegular">
              Delivery Fee <span className="font-SatoshiBold"></span>
            </p>
            <hr />
            <p className="flex justify-between font-SatoshiRegular">
              Total <span className="font-SatoshiBold"></span>
            </p>
            <div className="flex justify-between">
              <div
                className="flex items-center bg-gray-1 rounded-full
             w-52 h-12 p-4 gap-2"
              >
                <button className="bg-gray-1">
                  <Tag />
                </button>
                <input
                  placeholder="Add promo code"
                  className="bg-gray-1 w-40 h-12 rounded-r-full"
                />
              </div>
              <div>
                <button className="btn btn-md w-20 rounded-full">Apply</button>
              </div>
            </div>
          </div>
          <button className="btn w-full rounded-full mx-auto">
            Go to Checkout <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
