import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";
import AlertError from "../../components/alert/AlertError";
import bg from "../../assets/auth/bg-auth.jpg";
import logo from "../../assets/logo-crop.png";
import imgsucces from "../../assets/auth/succes-login.png";
import slide1 from "../../assets/auth/aut-slide1.png";
import slide2 from "../../assets/auth/aut-slide2.png";
import slide3 from "../../assets/auth/aut-slide3.png";
import { Loading } from "../../components/Loading";


const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataSlider = [
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
      description: `Temukan berbagai macam event kesenian dan budaya yang ada di Jawa Timur dan Pesan Tiketnya`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % dataSlider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [dataSlider.length]);

  return (
    <div className="text-center">
      <img
        src={dataSlider[currentIndex].img}
        alt="Slide"
        className="mx-auto"
        width={400}
        loading="lazy"
      />
      <h2 className="pt-4 text-3xl text-primary font-semibold">
        {dataSlider[currentIndex].title}
      </h2>
      <p className="w-[60%] mx-auto text-gray-600">
        {dataSlider[currentIndex].description}
      </p>
      <div className="flex justify-center gap-2 mt-3">
        {dataSlider.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCircle}
            className={`cursor-pointer transition-colors duration-300 ${currentIndex === index ? "text-secondary" : "text-gray-300"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Login = () => {
  const [inputLogin, setInputLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setInputLogin({ ...inputLogin, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      /*const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        inputLogin
      );*/
      const response = await axios.post(
        `https://lokajatim.org/login`,
        inputLogin
      );

      if (response.status === 200) {
        // Set the token in localStorage
        localStorage.setItem("token", response.data.data.token);

        const modal = document.getElementById("success-login");
        modal.showModal();

        // Wait for 3 seconds, then redirect to /homepage
        setTimeout(() => {
          modal.close();
          window.location.href = "/homepage";
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login gagal. Silakan coba lagi."
      );
    } finally {
      setIsloading(false);
    }
  };


  return (
    <>
      {isLoading && <Loading />}
      <div className="w-full min-h-screen md:flex">
        {/* Bagian Kiri - Form Login */}
        <div
          className={`md:w-[40%] w-full min-h-screen bg-cover flex flex-col justify-center px-[2rem] text-white`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <AlertError error={error} setError={setError} />
          <h1 className="text-3xl font-bold">Masuk Akun</h1>
          <p>Halo, Sobat Budaya! Senang melihatmu kembali.</p>
          <p>
            Belum punya akun?{" "}
            <Link to="/register" className="text-secondary">
              Daftar
            </Link>
          </p>
          <form
            onSubmit={handleSubmit}
            className="text-primary py-4 flex flex-col gap-4"
          >
            <input
              type="email"
              id="email"
              className="input w-full"
              placeholder="Email"
              onChange={handleChange}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input w-full"
                placeholder="Password"
                onChange={handleChange}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500 cursor-pointer hover:text-gray-700"
              />
            </div>
            <p className="text-white mt-2">
              Lupa Kata Sandi?{" "}
              <Link to="/aturulang" className="text-secondary font-semibold hover:underline">
                Atur Ulang
              </Link>
            </p>
            <div className="flex gap-4">
              <input type="checkbox" className="checkbox bg-white" />
              <p className="text-white">
                Saya menyetujui{" "}
                <Link className="text-secondary">Syarat dan Ketentuan</Link>
              </p>
            </div>
            <button type="submit" className="btn btn-secondary text-white">
              Masuk Akun
            </button>

          </form>
          <p className="text-[16px] leading-[20px] font-normal text-center text-[#FEFEFE]">
            Atau masuk dengan:
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <button className="btn bg-white border-none hover:bg-slate-100 text-primary w-[50%]">
              Google
            </button>
            <button className="btn bg-white border-none hover:bg-slate-100 text-primary w-[50%]">
              Facebook
            </button>
          </div>
        </div>

        {/* Slide kanan */}
        <div className="md:w-[60%] min-h-screen bg-white md:flex justify-center items-center flex-col hidden">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" width={50} />
            <p className="logo-font text-primary text-3xl">Lokajatim</p>
          </div>
          <Slide />
        </div>

        {/* Modal Sukses Login */}
        <CustomModal
          img={imgsucces}
          id="success-login"
          title="Berhasil Masuk Akun"
          description="Yeay, Selamat Datang Kembali!"
        />
      </div>
    </>
  );
};

export default Login;
