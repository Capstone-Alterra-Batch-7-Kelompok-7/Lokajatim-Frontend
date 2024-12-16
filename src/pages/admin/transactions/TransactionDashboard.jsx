import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../../../components/CheckBox";
import { useFetch } from "../../../hooks/useFetch";
import { Loading } from "../../../components/Loading";
import { formatRupiah } from "../../../utils/rupiahFormater";
import fileEye from "../../../assets/icon/file-eye.png";
import { useState } from "react";


const TransactionDashboard = () => {
  const { data, isLoading } = useFetch("/transactions");
  const [idDetail, setIdDetail] = useState(null);
  
  return (
    <>
      <ModalDetailTransaction id={idDetail} />
      <WrapperDashboard tabActive="transaction" key={"transaction"}>
        <div className="min-h-screen bg-[#F8F4EB] px-5 py-4">
          {isLoading && <Loading />}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Transaksi</h1>
            {/* Button Add and import csv */}
            <div className="flex gap-4 items-center">
              <select className="select select-bordered w-full select-sm">
                <option disabled selected>
                  Semua Status
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered w-full select-sm">
                <option disabled selected>
                  Semua Kategori
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              {/* <input
                type="file"
                className="hidden"
                id="csv"
                ref={inputCsvRef}
                onChange={handleChangeCSV}
              />
              <Link
                to={"/dashboard/product/add"}
                className="btn btn-sm bg-[#4F3017] text-white"
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah
              </Link> */}
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto mt-5">
            <table className="table bg-white overflow-hidden">
              {/* head */}
              <thead className="">
                <tr className="border-[#D5D5D5]">
                  <th>
                    <CheckBox />
                  </th>
                  <th>ID Transaksi</th>
                  {/* <th>Nama </th> */}
                  {/* <th>Kategori</th> */}
                  <th>Total Harga</th>
                  <th>Pembeli</th>
                  <th>status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => (
                    <tr className="border-b border-[#D5D5D5]" key={index}>
                      <th>
                        <CheckBox />
                      </th>
                      <td>{item.transaction_id}</td>
                      {/* <td>{item.user.name}</td> */}
                      {/* <td>{"item.user.name"}</td> */}
                      {/* <td>{item.category.name}</td> */}
                      <td>{formatRupiah(item.total_price)}</td>
                      <td>{item.user.name}</td>
                      <td>{item.status}</td>
                      <td>
                        <div className="flex">
                          <button
                            className="btn btn-sm text-black bg-[#FAFBFD] rounded-lg border-[#D5D5D5]"
                            onClick={() => {
                              setIdDetail(item.id);
                              document
                                .getElementById("detail-transaction")
                                .showModal();
                            } }
                            type="button"
                          >
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                            <img src={fileEye} alt="icon" width={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end  items-center mt-5 ">
            <div className="join gap-2 border-none bg-white ">
              <button className="join-item text-gray-600 border-none bg-white hover:bg-primary hover:text-white md:btn btn-xs">
                1
              </button>
              <button className="join-item text-gray-600 border-none bg-white hover:bg-primary hover:text-white md:btn btn-xs">
                2
              </button>
              <button className="join-item text-gray-600 border-none bg-white hover:bg-primary hover:text-white md:btn btn-xs">
                3
              </button>
              <button
                className="join-item text-gray-600 border-none bg-white md:btn btn-xs"
                disabled={true}
              >
                ...
              </button>
              <button className="join-item text-gray-600 border-none bg-white hover:bg-primary hover:text-white md:btn btn-xs">
                12
              </button>

              <button className="join-item text-gray-600 border-none bg-white hover:bg-primary hover:text-white md:btn btn-xs">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </WrapperDashboard>
    </>
  );
};

const ModalDetailTransaction = ({id}) => {
  const {data, isLoading} = useFetch(`/transactions/${id}`);
  console.log(data)
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="detail-transaction" className="modal">
        {isLoading && <Loading />}
        {data && (
          <div className="modal-box  w-7/12 max-w-5xl">
            <h3 className="text-lg">{data.transaction_id}</h3>
            <h4 className="pb-4 border-b border-black">Detail</h4>
            <h4 className="font-semibold my-4">Produk</h4>
            <div className="flex items-start border-b border-black pb-5">
              <img src="https://placehold.co/400" alt="" width={55} />
              <div className="flex justify-around w-full">
                <div className="">
                  <p className="font-semibold">Rambak Pisang 80 gr</p>
                  <p>Makanan</p>
                </div>
                <p>1 Pcs</p>
                <p>Rp. 16.000</p>
              </div>
            </div>
            <div className="flex items-start border-b border-black pb-5 pt-7">
              <div className="flex justify-between w-[70%] ">
                <div className="font-semibold">
                  <p className="">Nama Pembeli</p>
                  <p className="">Jasa Kirim</p>
                  <p>Status</p>
                </div>
                <div className="">
                  <p className="">November 15 2024</p>
                  <p className="">Jnt</p>
                  <p>Selesai</p>
                </div>
              </div>
            </div>
            <div className="flex items-start border-b border-black pb-5 pt-7">
              <div className="flex justify-between w-[70%] ">
                <div className="font-semibold">
                  <p className="">Nama Pembeli</p>
                  <p className="">Telphone</p>
                  <p>Alamat</p>
                </div>
                <div className="">
                  <p className="">{data.user.name}</p>
                  <p className="">{data.user.phone_number}</p>
                  <p>{data.user.address}</p>
                </div>
              </div>
            </div>
            <h4 className="font-semibold my-4">Infonformasi Status</h4>
            <div className=" border-b border-black pb-5">
              <TimeLineTransaction />
            </div>
            <h4 className="font-semibold my-4">Informasi Pembayaran</h4>
            <div className="flex items-start">
              <div className="flex justify-between w-[70%] ">
                <div className="font-semibold">
                  <p className="">Subtotal</p>
                  <p className="">Biaya Pengiriman</p>
                  <p>Total</p>
                </div>
                <div className="">
                  <p className="">Rp. 16.000</p>
                  <p className="">Rp. 16.000</p>
                  <p>{formatRupiah(data.total_price)}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

const TimeLineTransaction = () => {
    return (
      <ul className="timeline text-gray-700 timeline-snap-icon timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <div className="w-8 h-8 p-1 border rounded-full flex justify-center items-center border-[#18CD36] ">
              <FontAwesomeIcon icon={faCircle} className="text-[#18CD36]" />
            </div>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Pesanan Diproses</div>
          </div>
          <hr className="bg-[#18CD36]" />
        </li>
        <li>
          <hr className="bg-[#18CD36]" />
          <div className="timeline-middle">
            <div className="w-8 h-8 p-1 border rounded-full flex justify-center items-center border-[#18CD36] ">
              <FontAwesomeIcon icon={faCircle} className="text-[#18CD36]" />
            </div>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Dalam Perjalanan</div>
          </div>
          <hr className="bg-[#18CD36]" />
        </li>
        <li>
          <hr className="bg-[#18CD36]" />
          <div className="timeline-middle">
            <div className="w-8 h-8 p-1 border rounded-full flex justify-center items-center border-[#18CD36] ">
              <FontAwesomeIcon icon={faCircle} className="text-[#18CD36]" />
            </div>
          </div>
          <div className="timeline-end ">
            <div className="text-lg font-black">Pesanan Selesai</div>
          </div>
        </li>
      </ul>
    );
}

export default TransactionDashboard;
