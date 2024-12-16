import { Link } from "react-router-dom";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import { useCounter } from "../../hooks/useCounter";
// import { useEffect } from "react";
import food1 from "../../assets/dumy/image1.jpg";
import CheckBox from "../../components/CheckBox";
import { useFetch } from "../../hooks/useFetch";
import { useValidateLogin } from "../../hooks/useValidateLogin";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { formatRupiah } from "../../utils/rupiahFormater";
import { instance } from "../../config/config";

const CartProducts = () => {
  const userId = useValidateLogin();
  const { data, isLoading, setIsLoading } = useFetch(`/carts/${userId}`);
  const [idDelete, setIdDelete] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(data?.total_price);
  }, [data])
  
  const handleDeleteItemCart = async (id) => {
    setIsLoading(true);
    try {
      await instance.delete(`/carts/${id}`);
      alert("Produk berhasil dihapus");
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <ModalDelete onConfirm={() => handleDeleteItemCart(idDelete)} />
      <NavbarSearchBrown>
        {data && (
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
                {data.items.map((item, index) => (
                  <CardProduct
                    key={index}
                    name={item.product.name}
                    price={item.product.price}
                    quantity={item.quantity}
                    id={item.id}
                    setIdDelete={setIdDelete}
                    setTotalPrice={setTotalPrice}
                  />
                ))}

                {/* Shipment Section */}
              </div>

              <div className="md:max-w-[40%] w-full flex justify-end ">
                <div className="md:w-96 w-full pt-9 pb-4 px-4 bg-white border rounded-2xl shadow-lg">
                  {/* <div className="p-4 border-y border-gray-400 font-medium bg-white ">
                </div> */}
                  <h2 className="font-bold pb-5">Ringkasan Belanja</h2>
                  <div className="flex items-center justify-between">
                    <p>Total Harga {"(1 Barang)"}</p>
                    <p className="font-bold">
                      {formatRupiah(totalPrice)}
                    </p>
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
        )}
      </NavbarSearchBrown>
    </>
  );
};

const CardProduct = ({
  name,
  price,
  quantity,
  setIdDelete,
  id,
  setTotalPrice,
}) => {
  const { counter, handleClickAdd, handleClickReduce, setCounter } =
    useCounter();
  const [idEditQuantity, setIdEditQuantity] = useState(null);
  useCounter();
  useEffect(() => {
    if (quantity) {
      setCounter(quantity);
    }
  }, [quantity]);

  useEffect(() => {
    const editQuantity = async (id) => {
      try {
        const response = await instance.put(`/carts/${id}`, {
          quantity: counter,
        });
        setTotalPrice(response.data.data.total_price);
      } catch (error) {
        console.error(error);
      }
    };

    editQuantity(idEditQuantity);
  }, [counter, idEditQuantity]);
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
              <h3 className="font-bold">{name}</h3>
              <p>{formatRupiah(price)}</p>
            </div>
          </div>
        </div>

        {/* Button add count product */}
        <div className="flex gap-7 items-center">
          <FontAwesomeIcon
            icon={faTrash}
            className="text-gray-500 cursor-pointer"
            onClick={() => {
              setIdDelete(id);
              document.getElementById("confirm-delete").showModal();
            }}
          />
          <div className="border border-gray-500 bg-white flex items-center justify-between px-2 py-1 gap-7 max-w-[200px] rounded-lg">
            <FontAwesomeIcon
              icon={faMinus}
              className="text-gray-500 font-bold text-lg cursor-pointer"
              onClick={(e) => {
                setIdEditQuantity(id);
                handleClickReduce(e);
              }}
            />
            <p>{counter}</p>
            <FontAwesomeIcon
              icon={faPlus}
              className="text-orange-600 font-bold text-lg cursor-pointer"
              onClick={(e) => {
                setIdEditQuantity(id);
                handleClickAdd(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ModalDelete = ({ onConfirm }) => {
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
              <button
                type="button"
                className="btn btn-primary text-white"
                onClick={onConfirm}
              >
                Hapus
              </button>
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
