import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo-crop.png";
import slide1 from "../../assets/auth/aut-slide1.png";
import slide2 from "../../assets/auth/aut-slide2.png";
import slide3 from "../../assets/auth/aut-slide3.png";
import imgsucces from "../../assets/auth/succes-login.png";
import { useResetStore } from "../../store/resetPasswordStore";
import { instance } from "../../config/config";
import { Loading } from "../../components/Loading";
import axios from "axios";
import bg from "../../assets/auth/bg-auth.jpg";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false); // Password visibility state
  const [showPassword2, setShowPassword2] = useState(false); // Confirm password visibility state
  const [password, setPassword] = useState(""); // Password state
  const [password2, setPassword2] = useState(""); // Confirm password state
  const [isLoading, setIsLoading] = useState(false);
  const { otpFix, email } = useResetStore();

  // Handle password change
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setPassword2(e.target.value);
  };

  // Handle password validation
  const handlePasswordCheck = () => {
    if (password === password2 && password !== "") {
      document.getElementById("success-login").showModal();
    } else {
      console.log("Passwords don't match or are empty.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token_otp");
    setIsLoading(true);
    if (password !== password2 && password !== "") {
      setIsLoading(false);
      return;
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/reset-password`,
        {
          email: email,
          new_password: password,
          otp: otpFix,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      document.getElementById("success-login").showModal();
      localStorage.removeItem("token_otp");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="w-full min-h-screen md:flex">
      {/* Left Section */}
      {isLoading && <Loading />}
      <div className="md:w-[40%] w-full min-h-screen bg-cover flex flex-col justify-center px-[2rem] text-white" 
      style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl font-bold">Lupa Kata Sandi</h1>
        <br />
        <p>
          Masukkan email Anda yang terdaftar untuk mendapatkan kode verifikasi
        </p>
        <br />
        <form
          action=""
          className="text-primary py-4 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* Password Input */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input w-full"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className="absolute right-4 top-3 text-gray-500 cursor-pointer hover:text-gray-700"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative w-full">
            <input
              type={showPassword2 ? "text" : "password"}
              id="password2"
              className="input w-full"
              placeholder="Konfirmasi Password"
              value={password2}
              onChange={handleConfirmPasswordChange}
            />
            <FontAwesomeIcon
              icon={showPassword2 ? faEye : faEyeSlash}
              onClick={() => setShowPassword2(!showPassword2)} // Toggle confirm password visibility
              className="absolute right-4 top-3 text-gray-500 cursor-pointer hover:text-gray-700"
            />
          </div>

          <br />
          <button
            type="submit"
            className="btn btn-secondary w-full text-white"
            // onClick={handlePasswordCheck} // Trigger modal on save
          >
            Simpan
          </button>
        </form>
      </div>

      <CustomModal
        img={imgsucces} // Update with your success image
        id="success-login" // Sesuaikan dengan ID yang digunakan di handlePasswordCheck
        title="Berhasil Mengubah Password"
        description="Yeay, Selamat Datang Kembali"
      />
      {/* Slider Section */}
      <div className="md:w-[60%] min-h-screen bg-white md:flex justify-center items-center flex-col hidden">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" width={50} />
          <p className="logo-font text-primary text-3xl">Lokajatim</p>
        </div>
        <Slide />
      </div>
    </div>
  );
};

// Slide Component
const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataSileder = [
    {
      img: slide1,
      title: "Pusat Seni dan Budaya Jawa Timur",
      description:
        "Telusuri produk khas dari seniman dan pengrajin Jawa Timur.",
    },
    {
      img: slide2,
      title: "Marketplace Lokal Pertama Di Jawa Timur",
      description: "Temukan berbagai macam produk lokal unggulan.",
    },
    {
      img: slide3,
      title: "Nikmati Berbagai Macam Event Lokal",
      description: "Temukan berbagai macam event kesenian dan budaya.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % dataSileder.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dataSileder.length]);

  return (
    <>
      <img
        src={dataSileder[currentIndex].img}
        alt=""
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
  );
};

export default ResetPassword;
