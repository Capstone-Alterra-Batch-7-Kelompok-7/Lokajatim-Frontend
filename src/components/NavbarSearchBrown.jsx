import { Link } from "react-router-dom";
import logo from "../assets/lgo-putih.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import cart from "../assets/icon/cart.png";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { instance } from "../config/config";
const NavbarSearchBrown = ({ children }) => {
  const navbarItems = [
    {
      id: 1,
      title: "Beranda",
      link: "/",
    },
    {
      id: 2,
      title: "Artikel",
      link: "/article",
    },
    {
      id: 3,
      title: "Event",
      link: "/event",
    },
    {
      id: 4,
      title: "Produk Lokal",
      link: "/product",
    },
  ];
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
    <>
      <div className="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-[#3B2411] w-full text-white px-2 md:px-[2rem]">
            <div className="navbar-start flex items-center gap-2">
              <div className="flex gap-2 items-center lg:w-[40%] w-full">
                <img src={logo} alt="lgo" width={40} />
                <p className="logo-font text-white text-3xl">Lokajatim</p>
              </div>
              <div className="input h-[2.5rem] focus-within:outline-none w-[60%] hidden text-black lg:flex gap-2 items-center focus:outline-none border-none focus:border-none">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full focus:outline-none"
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            {/* <div className="navbar-center hidden lg:block w-[25rem]">
            
            </div> */}
            <div className="lg:navbar-end hidden lg:flex">
              <div className="flex items-center gap-4">
                {dataUser ? (
                  <>
                  <Link to={'/cart'}>
                    <img src={cart} alt="cart" width={24} />
                  </Link>
                    <FontAwesomeIcon
                      icon={faBell}
                      className="text-2xl font-light"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-2xl font-light"
                    />
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://placehold.co/400"
                        alt=""
                        width={30}
                        className="rounded-full"
                      />
                      <p className="text-sm">{dataUser?.name}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="btn bg-transparent text-white hover:bg-white hover:text-[#404040]"
                    >
                      Masuk
                    </Link>
                    <Link
                      to="/login"
                      className="btn text-[#404040] bg-white hover:bg-[#404040] hover:text-white"
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="navbar-end lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white min-h-full w-80 overflow-auto">
            <div className="flex items-center justify-between gap-4 my-4">
              <div className="flex gap-2 items-center">
                <img
                  src="https://placehold.co/400"
                  alt=""
                  width={30}
                  className="rounded-full"
                />
                <p className="text-sm">Siti Sabrina</p>
              </div>
              {/* <div className="flex items- gap-2">
                <Link
                  to="/login"
                  className="btn btn-sm text-[#404040] bg-white hover:bg-[#404040] hover:text-white"
                >
                  Masuk
                </Link>
                <Link
                  to="/login"
                  className="btn btn-sm text-[#404040] bg-white hover:bg-[#404040] hover:text-white"
                >
                  Daftar
                </Link>
              </div> */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-2xl font-light"
                />
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-2xl font-light"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl font-light"
                />
              </div>
            </div>
            <div className="input focus-within:outline-none bg-gray-200 w-full text-black flex gap-2 items-center focus:outline-none border-none focus:border-none">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full focus:outline-none"
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>

            {/* Sidebar content here */}
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavbarSearchBrown;
