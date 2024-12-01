import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "../../components/slide";
import CustomModal from "../../components/modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AlertError from "../../components/alert/AlertError";
import bg from "../../assets/auth/bg-auth.jpg";
import logo from "../../assets/logo-crop.png";
import imgsucces from "../../assets/auth/succes-login.png";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputLogin({ ...inputLogin, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLogin.email === "user@example.com" && inputLogin.password === "password") {
      document.getElementById("success-login").showModal();
    } else {
      setError("Login gagal. Silakan coba lagi.");
    }
  };

  return (
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
          action=""
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
          <button type="submit" className="btn btn-secondary">
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
  );
};

export default Login;
