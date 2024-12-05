import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="flex items-center">
          {/* Logo */}
          <img src="logo-crop.png" alt="Logo" className="w-8 h-8 mr-2" />

          {/* Teks "LOKAJATIM" */}
          <span
            className="text-brown-900 font-cinzel text-[24px] font-normal leading-[32px] tracking-[0.1px]"
            style={{
              width: "131px",
              height: "32px",
              textAlign: "center",
            }}
          >
            LOKAJATIM
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal p-0 space-x-4 text-sm font-medium text-gray-800">
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/features">CATALOG</Link>
          </li>
          <li>
            <Link to="/testimonials">PLACES</Link>
          </li>
          <li>
            <Link to="/FAQ">BLOG</Link>
          </li>
          <li>
            <Link to="/footer">CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <Link to="/login">
          <button className="btn btn-outline border-brown-700 text-brown-700 hover:bg-brown-100 hover:text-brown-900">
            Masuk
          </button>
        </Link>
        <Link to="/register">
          <button className="btn bg-brown-700 text-white hover:bg-brown-800">
            Daftar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
