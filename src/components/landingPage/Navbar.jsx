import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../config/config";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profile from "../../assets/dumy/profile.jpg";
const Navbar = () => {
    const [userId, setUserId] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    useEffect(() => {
      const fetch = async (id) => {
        try {
          const response = await instance.get(`/users/${id}`);
          setDataUser(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const token = localStorage.getItem("token");
      if (token) {
        const tokenDecode = jwtDecode(token);
        setUserId(tokenDecode.userID);
      }
      if (userId) {
        fetch(userId);
      }
    }, [userId]);
  return (
    <div className="navbar bg-white shadow-md px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          {/* Logo */}
          <img src="logo-crop.png" alt="Logo" className="w-8 h-8 mr-2" />

          {/* Teks "LOKAJATIM" */}
          <span
            className="text-brown-900 font-cinzel text-[24px] font-normal leading-[32px] tracking-[0.1px] logo-font"
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
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#features">CATALOG</a>
          </li>
          <li>
            <a href="#testimonials">PLACES</a>
          </li>
          <li>
            <a href="#faq">BLOG</a>
          </li>
          <li>
            <a href="#footer">CONTACT</a>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        {dataUser ? (
          <>
            <FontAwesomeIcon icon={faBell} className="text-2xl font-light" />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl font-light"
            />
            <div className="flex gap-2 items-center">
              <img
                src={profile}
                alt=""
                width={30}
                className="rounded-full"
              />
              <p className="text-sm">{dataUser?.name}</p>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                className="w-[90px] h-[32px] border-[1px] border-[#8B5428] rounded-[8px] text-[#8B5428] text-sm font-medium hover:bg-[#F5E5DA]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  padding: "8px 24px",
                }}
              >
                Masuk
              </button>
            </Link>

            {/* Tombol Daftar */}
            <Link to="/register">
              <button
                className="w-[90px] h-[32px] bg-[#8B5428] rounded-[8px] text-white text-sm font-medium hover:bg-[#714221]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  padding: "8px 24px",
                }}
              >
                Daftar
              </button>
            </Link>
          </>
        )}
        {/* Tombol Masuk */}
      </div>
    </div>
  );
};

export default Navbar;
