import { X } from "lucide-react";
import { navLink } from "../constant";
import { useState } from "react";
import { DropDown } from "./DropDown";
import { Link } from "react-router-dom";

export const SideBar = ({ isOpen, onClose }) => {
  const [openShop, setOpenShop] = useState(false);

  const dropDown = () => setOpenShop(!openShop);

  return (
    <div
      className={`${
        isOpen ? "open" : ""
      } xl:hidden fixed bg-gray-1 w-[75%] top-0 h-[100%] p-3 z-40`}
    >
      <div>
        <button onClick={onClose}>
          <X className="text-black mt-2 mb-6" size={35} />
        </button>
        <ul className="flex flex-col gap-8 p-2">
          {navLink.map((link) => (
            <li
              key={link.label}
              className="text-black font-SatoshiRegular
              text-3xl underline"
            >
              <Link to={link.to} className="flex gap-2">
                {link.label}
                <button onClick={dropDown}>
                  <img src={link.img} />
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {openShop && <DropDown />}
    </div>
  );
};
