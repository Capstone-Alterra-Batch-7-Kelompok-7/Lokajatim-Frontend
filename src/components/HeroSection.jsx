import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse relative pt-[80px] pb-[56px] pl-[60px] pr-[60px] w-[1440px] h-[676px] justify-between">
      <img src="hs1.png" alt="Hero" className="w-[684px] h-[564px] gap-0 rounded-[32px_0_0_0] shadow-2xl" />
      <div className="w-[593px] h-[352px] gap-[36px]">
        <h1 className="text-5xl font-bold">Temukan Produk Lokal & Acara Budaya</h1>
        <p className="py-6 text-left text-[#3B2411] font-roboto text-[20px] font-normal leading-[30px]">
        Dukung UMKM Lokal dan jelajahi kekayaan budaya bersama kami.
        </p>
        <button className="w-[201px] h-[52px] px-[24px] py-[16px] gap-[8px] rounded-[6px_0px_0px_0px] bg-[#8B5428] text-[#FFFFFF] font-roboto text-[16px] font-medium leading-[20px] text-left flex items-center justify-center">
        <span>Jelajahi Sekarang</span>
        <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    className="ml-2" 
    width="7.12px" 
    height="13.11px"
  >
    <path fill="none" stroke="#D9D9D9" strokeWidth="1.5" d="M6 3l4 4-4 4" />
  </svg>
  </button>
      </div>
    </div>
  </div>
  
  );
};

export default HeroSection;
