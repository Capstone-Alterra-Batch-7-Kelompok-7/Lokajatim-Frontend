import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import slide1 from "/src/assets/auth/aut-slide1.png";
import slide2 from "/src/assets/auth/aut-slide2.png";
import slide3 from "/src/assets/auth/aut-slide3.png";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dataSlider = [
    {
      img: slide1,
      title: "Pusat Seni dan Budaya Jawa Timur",
      description:
        "Telusuri produk khas dari seniman dan pengrajin Jawa Timur. Beli sekarang dan dukung karya lokal.",
    },
    {
      img: slide2,
      title: "Marketplace Lokal Pertama di Jawa Timur",
      description:
        "Temukan berbagai macam produk lokal unggulan dengan harga terjangkau khas Jawa Timur.",
    },
    {
      img: slide3,
      title: "Nikmati Berbagai Macam Event Lokal",
      description:
        "Temukan berbagai macam event kesenian dan budaya yang ada di Jawa Timur dan pesan tiketnya.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dataSlider.length);
    }, 3000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [dataSlider.length]);

  return (
    <div className="text-center">
      {/* Gambar Slider */}
      <img
        src={dataSlider[currentIndex].img}
        alt={dataSlider[currentIndex].title}
        className="mx-auto"
        width={400}
        loading="lazy"
      />
      {/* Judul */}
      <h2 className="font-roboto text-[28px] font-bold leading-[35px] text-[#4F3017] mt-4">
        {dataSlider[currentIndex].title}
      </h2>
      {/* Deskripsi */}
      <p className="font-roboto text-[20px] font-normal leading-[24px] text-[#4F3017] mt-4 w-[80%] mx-auto">
        {dataSlider[currentIndex].description}
      </p>
      {/* Navigasi Bulat */}
      <div className="flex justify-center mt-4 space-x-2">
        {dataSlider.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCircle}
            className={`cursor-pointer ${
              index === currentIndex ? "text-[#4F3017]" : "text-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
