import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { navLink } from "../constant";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { DropDown } from "./DropDown";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openShop, setOpenShop] = useState(false);

  const toogleSideBar = () => setOpenMenu(!openMenu);

  const dropDown = () => setOpenShop(!openShop);
  return (
    <header className="w-full absolute text-black z-50 ">
      <nav
        className="fixed flex lg:gap-5 2xl:gap-12 bg-white px-4 py-3 md:py-4 w-full justify-between
        xl:justify-center md:gap-10 items-center border border-b-neutral-100"
      >
        <div className="flex gap-3 sm:gap-6">
          <button type="button" className="xl:hidden" onClick={toogleSideBar}>
            <Menu size={35} />
          </button>
          <Link
            to="/"
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
                  to={link.to}
                  className="flex gap-1 font-SatoshiRegular text-xl"
                >
                  {link.label}
                  <button onClick={dropDown}>
                    <img src={link.img} />
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex rounded-full items-center flex-shrink
          sm:w-[35rem] bg-none sm:bg-gray-200 "
        >
          <button type="submit" className="p-2 hidden md:flex">
            <Search className="text-black md:text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="font-SatoshiRegular hidden md:flex bg-gray-200 p-3 
            w-full rounded-r-full"
          />
        </div>
        <div className="flex ">
          <div className="flex items-center md:hidden">
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

      {openMenu && <SideBar onClose={toogleSideBar} />}
      {openShop && <DropDown />}
    </header>
  );
};
