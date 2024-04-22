import { ChevronRight, X } from "lucide-react";
import PropType from "prop-types";

export const Filters = (prop) => {
  const { isOpen, onClose } = prop;
  return (
    <div
      className={`${
        isOpen ? "open" : ""
      }bg-white w-full fixed h-screen top-2 z-50
 rounded-3xl p-4 border `}
    >
      <div className="">
        <div
          className="flex justify-between items-center
          pb-2"
        >
          <h2
            className="font-SatoshiBold text-black text-2xl
          "
          >
            Filters
          </h2>
          <button onClick={onClose}>
            <X size={30} />
          </button>
        </div>
        <hr />
        <ul
          className="flex flex-col gap-2 font-SatoshiMedium 
          py-2"
        >
          <li className="flex justify-between">
            T-shirt <ChevronRight />
          </li>
          <li className="flex justify-between">
            Shorts <ChevronRight />
          </li>
          <li className="flex justify-between">
            Shirts <ChevronRight />
          </li>
          <li className="flex justify-between">
            Hoodie <ChevronRight />
          </li>
          <li className="flex justify-between">
            Jeans <ChevronRight />
          </li>
        </ul>
      </div>
      <hr />
      <div className="py-2">
        <h2
          className="font-SatoshiBold text-black text-2xl
          "
        >
          Price
        </h2>
      </div>
      <hr />
      <div className="py-2">
        <h2
          className="font-SatoshiBold text-black text-2xl
          "
        >
          Colors
        </h2>
        <div>
          <ul className="grid grid-cols-7 gap-y-4 py-2">
            <li
              className="w-[37px] h-[37px] bg-green-400 rounded-full border 
              border-green-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-red-400 rounded-full border 
              border-red-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-yellow-400 rounded-full border 
              border-yellow-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-orange-400 rounded-full border 
              border-orange-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-blue-400 rounded-full border 
              border-blue-600"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-blue-600 rounded-full border 
              border-blue-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-purple-600 rounded-full border 
              border-purple-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-pink-500 rounded-full border 
              border-pink-900"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-white rounded-full border 
              border-gray-400"
            ></li>

            <li
              className="w-[37px] h-[37px] bg-black rounded-full border 
              border-black"
            ></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <h2
          className="font-SatoshiBold text-black text-2xl
          "
        >
          Size
        </h2>
        <div className="py-2"></div>
      </div>
      <hr />
      <div className="py-2">
        <h2
          className="font-SatoshiBold text-black text-2xl
          "
        >
          Dress Style
        </h2>
        <ul
          className="flex flex-col gap-2 font-SatoshiMedium
          py-2"
        >
          <li className="flex justify-between">
            Casual <ChevronRight />
          </li>
          <li className="flex justify-between">
            Formal <ChevronRight />
          </li>
          <li className="flex justify-between">
            Party <ChevronRight />
          </li>
          <li className="flex justify-between">
            Gym <ChevronRight />
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center p-2">
        <button className="btn btn-wide">Apply Filter</button>
      </div>
    </div>
  );
};

Filters.prototype = {
  prop: PropType.node,
};
