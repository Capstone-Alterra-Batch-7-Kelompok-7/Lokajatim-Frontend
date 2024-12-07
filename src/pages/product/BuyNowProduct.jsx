import { Link } from "react-router-dom";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import ProductInCart from "../../assets/product-in-cart.png";
import food1 from "../../assets/dumy/image1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import mapAlert from "../../assets/woman-map.jpg";
import promoIcon from "../../assets/icon/promo.png";
import alertCircle from "../../assets/icon/alert-circle.png";
import Footer from "../../components/Footer";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useCounter } from "../../hooks/useCounter";
const BuyNowProduct = () => {
  const id = 0;
  const { counter, handleClickAdd, handleClickReduce } = useCounter();
  return (
    <>
      <NavbarSearchBrown>
        <div className="md:px-[2rem] w-full min-h-screen p-4 bg-[#FAFBFE]">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Product Lokal</Link>
              </li>
              <li>
                <Link to={`/product/${id}`}>Detail Product</Link>
              </li>
              <li className="font-medium">Pembayaran</li>
            </ul>
          </div>
          <h1 className="text-xl font-bold mt-5">Beli Langsung</h1>

          <div className="flex justify-between md:flex-row flex-col items-start gap-4">
            <div className="md:max-w-[60%] w-full">
              <div className="px-4 py-2 flex items-center justify-between rounded-2xl w-full my-4 bg-white border border-gray-400">
                <div className="flex items-center gap-2 w-full">
                  <img src={ProductInCart} alt="prize" width={74} />
                  <p>
                    Ini halaman terakhir dari proses belanjamu. Yuk pastikan
                    semua sudah benar yah untuk kelancaran proses pengiriman
                    produk kamu
                  </p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-5">Barang yang dibeli</h2>

              {/* Purchased Product section */}
              <div className="py-2 flex items-end justify-between w-full my-4 gap-2">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex items-start gap-5">
                    <img
                      src={food1}
                      alt="prize"
                      width={100}
                      className="max-h-[100px] rounded-2xl"
                    />
                    <div className="">
                      <h3 className="font-bold">
                        Rambak Pisang 80 gr HONEAST SIDOARJO
                      </h3>
                      <p>80gr</p>
                    </div>
                  </div>
                </div>
                {/* Button add count product */}
                <div className="border border-gray-500 bg-white flex items-center justify-between px-2 py-1 gap-7 max-w-[200px] rounded-lg">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-gray-500 font-bold text-lg cursor-pointer"
                    onClick={handleClickReduce}
                  />
                  <p>{counter}</p>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-orange-600 font-bold text-lg cursor-pointer"
                    onClick={handleClickAdd}
                  />
                </div>
              </div>

              {/* Shipment Section */}
              <div className="">
                <h2 className="text-lg font-bold my-4">Pengiriman</h2>
                <CardAddressInfo />
              </div>
            </div>
            <div className="md:max-w-[40%] w-full flex justify-end ">
              <div className="md:w-96 w-full py-4 border rounded-2xl shadow-lg">
                <div className="rounded-2xl shadow-lg mx-7 mb-10 p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-2">
                    <img src={promoIcon} width={19} alt="promo icon" />
                    <p className="font-bold">Makin hemat pakai promo</p>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} className="text-lg" />
                </div>
                <div className="p-4 border-y border-gray-400 font-medium bg-white ">
                  <h5 className="">Ringkasan Belanja</h5>
                  <h6 className="text-sm">Total Belanja</h6>
                  <div className="flex items-center justify-between font-light">
                    <p>Total Harga {"(1 Barang)"}</p>
                    <p>Rp18.000</p>
                  </div>
                </div>
                <div className="p-4 border-b border-gray-400 font-medium bg-white ">
                  <h5 className="">Biaya Transaksi</h5>
                  <div className="flex items-center justify-between font-light text-sm">
                    <div className="flex items-center gap-1">
                      <p>Biaya Layanan</p>
                      <img src={alertCircle} alt="" width={16} />
                    </div>
                    <p>Rp18.000</p>
                  </div>
                  <div className="flex items-center justify-between font-light text-sm">
                    <div className="flex items-center gap-1">
                      <p className="font-bold">Biaya Jasa Aplikasi</p>
                      <img src={alertCircle} alt="" width={16} />
                    </div>
                    <p>Rp-</p>
                  </div>
                </div>
                <div className="p-4 border-b border-gray-400 font-medium bg-white">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <p className="">Biaya Jasa Aplikasi</p>
                    <p>Rp18.000</p>
                  </div>
                </div>
                <div className="p-4">
                  <Link
                    to={"/success"}
                    className="btn btn-secondary text-white w-full"
                  >
                    Lanjutkan Pembayaran
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </NavbarSearchBrown>
    </>
  );
};

const AlertAddresNone = () => {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-2xl flex justify-center items-center min-h-[322px] gap-4 border border-gray-200">
        <img src={mapAlert} alt="" width={180} className="" />
        <div className="">
          <h3 className="text-lg font-bold">Tambahkan Alamat Dulu Yuk</h3>
          <p>
            Cuma satu langkah lagi sebelum melanjutkan proses pembayaran {":)"}
          </p>
          <button className="btn btn-secondary text-white">
            Tambah Alamat
          </button>
        </div>
      </div>
    </>
  );
};

const CardAddressInfo = () => {
  return (
    <div className="w-full py-4 border rounded-2xl shadow-lg bg-white">
      <div className=" px-4 pb-4 flex items-center gap-4 justify-between">
        <p className="font-bold">Alamat Pengirim</p>
        <button className="btn bg-[#FEF2EB] text-orange-400 hover:bg-orange-500 hover:text-white btn-sm">
          <FontAwesomeIcon icon={faPenToSquare} />
          Ganti alamat
        </button>
      </div>
      <div className="p-4 border-y border-gray-400 bg-white font-normal ">
        <p className="font-bold">
          Khoiru Rizki Bani Adam{" "}
          <span className="font-normal">{"(Rumah)"}</span>
        </p>
        <p className="text-sm">081234567890</p>
        <p className="text-sm">
          Budi Santoso, Jl. Dr. Soetomo No. 123, Kel. Tegalsari, Kec.Tegalsari,
          Kab, Sidoarjo
        </p>
      </div>
      <div className="p-4 bg-white ">
        <div className="flex justify-between items-start ">
          <div className="">
            <h6 className="font-bold pb-4">Pilih Pengiriman</h6>
            <select className="select select-bordered md:w-72 w-full rounded-2xl">
              <option disabled selected>
                Reguler
              </option>
              <option>Express</option>
              <option>Super Express</option>
            </select>
          </div>
          <div className="">
            <h6 className="font-bold pb-4">Pilih Kurir</h6>
            <select className="select select-bordered md:w-72 w-full rounded-2xl">
              <option disabled selected>
                J&T (Rp17.00)
              </option>
              <option>Homer</option>
              <option>Marge</option>
            </select>
            <p className="text-xs pt-1">Estimasi tiba 16 - 19 Nov</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyNowProduct;
