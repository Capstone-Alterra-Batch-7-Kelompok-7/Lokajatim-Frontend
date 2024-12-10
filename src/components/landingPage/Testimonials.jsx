import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const Testimonials = () => {
  return (
    <section className="bg-[#8B5428] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16 leading-tight">
          Apa Kata Mereka Pengguna Lokajatim?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="absolute -top-10 left-10">
              <img
                src="t1.jpeg"
                alt="Dimas Ardiansyah"
                className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
              />
            </div>
            <div className="absolute top-4 right-6 flex text-[#8B5428] text-lg">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <i key={index} className="bi bi-star-fill text-[#8B5428] mx-1"></i>
                ))}
            </div>
            <div className="mt-14 flex justify-center">
              <p
                className="text-[#161616] text-left leading-4"
                style={{
                  width: "323px",
                  height: "80px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                "Sebagai pecinta budaya lokal, saya sering kesulitan mencari
                informasi event seni dan budaya. Lokajatim memberikan solusi
                lengkap! Saya bisa tahu jadwal event sekaligus membeli tiketnya
                dengan mudah."
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Dimas Ardiansyah
                </h4>
                <p className="text-sm text-gray-500">Seniman Tari</p>
              </div>
              <div className="text-gray-800 flex items-center justify-center mt-4">
      {/* Lingkaran dengan ikon jempol */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mr-2"
        style={{ backgroundColor: "#E9B763" }}
      >
        <i className="bi bi-hand-thumbs-up-fill text-white text-lg"></i>
      </div>
      {/* Teks di kanan */}
      <span className="text-sm font-bold">Testimonial</span>
    </div>

  </div>
  </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="absolute -top-10 left-10">
              <img
                src="t2.jpeg"
                alt="Riana Putri"
                className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
              />
            </div>
            <div className="absolute top-4 right-6 flex text-[#8B5428] text-lg">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <i key={index} className="bi bi-star-fill text-[#8B5428] mx-1"></i>
                ))}
            </div>
            <div className="mt-14 flex justify-center">
              <p
                className="text-[#161616] text-left leading-4"
                style={{
                  width: "323px",
                  height: "80px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                "Saya sangat terkesan dengan kemudahan mencari produk lokal di
                Lokajatim. Produk-produk yang tersedia benar-benar mencerminkan
                keindahan budaya lokal kita. Sangat membantu untuk mendukung UMKM
                di Jawa Timur!"
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Riana Putri
                </h4>
                <p className="text-sm text-gray-500">Pengusaha Kecil</p>
              </div>
              <div className="text-gray-800 flex items-center justify-center mt-4">
      {/* Lingkaran dengan ikon jempol */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mr-2"
        style={{ backgroundColor: "#E9B763" }}
      >
        <i className="bi bi-hand-thumbs-up-fill text-white text-lg"></i>
      </div>
      {/* Teks di kanan */}
      <span className="text-sm font-bold">Testimonial</span>
    </div>

  </div>
  </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="absolute -top-10 left-10">
              <img
                src="t3.jpeg"
                alt="Nanda Puspita"
                className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
              />
            </div>
            <div className="absolute top-4 right-6 flex text-[#8B5428] text-lg">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <i key={index} className="bi bi-star-fill text-[#8B5428] mx-1"></i>
                ))}
            </div>
            <div className="mt-14 flex justify-center">
              <p
                className="text-[#161616] text-left leading-4"
                style={{
                  width: "323px",
                  height: "80px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                "Artikel-artikel tentang budaya lokal di Lokajatim sangat
                informatif dan inspiratif. Rasanya seperti menjelajah setiap sudut
                Jawa Timur tanpa harus ke sana langsung. Terima kasih, Lokajatim!"
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Nanda Puspita
                </h4>
                <p className="text-sm text-gray-500">Penulis Konten</p>
              </div>

              <div className="text-gray-800 flex items-center justify-center mt-4">
      {/* Lingkaran dengan ikon jempol */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mr-2"
        style={{ backgroundColor: "#E9B763" }}
      >
        <i className="bi bi-hand-thumbs-up-fill text-white text-lg"></i>
      </div>
      {/* Teks di kanan */}
      <span className="text-sm font-bold">Testimonial</span>
    </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Testimonials;
