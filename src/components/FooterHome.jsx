import React from "react";
import lgo from "../assets/logo-crop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Bagian Kiri (Logo dan Hak Cipta) */}
        <div className="col-span-4 flex flex-col items-start space-y-4 text-left">
          <div className="flex items-center space-x-3">
            <img src={lgo} alt="logo" width={60} className="object-contain" />
            <p className="logo-font text-2xl font-bold text-orange-500">LOKAJATIM</p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            © 2024 Lokajatim. Semua Hak Dilindungi.
          </p>
        </div>

        {/* Elemen lainnya dimulai lebih jauh dari tengah */}
        <div className="col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Bagian Follow Us */}
          <div>
            <h2 className="font-bold text-base mb-4 leading-relaxed">Follow us</h2>
            <div className="flex gap-4">
              <a href="#facebook" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#telegram" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a>
              <a href="#instagram" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <p className="mt-4 text-base leading-relaxed">Call us</p>
            <p className="text-gray-800 text-base leading-relaxed">+1 800 854-36-80</p>
          </div>

          {/* Bagian Produk & Layanan */}
          <div>
            <h2 className="font-bold text-base mb-4 leading-relaxed">Produk & Layanan</h2>
            <ul className="space-y-2 text-base leading-relaxed">
              <li><a href="#produk" className="text-gray-500 hover:text-gray-800">Produk Lokal</a></li>
              <li><a href="#event" className="text-gray-500 hover:text-gray-800">Event Lokal</a></li>
              <li><a href="#webdesign" className="text-gray-500 hover:text-gray-800">Web-design</a></li>
              <li><a href="#artikel" className="text-gray-500 hover:text-gray-800">Artikel Seni & Budaya</a></li>
              <li><a href="#kalender" className="text-gray-500 hover:text-gray-800">Kalender Event Lokal</a></li>
            </ul>
          </div>

          {/* Bagian Panduan Pengguna */}
          <div>
            <h2 className="font-bold text-base mb-4 leading-relaxed">Panduan Pengguna</h2>
            <ul className="space-y-2 text-base leading-relaxed">
              <li><a href="#faq" className="text-gray-500 hover:text-gray-800">FAQ</a></li>
              <li><a href="#kebijakan" className="text-gray-500 hover:text-gray-800">Kebijakan Privasi</a></li>
              <li><a href="#syarat" className="text-gray-500 hover:text-gray-800">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Bagian Tentang Kami */}
          <div>
            <h2 className="font-bold text-base mb-4 leading-relaxed">Tentang Kami</h2>
            <ul className="space-y-2 text-base leading-relaxed">
              <li><a href="#about" className="text-gray-500 hover:text-gray-800">About Us</a></li>
              <li><a href="#careers" className="text-gray-500 hover:text-gray-800">Careers</a></li>
              <li><a href="#faqs" className="text-gray-500 hover:text-gray-800">FAQs</a></li>
              <li><a href="#teams" className="text-gray-500 hover:text-gray-800">Teams</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
