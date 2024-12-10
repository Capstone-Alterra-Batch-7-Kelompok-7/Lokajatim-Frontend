import { Link } from "react-router-dom";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import promoIcon from "../../assets/icon/promo.png";
import alertCircle from "../../assets/icon/alert-circle.png";
import Footer from "../../components/Footer";
import { useCounter } from "../../hooks/useCounter";
// import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import food1 from "../../assets/dumy/image1.jpg";
import CheckBox from "../../components/CheckBox";

const CartProducts = () => {
  // const id = localStorage.getItem("product_id");
  // const { data } = useFetch(`/products/${id}`);
  // console.log(data);
  // // useEffect(() => {

  // // }, []);
  return (
    <>
      <ModalDelete />
      <NavbarSearchBrown>
        <div className="md:px-[2rem] w-full min-h-screen p-4 bg-[#FAFBFE]">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to={"/"}>Beranda</Link>
              </li>
              <li className="font-medium">Keranjang</li>
            </ul>
          </div>
          <h1 className="text-xl font-bold mt-5">Keranjang</h1>

          <div className="flex justify-between md:flex-row flex-col items-start gap-4">
            <div className="md:max-w-[60%] w-full">
              <div className="p-4 flex items-center justify-between rounded-2xl w-full my-4 bg-white font-bold">
                <CheckBox label={"Pilih Semua"} />
                <button
                  onClick={() =>
                    document.getElementById("confirm-delete").showModal()
                  }
                >
                  Hapus
                </button>
              </div>

              {/* Purchased Product section */}
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />

              {/* Shipment Section */}
            </div>

            <div className="md:max-w-[40%] w-full flex justify-end ">
              <div className="md:w-96 w-full pt-9 pb-4 px-4 bg-white border rounded-2xl shadow-lg">
                {/* <div className="p-4 border-y border-gray-400 font-medium bg-white ">
                </div> */}
                <h2 className="font-bold pb-5">Ringkasan Belanja</h2>
                <div className="flex items-center justify-between">
                  <p>Total Harga {"(1 Barang)"}</p>
                  <p className="font-bold">Rp18.000</p>
                </div>

                <div className="p-4">
                  <Link
                    to={"/success"}
                    className="btn btn-primary text-white w-full"
                  >
                    Beli
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

const CardProduct = () => {
  const { counter, handleClickAdd, handleClickReduce } = useCounter();
  const id = 0;
  return (
    <>
      <div className="py-2 px-4 flex items-end justify-between w-full my-4 gap-2 bg-white">
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-start gap-5">
            <CheckBox />
            <img
              // src={data.photos[0]}
              src={food1}
              alt="prize"
              width={100}
              className="max-h-[100px] rounded-2xl"
            />
            <div className="">
              {/* <h3 className="font-bold">{data?.name}</h3> */}
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
    </>
  );
};

const ModalDelete = () => {
  return (
    <dialog id="confirm-delete" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hapus Produk?</h3>
        <p className="py-4">
          Produk yang kamu pilih akan dihapus dari Keranjang.
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex gap-4">
              <button className="btn border-primary border text-primary">
                Batal
              </button>
              <button className="btn btn-primary text-white">Hapus</button>
            </div>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CartProducts;
