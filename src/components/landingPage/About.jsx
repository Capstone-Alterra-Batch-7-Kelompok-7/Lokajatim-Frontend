import React from "react";

const About = () => {
  return (
    <section
      className="relative text-white flex justify-center items-center py-16 px-4"
      style={{
        backgroundImage: "url('bph.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="au2.png"
            alt="Man holding phone"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Tentang Lokajatim</h2>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p>
              Lokajatim adalah platform di mana hasil budaya lokal Jawa Timur
              yang terintegrasi dunia digital. Kami hadir sebagai jembatan untuk
              memperkenalkan produk UMKM, event budaya, dan artikel inspiratif
              dari sudut-sudut Jawa Timur yang mungkin belum Anda kenal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
