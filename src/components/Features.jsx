import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Image Section */}
        <div
          className="rounded-tl-[32px] rounded-tr-none rounded-bl-none rounded-br-none shadow-lg overflow-hidden"
          style={{ width: "538px",
            height: "588px",
            padding: "33px 0px 0px 0px",
            borderRadius: "32px 0px 0px 0px" }}
        >
          <img
            src="ftr.png"
            alt="Kenapa Harus Memilih Lokajatim?"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div
          className="flex flex-col"
          style={{ width: "736px", height: "564px", gap: "48px" }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Kenapa Harus Memilih Lokajatim?
          </h2>
          <p className="text-gray-600">
            Platform terbaik untuk mendukung produk lokal, budaya, dan informasi
            seputar Jawa Timur.
          </p>

          {/* Features Grid */}
          <div
            className="grid grid-cols-2 gap-8"
            style={{ width: "654px", height: "444px", gap: "32px" }}
          >
            {/* Feature 1 */}
            <div
              className="bg-[#FCFAF7] p-6 rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none shadow-md flex flex-col items-center"
              style={{ width: "306px", height: "206px", gap: "24px" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: "#9E602E",
                  borderRadius: "12px",
                }}
              >
                <i className="fas fa-store text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Marketplace Produk Lokal
              </h3>
              <p className="text-gray-600 text-center">
                Belanja produk asli Jawa Timur dengan mudah dan cepat.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-[#FCFAF7] p-6 rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none shadow-md flex flex-col items-center"
              style={{ width: "306px", height: "206px", gap: "24px" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: "#9E602E",
                  borderRadius: "12px",
                }}
              >
                <i className="fas fa-calendar-alt text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Event - Event Di Jawa Timur
              </h3>
              <p className="text-gray-600 text-center">
                Yuk, temukan acara seni dan budaya seru di sekitar kamu!
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-[#FCFAF7] p-6 rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none shadow-md flex flex-col items-center"
              style={{ width: "306px", height: "206px", gap: "24px" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: "#9E602E",
                  borderRadius: "12px",
                }}
              >
                <i className="fas fa-newspaper text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Artikel & Berita Jawa Timur
              </h3>
              <p className="text-gray-600 text-center">
                Dapatkan informasi terbaru seputar budaya, tradisi, dan berita
                dari Jawa Timur.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="bg-[#FCFAF7] p-6 rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none shadow-md flex flex-col items-center"
              style={{ width: "306px", height: "206px", gap: "24px" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: "#9E602E",
                  borderRadius: "12px",
                }}
              >
                <i className="fas fa-robot text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Chatbot AI Lokabot
              </h3>
              <p className="text-gray-600 text-center">
                Ada pertanyaan? Lokabot siap bantu kapan pun kamu butuh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
