import { Link } from "react-router-dom";
import logo from "../assets/lgo-putih.png";
const NavbarBlack = ({ children }) => {
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
      id: 2,
      title: "Event",
      link: "/event",
    },
    {
      id: 3,
      title: "Produk Lokal",
      link: "/product",
    },
  ];
  return (
    <>
      <div className="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-[#404040] w-full text-white px-2 md:px-[2rem]">
            <div className="navbar-start flex items-center gap-2">
              <img src={logo} alt="lgo" width={40} />
              <p className="logo-font text-white text-3xl">Lokajatim</p>
            </div>
            <div className="navbar-center hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navbarItems.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:navbar-end hidden lg:flex">
              <div className="flex items-center gap-4">
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
          <ul className="menu bg-white min-h-full w-80 p-4">
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
export default NavbarBlack;
