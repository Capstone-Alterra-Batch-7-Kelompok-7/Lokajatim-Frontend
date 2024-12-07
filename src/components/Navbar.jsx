import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-6 flex items-center justify-between">
      <div className="flex items-center">
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
      <div className="flex space-x-4">

        {/* Tombol Masuk */}
      <Link to="/login">
        <button
          className="w-[90px] h-[32px] border-[1px] border-[#8B5428] rounded-[8px] text-[#8B5428] text-sm font-medium hover:bg-[#F5E5DA]"
          style={{ fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            padding: "8px 24px", }}
        >
          Masuk
        </button>
      </Link>

      {/* Tombol Daftar */}
      <Link to="/register">
        <button
          className="w-[90px] h-[32px] bg-[#8B5428] rounded-[8px] text-white text-sm font-medium hover:bg-[#714221]"
          style={{ fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            padding: "8px 24px", }}
        >
          Daftar
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
