import { Link } from "react-router-dom";
import OTPVerification from "../../components/OTP/OTPInput";
import logo from "../../assets/logo-crop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../../assets/auth/aut-slide1.png";
import slide2 from "../../assets/auth/aut-slide2.png";
import slide3 from "../../assets/auth/aut-slide3.png";
import { useEffect, useState } from "react";
import { useResetStore } from "../../store/resetPasswordStore";
import bg from "../../assets/auth/bg-auth.jpg";
const VerifyCode = () => {
  const { email } = useResetStore();
  return (
    <>
      <div className="w-full min-h-screen md:flex">
        {/* VerifyCode Form Start */}

        <div
          className="md:w-[40%] w-full min-h-screen bg-cover flex flex-col justify-center px-[2rem] text-white"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="text-3xl font-bold">Kode Verifikasi</h1>
          <br />
          <p>
            Kode verifikasi telah dikirim ke{" "}
            <span className="font-bold">{email}.</span> Masukkan kode di bawah
            untuk melanjutkan
          </p>

          <form action="" className="text-primary py-4 flex flex-col gap-4">
            <OTPVerification />

            <Link to="/reset">
              <button className="btn btn-secondary w-full text-white">
                Verifikasi
              </button>
            </Link>
            <p>
              <span className="text-white">Tidak menerima kode? </span>
              <span className="text-[#E9B763] cursor-pointer">Kirim Ulang</span>
            </p>
          </form>
        </div>
        {/* VerifyCode Form End */}
        <div className="md:w-[60%] min-h-screen bg-white md:flex justify-center items-center flex-col hidden">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" width={50} />
            <p className="logo-font text-primary text-3xl">Lokajatim</p>
          </div>
          <Slide />
        </div>
      </div>
    </>
  );
};

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataSileder = [
    {
      img: slide1,
      title: "Pusat Seni dan Budaya Jawa Timur",
      description: `Telusuri produk khas dari seniman dan pengrajin Jawa Timur. Beli sekarang dan dukung karya lokal`,
    },
    {
      img: slide2,
      title: "Marketplace Lokal Pertama Di Jawa Timur",
      description: `Temukan berbagai macam produk lokal unggulan dengan harga terjangkau khas Jawa Timur`,
    },
    {
      img: slide3,
      title: "Nikmati Berbagai Macam Event Lokal",
      description: `Temukan berbagai macam event kesenian dan budaya yang ada di Jawa timur dan Pesan Tiketnya`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % dataSileder.length);
    }, 3000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [dataSileder.length]);
  console.log(currentIndex);
  return (
    <>
      {
        <>
          <img
            src={dataSileder[currentIndex].img}
            alt=""
            className=""
            width={400}
            loading="lazy"
          />
          <h2 className="text-center pt-4 text-3xl text-primary font-semibold">
            {dataSileder[currentIndex].title}
          </h2>
          <p className="text-center w-[60%]">
            {dataSileder[currentIndex].description}
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <FontAwesomeIcon
              icon={faCircle}
              className={`${
                currentIndex === 0 ? "text-secondary" : "text-gray-300"
              }`}
              onClick={() => setCurrentIndex(0)}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={`${
                currentIndex === 1 ? "text-secondary" : "text-gray-300"
              }`}
              onClick={() => setCurrentIndex(1)}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={`${
                currentIndex === 2 ? "text-secondary" : "text-gray-300"
              }`}
              onClick={() => setCurrentIndex(2)}
            />
          </div>
        </>
      }
    </>
  );
};

export default VerifyCode;
