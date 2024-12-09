import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Features = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Image Section */}
        <div
          className="rounded-tl-[32px] shadow-lg overflow-hidden"
          style={{
            width: "538px",
            height: "588px",
            borderRadius: "32px 0px 0px 0px",
          }}
        >
          <img
            src="ftr.png"
            alt="Kenapa Harus Memilih Lokajatim?"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col" style={{ width: "736px", gap: "48px" }}>
          <h2 className="text-3xl font-bold text-gray-800">
            Kenapa Harus Memilih Lokajatim?
          </h2>
          <p className="text-gray-600">
            Platform terbaik untuk mendukung produk lokal, budaya, dan informasi
            seputar Jawa Timur.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                icon: "bi-shop-window",
                title: "Marketplace Produk Lokal",
                description: "Belanja produk asli Jawa Timur dengan mudah dan cepat.",
              },
              {
                icon: "bi-calendar2-x",
                title: "Event - Event Di Jawa Timur",
                description: "Yuk, temukan acara seni dan budaya seru di sekitar kamu!",
              },
              {
                icon: "bi-file-earmark-text",
                title: "Artikel & Berita Jawa Timur",
                description: "Dapatkan informasi terbaru seputar budaya, tradisi, dan berita dari Jawa Timur.",
              },
              {
                icon: "bi-robot",
                title: "Chatbot AI Lokabot",
                description: "Ada pertanyaan? Lokabot siap bantu kapan pun kamu butuh!",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#FCFAF7] shadow-md rounded-lg p-6 flex flex-col items-start gap-4"
                style={{
                  width: "306px",
                  height: "206px",
                }}
              >
                {/* Icon Section */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#9E602E",
                    borderRadius: "12px",
                  }}
                >
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                {/* Title and Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
