import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="bg-[#222831] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl flex items-center justify-center font-bold text-[#FFD369] tracking-wide">
          <img src={logo} className="w-16" style={{ fill: "#EEE" }} alt="" />
          HomeAdore
        </div>
        <nav>
          <ul className="flex space-x-8 text-[#EEEEEE] text-lg">
            <li>
              <a
                href="/cart"
                className="flex items-center hover:text-[#FFD369] transition-colors duration-200"
              >
                <FaShoppingCart className="mr-2" />
                <span>Cart</span>
              </a>
            </li>
            <li>
              <a
                href="/signin"
                className="flex items-center hover:text-[#FFD369] transition-colors duration-200"
              >
                <FaUser className="mr-2" />
                <span>Sign In</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
