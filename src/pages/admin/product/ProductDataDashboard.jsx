import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import { faFileLines, faPlus } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../../../components/CheckBox";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useFetch } from "../../../hooks/useFetch";
import { Loading } from "../../../components/Loading";
import { Link } from "react-router-dom";
import { instance } from "../../../config/config";

const ProductDataDashboard = () => {
  const { data, isLoading, setIsLoading } = useFetch("/products");
  console.log(data);
  const handleDeleteProduct = async (id) => {
    setIsLoading(true);
    try {
      await instance.delete(`/products/${id}`);
      alert("Produk berhasil dihapus");
      window.location.reload();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  return (
    <>
      <WrapperDashboard tabActive="product" key={"product"}>
        <div className="min-h-screen bg-[#F8F4EB] px-5 py-4">
          {isLoading && <Loading />}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Data Produk</h1>
            {/* Button Add and import csv */}
            <div className="flex gap-4 items-center">
              <button className="btn btn-sm bg-[#5BA53B] text-white">
                <FontAwesomeIcon icon={faFileLines} />
                Impor CSV
              </button>
              <Link
                to={"/dashboard/product/add"}
                className="btn btn-sm bg-[#4F3017] text-white"
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah
              </Link>
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
                  <th>Gambar</th>
                  <th>Nama Produk</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Stok</th>
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
                      <td>
                        <img
                          src={item.photos[0]?.url_photo}
                          // src="https://placehold.co/400"
                          width={80}
                          alt=""
                          className="rounded-lg min-h-[80px]"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.category.name}</td>
                      <td>Rp {item.price}</td>
                      <td>{item.stock}</td>
                      <td>
                        <div className="flex">
                          <Link to={`/dashboard/product/edit/${item.id}`} className="btn btn-sm text-black bg-[#FAFBFD] rounded-r-none border-[#D5D5D5]">
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(item.id)}
                            className="btn btn-sm text-red-500 bg-[#FAFBFD] rounded-l-none border-[#D5D5D5]"
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
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

export default ProductDataDashboard;
