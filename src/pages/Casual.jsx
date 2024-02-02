import { Link } from "react-router-dom";
import { casualStyle } from "../constant";
import { filter } from "../assets/icons";
import { useState } from "react";
import { Filters } from "../components/Filters";

export const Casual = () => {
  const [onfilter, setOnFilter] = useState(false);

  const handleClick = () => setOnFilter(!onfilter);

  return (
    <section>
      <div
        className="text-lg breadcrumbs font-SatoshiRegular 
        text-black p-3"
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Casual</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-3">
        <h2 className="font-SatoshiBold text-black text-3xl">Casual</h2>
        <span className="font-SatoshiRegular text-sm">
          Showing 1-10 of 100 Product
        </span>
        <button
          type="button"
          onClick={handleClick}
          className="bg-gray-1 w-[35px] h-[35px] rounded-full"
        >
          <img
            src={filter}
            color="black"
            size={20}
            className="mx-auto "
            onClick={handleClick}
          />
        </button>
      </div>
      <div className="grid grid-cols-2 p-2 gap-4 ">
        {casualStyle.map((casual) => (
          <div
            key={casual.label}
            className="flex flex-col
            text-black font-SatoshiBold "
          >
            <img src={casual.img} />
            <span className="truncate overflow-hidden ">{casual.label}</span>
            <span className="">{casual.price}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="join flex gap-6 w-full justify-center items-center py-2 text-black">
        <button className="join-item btn btn-outline w-[90px] text-black">
          Previous
        </button>
        <button className="join-item ">1</button>
        <button className="join-item ">2</button>
        <button className="join-item ">...</button>
        <button className="join-item ">9</button>
        <button className="join-item ">10</button>
        <button className="join-item btn btn-outline w-[90px] text-black">
          Next
        </button>
      </div>

      {onfilter && <Filters onClose={handleClick} />}
    </section>
  );
};
