import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-blue-500 py-8 text-black">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {/* Logo and Text Section */}
        <div className="flex items-center space-x-4">
          <img
            src="logo-crop.png"
            alt="Lokajatim Logo"
            className="h-12"
          />
          <div
            className="text-center"
            style={{
              width: "131px",
              height: "32px",
              fontFamily: "Cinzel Decorative, serif",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "0.1px",
              textAlign: "center",
              color: "#683F1E",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            LOKAJATIM
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="mt-4">Call us</p>
          <a href="tel:+18008543680" className="text-blue-500">
            +1 800 854-36-80
          </a>
        </div>

        {/* Produk & Layanan */}
        <div>
          <h3 className="font-semibold mb-4">Produk & Layanan</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-black hover:text-blue-500">Produk Lokal</a></li>
            <li><a href="#" className="text-black hover:text-blue-500">Event Lokal</a></li>
            <li><a href="#" className="text-black hover:text-blue-500">Web Design</a></li>
            <li><a href="#" className="text-black hover:text-blue-500">Artikel Seni & Budaya</a></li>
            <li><a href="#" className="text-black hover:text-blue-500">Kalender Event Lokal</a></li>
          </ul>
        </div>

        {/* Panduan Pengguna dan Tentang Kami */}
        <div className="grid grid-cols-2 gap-8">
          {/* Panduan Pengguna */}
          <div>
            <h3 className="font-semibold mb-4">Panduan Pengguna</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Tentang Kami */}
          <div>
            <h3 className="font-semibold mb-4">Tentang Kami</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">Teams</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2024 Lokajatim. Semua Hak Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
