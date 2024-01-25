import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { navLink } from "../constant";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="w-full absolute text-black">
      <nav
        className="flex lg:gap-5 bg-white p-4 w-full justify-between
        xl:justify-center md:gap-10 items-center"
      >
        <div className="flex gap-3 sm:gap-6">
          <button type="button" className="xl:hidden">
            <Menu size={35} />
          </button>
          <Link
            href="/"
            className="font-IntegralCf text-black text-2xl md:text-4xl font-extrabold"
          >
            SHOP.CO
          </Link>
        </div>
        <div className="hidden xl:flex flex-shrink-0">
          <ul className="flex flex-row gap-8">
            {navLink.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex gap-1 font-SatoshiRegular text-xl"
                >
                  {link.label}
                  <img src={link.img} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex rounded-full items-center flex-shrink
          sm:w-[35rem] bg-none sm:bg-gray-200 "
        >
          <button type="submit" className="p-2 hidden sm:flex">
            <Search className="text-black md:text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="font-SatoshiRegular hidden sm:flex bg-gray-200 p-3 w-full 
            rounded-r-full"
          />
        </div>
        <div className="flex ">
          <div className="flex items-center sm:hidden">
            <button type="button" className="p-2">
              <Search size={30} />
            </button>
          </div>
          <div className="flex items-center">
            <button type="button" className="p-2">
              <ShoppingCart size={30} className="md:size-[35px]" />
            </button>
          </div>
          <div className="flex items-center">
            <button type="button" className="p-2">
              <CircleUserRound size={30} className="md:size-[35px]" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
