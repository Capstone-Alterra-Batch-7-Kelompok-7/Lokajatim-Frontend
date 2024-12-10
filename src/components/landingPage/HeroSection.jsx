import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero w-full min-h-screen bg-base-200 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse relative pt-[80px] pb-[56px] pl-[60px] pr-[60px] w-[1440px] h-[676px] justify-between">
        {/* Gambar Hero */}
        <img 
          src="hs1.png" 
          alt="Hero" 
          width={500}
          className=" rounded-[32px_0_0_0] shadow-2xl relative right-[-150px]" 
        />
        {/* Bagian Konten */}
        <div className="w-[593px] h-[352px] gap-[36px]">
          {/* Header Text */}
          <h1 
            className="text-left text-[#28180B] font-roboto font-bold text-[48px] leading-[56px]"
            style={{
              width: "593px",
              height: "168px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Temukan Produk Lokal & Acara Budaya Terbaik di Jawa Timur
          </h1>
          {/* Subheading */}
          <p className="py-6 text-left text-[#3B2411] font-roboto text-[20px] font-normal leading-[30px]">
            Dukung UMKM Lokal dan jelajahi kekayaan budaya bersama kami.
          </p>
          {/* Tombol Explore */}
          <Link
          to={'/homepage'} 
            className="w-[201px] h-[52px] px-[24px] py-[16px] gap-[8px] rounded-[6px] bg-[#8B5428] text-[#FFFFFF] font-roboto text-[16px] font-medium leading-[20px] text-left flex items-center justify-center"
          >
            <span>Jelajahi Sekarang</span>
            {/* Icon di kanan tombol */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" 
              className="ml-2" 
              width="7.12px" 
              height="13.11px"
            >
              <path fill="none" stroke="#FFFFFF" strokeWidth="1.5" d="M6 3l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
