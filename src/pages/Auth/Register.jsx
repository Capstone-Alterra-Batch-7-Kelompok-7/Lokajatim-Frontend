import { Link } from "react-router-dom";
import logo from "../../assets/logo-crop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import slide1 from '../../assets/auth/aut-slide1.png'
import slide2 from '../../assets/auth/aut-slide2.png'
import slide3 from '../../assets/auth/aut-slide3.png'
import { useEffect, useState } from "react";
const Register = () => {
  return (
    <>
      <div className="w-full min-h-screen md:flex">
        {/* Register Form Start */}

        <div className="md:w-[40%] w-full min-h-screen bg-[url(https://s3-alpha-sig.figma.com/img/eb4e/b918/44e6350c01c34560f40f77de606e7121?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8qiibStLA7oGlsidbjujFs5zQ-tYRV4dkDH2nd9MLYXKp2ts8Cx9vRojSiscnL8LC~AQvNniSuD5CCe4JtmrzkF1id~TQ3In~upprgSjwhlZowQKF9Jj~QXxZcaV69MCHv5gNB73A0AzooE8Yww25u-aApLJprwM8DqSBa5mX9yTovjfApV~uRq9WML-Q0nTUvcd3--buLKv5nVZ9wIj1JNorHLXX8Pcfdc306EJbDA--ieZb2wPK3~Ow0OuzuDVxgORQ7H2C2~LLl1dLmia-SFaYiHqZg2hMwJeaW4cslbgxc75mHQVuF0w9gtTaFx0xpymtruRLM4EyV1L5rCCw__)] bg-cover flex flex-col justify-center px-[2rem] text-white">
          <h1 className="text-3xl font-bold">Daftar Akun Baru</h1>
          <p>
            Halo, Sobat Budaya! Yuk, daftar dan jelajahi seni serta budaya Jawa
            Timur.
          </p>
          <p>
            Sudah punya akun? <Link className="text-secondary">Masuk</Link>
          </p>
          <form action="" className="text-primary py-4 flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-4">
              <input type="text" className="input w-full " placeholder="Nama Depan" />
              <input
                type="text"
                className="input w-full"
                placeholder="Nama Belakang"
              />
            </div>
            <input type="email" className="input w-full" placeholder="Email" />
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div className="flex gap-4">
              <input type="checkbox" className="checkbox bg-white" />
              <p className="text-white">
                Saya Menyetujui{" "}
                <Link className="text-secondary">Syarat dan Ketentuan</Link>
              </p>
            </div>
            <button className="btn btn-secondary w-full text-white">
              Daftar Sekarang
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div className="h-[1px] w-full bg-white"></div>
            <p className="p-1 text-center bg-neutral text-xs rounded-lg mx-2 w-[15rem]">
              Or Register With
            </p>
            <div className="h-[1px] w-full bg-white"></div>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <button className="btn bg-white border-none hover:bg-slate-100 text-primary w-[50%]">
              Google
            </button>
            <button className="btn bg-white border-none hover:bg-slate-100 text-primary w-[50%]">
              Facebook
            </button>
          </div>
        </div>
        {/* Register Form End */}
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
    console.log(currentIndex)
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
              className={`${currentIndex === 0 ? "text-secondary" : "text-gray-300"}`}
              onClick={() => setCurrentIndex(0)}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={`${currentIndex === 1 ? "text-secondary" : "text-gray-300"}`}
              onClick={() => setCurrentIndex(1)}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={`${currentIndex === 2 ? "text-secondary" : "text-gray-300"}`}
              onClick={() => setCurrentIndex(2)}
            />
          </div>
        </>
      }
    </>
  );
}


export default Register;
