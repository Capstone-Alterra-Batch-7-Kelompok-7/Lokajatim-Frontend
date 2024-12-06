import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import prize from "../../assets/reward.png";
import filterIcon from "../../assets/icon/filter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faStar } from "@fortawesome/free-solid-svg-icons";
const ProductList = () => {
  return (
    <NavbarSearchBrown>
      <div className="md:px-[2rem] p-4 bg-[#FAFBFE] relative">
        {/* BreadCrumbs */}
        <div className="flex justify-between items-center bg-white">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-medium">Product Lokal</li>
            </ul>
          </div>
          <p className="text-sm font-medium">Menampilkan 40 Hasil</p>
        </div>

        {/* Prize  */}
        <div className="px-4 py-2 shadow-md flex items-center justify-between rounded-2xl w-full my-4">
          <div className="flex items-center gap-4 w-full">
            <img src={prize} alt="prize" width={54} />
            <div className="">
              <p className="font-medium">Udah punya akun belum ?</p>
              <p className="text-sm">
                Buat akun atau log in yuk. Ada diskon dan benefit biar kamu
                makin cuan!{" "}
              </p>
            </div>
          </div>
          <Link
            to={"/login"}
            className="btn bg-[#ED7D311A] text-[#ED7D31] border-[#ED7D31]"
          >
            Masuk
          </Link>
        </div>

        <h1 className="text-2xl font-medium">Produk Lokal</h1>

        {/* Button Category */}
        <div className="flex gap-3">
          <button className="btn btn-sm bg-[#ED7D311A] text-[#ED7D31] border-[#ED7D31] rounded-2xl">
            Makanan
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Tas
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Pakaian
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Kerajinan
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Lain-lain
          </button>
        </div>

        <div className="flex justify-center gap-4 md:flex-row flex-col mt-4">

          {/* Filter Section Start */}
          <div className="md:w-[20%] w-full">
            <div className="md:w-52 w-full flex-col">
              <div className="flex items-center justify-center bg-primary rounded-t-2xl py-2">
                <img src={filterIcon} alt="flter" width={24} />
                <h2 className=" text-white text-center">Filter</h2>
              </div>
              <div className="bg-[#F7F7F7] text-[#404040] px-5 pt-2 pb-5 rounded-b-2xl shadow-md">
                <h2 className="font-medium my-2">Urutkan</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <CheckBox label={"Terbaru"} />
                  <CheckBox label={"Popular"} />
                  <CheckBox label={"Terlaris"} />
                </div>
                <h2 className="font-medium mb-2 mt-4">Harga</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <CheckBox label={"Di bawah Rp100.000"} />
                  <CheckBox label={"Rp100.000-Rp500.000"} />
                  <CheckBox label={"Di atas Rp500.000"} />
                </div>
                <h2 className="font-medium mb-2 mt-4">Rating</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <CheckBox label={"5"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"4"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"3"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"2"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"1"} />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#EBB467] text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Filter Section End */}

          {/* Card Product section */}
          <div className="md:w-[80%] w-full">
            <div className="flex justify-between gap-4 flex-wrap my-4">
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci edisi terbatas"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              <CardProduct
                img={""}
                price={"Rp 16.000"}
                title={"Gantungan Kunci"}
                id={2}
              />
              {/* {data &&
                data
                  .slice(0, 3)
                  .map((item) => (
                    <CardArticle
                      id={item.id}
                      key={item.id}
                      img={item.photo}
                      title={item.title}
                      update={item.updated_at}
                    />
                  ))} */}
            </div>
          </div>

          {/* Pagination */}
        </div>
        <div className="flex justify-center items-center ">
          <div className="join gap-2 border-none ">
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              1
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              2
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              3
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              4
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              5
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              6
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              7
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              8
            </button>
            <button className="join-item bg-white text-gray-600 border-gray-300 btn-secondary hover:text-white btn">
              {">"}
            </button>
          </div>
        </div>

        {/* Scroll Top */}
        <div className="w-full flex justify-end sticky bottom-4 cursor-pointer hover:bg-gray-300" onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon
          icon={faArrowUp}
          className="bg-white rounded-full text-4xl px-2 py-1 shadow-md -my-12"
        />
        </div>
      </div>
      <Footer />
    </NavbarSearchBrown>
  );
};

const CheckBox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-xs bg-white rounded-none"
        />
        <span className="label-text text-primary text-sm">{label}</span>
      </label>
    </div>
  );
};

export default ProductList;
