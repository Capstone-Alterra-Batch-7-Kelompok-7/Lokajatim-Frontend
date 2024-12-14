// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-crop.png";
import {
  faBagShopping,
  faBell,
  faCalendar,
  faComment,
  faFile,
  faFileLines,
  faHouse,
  faMoneyBillTransfer,
  faRightFromBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loading } from "./Loading";
import profile from "../assets/dumy/profile.jpg";
export const WrapperDashboard = ({
  children,
  tabActive = 'dashboard',
}) => {
  const [isLoading, setIsloading] = useState(false);
  // const { name, role } = useUser();
  const name = "Kansa";
  const role = "Admin";

  // const handleLogout = async () => {
  //   setIsloading(true);
  //   const Response = await instance.post("/logout");
  //   if (Response) {
  //     localStorage.clear();
  //     window.location.href = "/login";
  //     setIsloading(false);
  //     return;
  //   }
  //   setIsloading(false);
  //   return;
  // };

  return (
    <>
      <div className="bg-white max-h-screen flex ">
        {/* Sidebar */}
        <div className="min-w-[17rem] min-h-screen md:block text-primary bg-[#F6F8FA] overflow-y-auto hidden px-4">
          <Link
            to={"/"}
            className="flex items-center justify-center my-[3rem] mb-[4rem] gap-4"
          >
            <img src={logo} alt="logo" width={45} />
            <p className="logo-font text-3xl font-bold uppercase">lokajatim</p>
          </Link>
          <div className="text-lg flex flex-col gap-4">
            <>
              <ListMenuDashboard
                text={"Beranda"}
                icon={faHouse}
                href={"/dashboard"}
                active={tabActive == "dashboard" ? true : false}
              />
              <ListMenuDashboard
                text={"Produk"}
                icon={faBagShopping}
                href={"/dashboard/product"}
                active={tabActive == "product" ? true : false}
              />
              <ListMenuDashboard
                text={"Event"}
                icon={faCalendar}
                href={"/dashboard/event"}
                active={tabActive == "event" ? true : false}
              />
              <ListMenuDashboard
                text={"Artikel"}
                icon={faFileLines}
                href={"/dashboard/article"}
                active={tabActive == "article" ? true : false}
              />
              <ListMenuDashboard
                text={"Transaksi"}
                icon={faMoneyBillTransfer}
                href={"/dashboard/transaction"}
                active={tabActive == "transaction" ? true : false}
              />
              <ListMenuDashboard
                text={"Laporan"}
                icon={faFile}
                href={"/dashboard/report"}
                active={tabActive == "report" ? true : false}
              />
              <ListMenuDashboard
                text={"Keluar"}
                icon={faRightFromBracket}
                href={"/homepage"}
                active={tabActive == "out" ? true : false}
              />
            </>
          </div>
        </div>

        <div className="drawer drawer-end font-[Public Sans] sticky top-0 z-[1000]">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col max-h-screen">
            {/* Navbar */}
            <div className="navbar bg-[#F6F8FA] w-full flex justify-between items-center md:px-7">
              <div className="flex-1 navbar-start">
                <div className="input input-bordered flex items-center gap-3 rounded-full h-[2.5rem] focus-within:outline-none border-gray-300 w-[23rem]">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1 navbar-end">
                <div className="flex gap-2 items-center">
                  <img
                    src={profile}
                    alt=""
                    className="object-contain w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium md:text-right text-black">
                      {name}
                    </h1>
                    <p className="text-sm md:text-right">{role}</p>
                  </div>
                </div>
              </div>

              {/* Burger button untuk tampilan mobile */}
              <div className="navbar-end flex-1 md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current text-black"
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

            <div className="bg-white max-h-screen overflow-y-auto">
              {children}
            </div>
            {/* Page content here */}
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="min-w-[17rem] min-h-screen block text-gray-700 border bg-[#F6F8FA] overflow-y-auto px-4">
              <div className=" text-center py-1">
                <Link
                  to={"/"}
                  className="flex items-center justify-center my-[3rem] mb-[4rem] gap-4"
                >
                  <img src={logo} alt="logo" width={45} />
                  <p className="logo-font text-3xl font-bold uppercase">
                    lokajatim
                  </p>
                </Link>
              </div>
              <div className="text-lg flex flex-col gap-4">
                <>
                  <ListMenuDashboard
                    text={"Beranda"}
                    icon={faHouse}
                    href={"/dashboard"}
                    active={tabActive == "dashboard" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Produk"}
                    icon={faBagShopping}
                    href={"/dashboard/product"}
                    active={tabActive == "product" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Event"}
                    icon={faCalendar}
                    href={"/dashboard/event"}
                    active={tabActive == "event" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Artikel"}
                    icon={faFileLines}
                    href={"/dashboard/article"}
                    active={tabActive == "article" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Transaksi"}
                    icon={faMoneyBillTransfer}
                    href={"/dashboard/transaction"}
                    active={tabActive == "transaction" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Laporan"}
                    icon={faFile}
                    href={"/dashboard/report"}
                    active={tabActive == "report" ? true : false}
                  />
                  <ListMenuDashboard
                    text={"Keluar"}
                    icon={faRightFromBracket}
                    href={"/homepage"}
                    active={tabActive == "out" ? true : false}
                  />
                </>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? <Loading /> : ""}
      </div>
    </>
  );
};

const ListMenuDashboard = ({ text, icon, href, active = false }) => {
  return (
    <>
      <Link to={href}>
        <div
          className={`flex items-center text-base justify-start py-4  rounded-2xl pl-3 hover:bg-primary hover:text-white ${
            active ? "bg-primary text-white" : "bg-white"
          }`}
        >
          <FontAwesomeIcon icon={icon} />
          <p className="pl-3">{text}</p>
        </div>
      </Link>
    </>
  );
};
