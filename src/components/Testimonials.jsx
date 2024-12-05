import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-[#8B5428] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Apa Kata Mereka Pengguna Lokajatim?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Dimas Ardiansyah"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Sebagai pecinta budaya lokal, saya sering kesulitan mencari
              informasi event seni dan budaya. Lokajatim memberikan solusi
              lengkap! Saya bisa tahu jadwal event sekaligus membeli tiketnya
              dengan mudah."
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <h4 className="font-bold text-lg">Dimas Ardiansyah</h4>
            <p className="text-sm text-gray-500">Seniman Tari</p>
            <span className="text-sm text-gray-400 italic">Testimonial</span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Riana Putri"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Saya sangat terkesan dengan kemudahan mencari produk lokal di
              Lokajatim. Produk-produk yang tersedia benar-benar mencerminkan
              keindahan budaya lokal kita. Sangat membantu untuk mendukung UMKM
              di Jawa Timur!"
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <h4 className="font-bold text-lg">Riana Putri</h4>
            <p className="text-sm text-gray-500">Pengusaha Kecil</p>
            <span className="text-sm text-gray-400 italic">Testimonial</span>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Nanda Puspita"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Artikel-artikel tentang budaya lokal di Lokajatim sangat
              informatif dan inspiratif. Rasanya seperti menjelajah setiap sudut
              Jawa Timur tanpa harus ke sana langsung. Terima kasih, Lokajatim!"
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <h4 className="font-bold text-lg">Nanda Puspita</h4>
            <p className="text-sm text-gray-500">Penulis Konten</p>
            <span className="text-sm text-gray-400 italic">Testimonial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
