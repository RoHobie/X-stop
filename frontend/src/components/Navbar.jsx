import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import SearchBar from "./SearchBar.jsx";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* NAVBAR */}
      <div className="flex items-center justify-between w-full bg-stone-100 px-6 py-3">
        <Link to="/" className="font-montserrat font-bold italic text-2xl">X-Stop</Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-16 text-stone-700 font-poppins text-lg ">
          <Link to="/new">New</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/support">Support</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <FaShoppingCart className="size-6 cursor-pointer" />
          <FiUser className="size-5" />
          <TbMenu
            className="size-7 lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-stone shadow-lg z-50 font-semibold">
          <div className="flex flex-col items-center gap-5 py-6">
            <p onClick={() => setMenuOpen(false)}>New</p>
            <p onClick={() => setMenuOpen(false)}>Men</p>
            <p onClick={() => setMenuOpen(false)}>Women</p>
            <p onClick={() => setMenuOpen(false)}>Support</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
