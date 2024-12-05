import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="ftr.png" 
              alt="Kenapa Harus Memilih Lokajatim?"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kenapa Harus Memilih Lokajatim?
            </h2>
            <p className="text-gray-600 mb-8">
              Platform terbaik untuk mendukung produk lokal, budaya, dan informasi seputar Jawa Timur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-[#EBD5C8] p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="text-4xl text-brown-500 mb-4">
                  <i className="fas fa-store"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Marketplace Produk Lokal
                </h3>
                <p className="text-gray-600 text-center">
                  Belanja produk asli Jawa Timur dengan mudah dan cepat.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-[#EBD5C8] p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="text-4xl text-brown-500 mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Event - Event Di Jawa Timur
                </h3>
                <p className="text-gray-600 text-center">
                  Yuk, temukan acara seni dan budaya seru di sekitar kamu!
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-[#EBD5C8] p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="text-4xl text-brown-500 mb-4">
                  <i className="fas fa-newspaper"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Artikel & Berita Jawa Timur
                </h3>
                <p className="text-gray-600 text-center">
                  Dapatkan informasi terbaru seputar budaya, tradisi, dan berita dari Jawa Timur.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="bg-[#EBD5C8] p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="text-4xl text-brown-500 mb-4">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Chatbot AI Lokabot
                </h3>
                <p className="text-gray-600 text-center">
                  Ada pertanyaan? Lokabot siap bantu kapan pun kamu butuh!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
