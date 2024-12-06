import { Link } from "react-router-dom";
import lgo from "../assets/logo-crop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-transparent py-4 text-black">
        <aside className="flex items-center">
          <img src={lgo} alt="logo" width={50} />
          <p className="logo-font text-2xl">LOKAJATIM</p>
        </aside>
        <nav>
          <h6 className=" footer-title text-black opacity-100 capitalize text-lg">
            Follow us
          </h6>
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            <FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-base text-white bg-black p-1 rounded-full"
            />
          </div>
          <h6 className=" text-black text-sm uppercase font-semibold pt-2">
            Call us
          </h6>
          <p>+1 800 854-36-80</p>
        </nav>
        <nav>
          <h6 className="footer-title text-black opacity-100 capitalize text-lg ">
            Produk & Layanan
          </h6>
          <a className="link link-hover">Produk Lokal</a>
          <a className="link link-hover">Event Lokal</a>
          <a className="link link-hover">Web-design</a>
          <a className="link link-hover">Artikel Seni & Budaya</a>
          <a className="link link-hover">Kalender Event</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black opacity-100 capitalize text-lg">
            Panduan Pengguna
          </h6>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Kebijakan Privasi</a>
          <a className="link link-hover">Syarat & Ketentuan</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black opacity-100 capitalize text-lg">
            Tentang Kami
          </h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Teams</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
