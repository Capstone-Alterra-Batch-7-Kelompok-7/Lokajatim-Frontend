import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import {
//   faHeart,
//   faMessage,
//   faShareSquare,
// } from "@fortawesome/free-regular-svg-icons";
import CheckBox from "../../components/CheckBox";
import filterIcon from "../../assets/icon/filter.png";
import profile from "../../assets/icon/profile.jpg";
import food1 from "../../assets/dumy/image1.jpg";
import food2 from "../../assets/dumy/image2.png";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import CardProduct from "../../components/CardProduct";

const DetailProduct = () => {
  return (
    <>
      <NavbarSearchBrown>
        <div className="w-full px-4 md:px-[2rem] py-4 bg-[#FAFBFE]">
          <div className="w-full flex md:flex-row flex-col justify-between items-start">
            <div className="md:w-[70%] w-full flex flex-wrap gap-4">
              {/* Image Product */}
              <div className="flex flex-col gap-2">
                <img
                  src="https://placehold.co/400"
                  width={500}
                  alt="product"
                  className="rounded-md md:minw-[200px] md:max-w-[300px] min-w-full h-[342px] object-cover"
                />
                <div className="md:flex hidden gap-1 justify-around items-center w-full">
                  <img
                    src="https://placehold.co/400"
                    width={62}
                    alt="product"
                    className="rounded-md"
                  />
                  <img
                    src="https://placehold.co/400"
                    width={62}
                    alt="product"
                    className="rounded-md"
                  />
                  <img
                    src="https://placehold.co/400"
                    width={62}
                    alt="product"
                    className="rounded-md"
                  />
                  <img
                    src="https://placehold.co/400"
                    width={62}
                    alt="product"
                    className="rounded-md"
                  />
                </div>
              </div>
              {/* Info Product */}
              <div className="max-w-[502px]">
                <h1 className="text-xl font-medium text-primary">
                  Rambak Pisang 80 gr HONEAST SIDOARJO
                </h1>
                <div className="flex items-center gap-1 text-sm">
                  <p>Terjual 1rb+</p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#EBB467] text-xs"
                    />
                    <p>4.8 {"(238 rating)"}</p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold pt-4 pb-2">Rp. 18.000</h2>

                {/* Discount */}
                {/* <div className="flex items-center gap-2 pb-1">
                  <p className="bg-[#FA1E2C4D] py-1 px-2 rounded-xl text-red-500 font-bold">
                    38%
                  </p>
                  <p className="text-gray-500 line-through ">Rp.25.000</p>
                </div> */}

                <div className="flex w-full border-b gap-2 mt-4">
                  <p className="text-orange-600 border-b border-orange-600 font-semibold cursor-pointer">
                    Detail
                  </p>
                  <p className="hover:text-orange-600 hover:border-b border-orange-600 hover:font-semibold cursor-pointer">
                    Profil UKM
                  </p>
                </div>

                {/* Description Product */}
                <div className="w-full text-sm pt-2">
                  <p>Rasa: Pisang</p>
                  <p>Min pesana: 1 buah</p>
                  <p>Kategori: Makanan</p>
                  <p className=" max-w-full pt-2">
                    Rambak Pisang merupakan camilan sehat yang berasal dari buah
                    pisang. Camilan ini digoreng menggunakan minyak kelapa
                    sehingga aman dikonsumsi oleh anak - anak. Tanpa tambahan
                    gula atau pemanis lainnya. Cocok untuk orang yang lagi
                    mengurangi gula (diet). Camilan ini sudah mendapatkan
                    sertifikasi halal, merek dan PIRT.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] md:mt-0 mt-5 w-full md:max-w-[342px] bg-gray-50 py-2 px-4 rounded-2xl border border-gray-300">
              <h2 className="font-medium mb-3">Atur Jumlah</h2>
              <div className="flex items-center gap-4">
                <div className="border border-gray-500 bg-white flex items-center justify-between px-4 py-1 gap-2 max-w-[130px] rounded-lg">
                  <p className="text-gray-500 font-bold text-lg">-</p>
                  <p>1</p>
                  <p className="text-orange-600 font-bold">+</p>
                </div>
                <p>
                  Stock: <span className="font-medium">192</span>
                </p>
              </div>
              {/* <p className="text-xs font-light pt-1">Max. pembelian 12 pcs</p> */}
              <div className="flex items-end justify-between mt-2">
                <p className="">SubTotal</p>
                <div className="text-right">
                  {/* <p className="line-through text-sm">Rp.25.00</p> */}
                  <p className="font-bold">Rp.18.000</p>
                </div>
              </div>
              {/* Button Action buy or cart */}
              <div className="flex flex-col gap-2">
                <button className="btn min-h-9 h-9 bg-[#ED7D31] border-none hover:bg-orange-900 text-white w-full">
                  Keranjang
                </button>
                <div className="border border-[#ED7D31] rounded-lg hover:border-none">
                  <button className="btn min-h-9 h-9 bg-white border-2  border-none hover:bg-gray-200 text-[#ED7D31] hover:text-black w-full">
                    Beli Langsung
                  </button>
                </div>
              </div>

              {/* <div className="flex items-center gap-2 justify-between text-lg mt-4 font-medium">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faMessage} />
                  <p>Chat</p>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} />
                  <p>Whislist</p>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShareSquare} />
                  <p>Share</p>
                </div>
              </div> */}
            </div>
          </div>
          <h2 className="py-4 text-lg font-bold">Ulasan Pembeli</h2>

          {/* Rating Section */}
          <div className="flex items-start md:flex-row flex-col md:justify-between gap-4 bg-white p-6 border border-gray-300 rounded-2xl w-full md:max-w-[70%]">
            <div className="">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400 text-2xl"
                />
                <p className="text-gray-200 text-lg">
                  <span className="text-2xl font-bold text-black">4.8</span>/5.0
                </p>
              </div>
              <p>98% Pembeli merasa puas</p>
              <p className="text-gray-400 font-light text-sm">
                238 rating • 5 ulasan
              </p>
            </div>
            <div className="">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <div className="flex items-center gap-1 text-sm">
                  <p>5</p>
                  <progress
                    className="progress w-56 progress-secondary bg-gray-200"
                    value="100"
                    max="100"
                  ></progress>
                  <p className="">{"(228)"}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <div className="flex items-center gap-1 text-sm">
                  <p>4</p>
                  <progress
                    className="progress w-56 progress-secondary bg-gray-200"
                    value="10"
                    max="100"
                  ></progress>
                  <p className="">{"(10)"}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <div className="flex items-center gap-1 text-sm">
                  <p>3</p>
                  <progress
                    className="progress w-56 progress-secondary bg-gray-200"
                    value="0"
                    max="100"
                  ></progress>
                  <p className="">{"(0)"}</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <div className="flex items-center gap-1 text-sm">
                  <p>2</p>
                  <progress
                    className="progress w-56 progress-secondary bg-gray-200"
                    value="0"
                    max="100"
                  ></progress>
                  <p className="">{"(0)"}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <div className="flex items-center gap-1 text-sm">
                  <p>3</p>
                  <progress
                    className="progress w-56 progress-secondary bg-gray-200"
                    value="0"
                    max="100"
                  ></progress>
                  <p className="">{"(0)"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section and Review Section */}
          <div className="flex md:flex-row flex-col md:items-start items-center justify-center md:justify-between gap-4 md:max-w-[70%] w-full py-5">
            <div className="md:w-[30%]  ">
              <h3 className="font-bold text-black uppercase pb-4">
                Ulasan Teratas
              </h3>

              {/* Filter Section */}
              <div className="md:w-52 w-full ">
                <div className="flex items-center justify-center bg-secondary rounded-t-2xl text-white">
                  <img src={filterIcon} alt="profile" width={24} className="" />
                  <p>Filter</p>
                </div>
                <div className="w-full bg-[#F7F7F7] rounded-b-2xl shadow-md px-5 py-4">
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
            <div className="md:w-[70%] w-full">
              <h3 className="font-bold text-black uppercase pb-1">
                Ulasan Pilihan
              </h3>
              <p className="text-sm">Menampilkan 3 dari 5 ulasan</p>

              {/* Review Section Start */}
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <p className="pl-1">Hari Ini</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={profile}
                    alt="photo profile"
                    width={32}
                    className="rounded-full"
                  />
                  <p className="font-medium">Khoiru Rizki</p>
                </div>
                <p className="-mt-2 -mb-1">
                  Rambak pisangnya benar-benar enak! Teksturnya renyah, tapi
                  tetap lembut saat digigit. Saya paling suka rasa gurihnya yang
                  pas, tidak terlalu asin dan tidak terlalu manis. Cocok banget
                  buat teman minum teh di sore hari.{" "}
                </p>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex gap-1">
                    <img src={food1} alt="" width={64} className="rounded-md" />
                    <img src={food2} alt="" width={64} className="rounded-md" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faThumbsUp} className=" " />
                    <p>Membantu</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <p className="pl-1">Hari Ini</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={profile}
                    alt="photo profile"
                    width={32}
                    className="rounded-full"
                  />
                  <p className="font-medium">Khoiru Rizki</p>
                </div>
                <p className="-mt-2 -mb-1">
                  Rambak pisangnya benar-benar enak! Teksturnya renyah, tapi
                  tetap lembut saat digigit. Saya paling suka rasa gurihnya yang
                  pas, tidak terlalu asin dan tidak terlalu manis. Cocok banget
                  buat teman minum teh di sore hari.{" "}
                </p>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex gap-1">
                    <img src={food1} alt="" width={64} className="rounded-md" />
                    <img src={food2} alt="" width={64} className="rounded-md" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faThumbsUp} className=" " />
                    <p>Membantu</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <p className="pl-1">Hari Ini</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={profile}
                    alt="photo profile"
                    width={32}
                    className="rounded-full"
                  />
                  <p className="font-medium">Khoiru Rizki</p>
                </div>
                <p className="-mt-2 -mb-1">
                  Rambak pisangnya benar-benar enak! Teksturnya renyah, tapi
                  tetap lembut saat digigit. Saya paling suka rasa gurihnya yang
                  pas, tidak terlalu asin dan tidak terlalu manis. Cocok banget
                  buat teman minum teh di sore hari.{" "}
                </p>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex gap-1">
                    <img src={food1} alt="" width={64} className="rounded-md" />
                    <img src={food2} alt="" width={64} className="rounded-md" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faThumbsUp} className=" " />
                    <p>Membantu</p>
                  </div>
                </div>
              </div>
              {/* Review Section End */}
            </div>
          </div>

          {/* Other Product */}
          <div className="w-full py-4">
            <h2 className="text-lg font-bold pb-2">Lainya di Toko ini</h2>
            <div className="flex flex-wrap gap-4 justify-around">
              <CardProduct
                price={"Rp.34.000"}
                id={1}
                title={"Kopi"}
                img={food1}
              />
              <CardProduct
                price={"Rp.21.000"}
                id={1}
                title={"Kopi"}
                img={food2}
              />
              <CardProduct
                price={"Rp.34.000"}
                id={1}
                title={"Kopi"}
                img={food1}
              />
              <CardProduct
                price={"Rp.21.000"}
                id={1}
                title={"Kopi"}
                img={food2}
              />
              <CardProduct
                price={"Rp.34.000"}
                id={1}
                title={"Kopi"}
                img={food1}
              />
              <CardProduct
                price={"Rp.21.000"}
                id={1}
                title={"Kopi"}
                img={food2}
              />
              <CardProduct
                price={"Rp.34.000"}
                id={1}
                title={"Kopi"}
                img={food1}
              />
              <CardProduct
                price={"Rp.21.000"}
                id={1}
                title={"Kopi"}
                img={food2}
              />
              <CardProduct
                price={"Rp.34.000"}
                id={1}
                title={"Kopi"}
                img={food1}
              />
              <CardProduct
                price={"Rp.21.000"}
                id={1}
                title={"Kopi"}
                img={food2}
              />
            </div>
          </div>

          <Footer />
        </div>
      </NavbarSearchBrown>
    </>
  );
};

export default DetailProduct;
