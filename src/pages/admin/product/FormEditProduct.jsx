import { Link, useParams } from "react-router-dom";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import upload from "../../../assets/icon/upload-file.png";
import { instance } from "../../../config/config";
import { useFetch } from "../../../hooks/useFetch";
import { Loading } from "../../../components/Loading";

const FormEditProduct = () => {
  const [isFormImage, setIsFormImage] = useState(false);
  const [files, setFiles] = useState([]);
  const { id } = useParams();

  const { data, isLoading, setIsLoading } = useFetch(`/products/${id}`);
  useEffect(() => {
    if (data) {
      setInputData({
        name: data.name,
        description: data.description,
        category_id: data.category_id,
        price: data.price,
        stock: data.stock,
        photos: data.photos,
      });
    }
  }, [data]);
  const [inputData, setInputData] = useState({
    name: "",
    description: "",
    category_id: "",
    price: "",
    stock: "",
    photos: [],
  });

  console.log(inputData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Konversi file menjadi Base64
      if (files.length > 0) {
        const base64Photos = await Promise.all(
          files.map((file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result); // Base64 string
              reader.onerror = (error) => reject(error);
              reader.readAsDataURL(file); // Konversi file ke Base64
            });
          })
        );
        const updatedData = {
          ...inputData,
          price: parseInt(inputData.price),
          stock: parseInt(inputData.stock),
          category_id: parseInt(inputData.category_id),
          photos: base64Photos, // Ganti dengan array Base64
        };
        await instance.put(`/products/${id}`, updatedData);

        alert("Produk berhasil diupdate");
        window.location.href = "/dashboard/product";
        setIsLoading(false);
      }

      const updatedData = {
        ...inputData,
        price: parseInt(inputData.price),
        stock: parseInt(inputData.stock),
        category_id: parseInt(inputData.category_id),
        photos: inputData.photos,
      };
      await instance.put(`/products/${id}`, updatedData);

      alert("Produk berhasil diupdate");
      window.location.href = "/dashboard/product";
      setIsLoading(false);
      // Tambahkan foto Base64 ke inputData.photos

      // Kirim data ke backend
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };
  return (
    <>
      <WrapperDashboard tabActive="product" key={"product"}>
        {isLoading && <Loading />}
        <div className="min-h-screen bg-[#F8F4EB] px-5 py-4 w-full">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to={"/dashboard/product"}>Daftar Produk</Link>
              </li>
              <li className="font-medium">Tambah Produk</li>
            </ul>
          </div>
          <form action="" onSubmit={handleSubmit}>
            {isFormImage ? (
              <ImageInput
                files={files}
                setFiles={setFiles}
                filesDefault={inputData.photos}
              />
            ) : (
              <InfoProduct
                handleChange={handleChangeInput}
                inputData={inputData}
              />
            )}

            <div className="flex justify-end my-5">
              <button
                type="button"
                className="btn btn-sm bg-white hover:bg-primary text-primary border-[#BFBFBF] rounded-r-none"
                onClick={() => {
                  isFormImage ? setIsFormImage(false) : "";
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                type="button"
                className={`btn btn-sm  hover:bg-primary text-primary border-[#BFBFBF] rounded-none ${
                  !isFormImage
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => {
                  isFormImage ? setIsFormImage(false) : "";
                }}
              >
                1
              </button>
              <button
                type="button"
                className={`btn btn-sm  hover:bg-primary text-primary border-[#BFBFBF] rounded-none ${
                  isFormImage
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => {
                  !isFormImage ? setIsFormImage(true) : "";
                }}
              >
                2
              </button>
              <div
                className="btn btn-sm bg-white hover:bg-primary text-primary border-[#BFBFBF] rounded-l-none "
                onClick={() => {
                  !isFormImage ? setIsFormImage(true) : "";
                }}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </form>
        </div>
      </WrapperDashboard>
    </>
  );
};

const ImageInput = ({ files, setFiles, filesDefault }) => {
  const [onDrag, setOnDrag] = useState(false);
  const imageRef = useRef(null);

  const handleOnDragOver = (e) => {
    e.preventDefault();
    // console.log(e);
    setOnDrag(true);
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);
    // setFiles(e.dataTransfer.files);
    const selectedFiles = Array.from(e.dataTransfer.files); // Ubah FileList ke array
    setFiles(selectedFiles); //
    setOnDrag(false);
  };
  const handleOnDragLeave = (e) => {
    e.preventDefault();
    setOnDrag(false);
  };

  const handleChangeInputFile = (e) => {
    const selectedFiles = Array.from(e.target.files); // Ubah FileList ke array
    setFiles(selectedFiles); //
  };

  console.log(files)
  return (
    <>
      <div className="flex flex-col w-[90%] mx-auto bg-white rounded-2xl mt-5 px-4 py-5">
        <h2 className="text-lg font-semibold">Unggah Foto Produk</h2>
        <p className="">
          Tambahkan dokumen Anda di sini, dan Anda dapat mengunggah hingga 5
          file.
        </p>
        <div
          className={`w-[70%] mx-auto border-2 border-dashed border-secondary mt-5 flex flex-col items-center justify-center py-[2rem] rounded-2xl ${
            onDrag ? "bg-blue-500" : "bg-transparent"
          }`}
          onDragLeave={handleOnDragLeave}
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
        >
          <img src={upload} alt="icon upload" width={36} />
          <input
            type="file"
            className="hidden"
            ref={imageRef}
            multiple
            onChange={handleChangeInputFile}
          />
          <p className="">
            Seret file Anda ke sini atau{" "}
            <button
              type="button"
              className="font-bold text-secondary"
              onClick={() => imageRef.current.click()}
            >
              Telusuri
            </button>
          </p>
        </div>
        {files.length > 0
          ? files.map((file, index) => (
              <div
                className="flex items-center border border-gray-300 gap-3 p-4 mt-5 rounded-2xl w-full"
                key={index}
              >
                <img src={URL.createObjectURL(file)} width={36} />
                <div className="">
                  <p className="font-medium">testasd</p>
                  <p className="text-sm">{(file.size / 1024).toFixed(2)}Kb</p>
                </div>
              </div>
            ))
          : filesDefault.length > 0
          ? filesDefault.map((file, index) => (
              <div
                className="flex items-center border border-gray-300 gap-3 p-4 mt-5 rounded-2xl w-full"
                key={index}
              >
                <img src={file} width={36} />
                <div className="">
                  <p className="font-medium">testasd</p>
                  <p className="text-sm">500Kb</p>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className={`flex justify-center items-center mt-5`}>
        <button
          className="btn btn-primary text-white  md:w-[50%] w-full"
          type="submit"
        >
          Simpan
        </button>
      </div>
    </>
  );
};

const InfoProduct = ({ handleChange, inputData }) => {
  const { data } = useFetch("/categories");
  return (
    <>
      <label htmlFor="name" className="label">
        Nama Produk
      </label>
      <input
        type="text"
        id="name"
        className="input input-bordered w-full bg-[#F7F7F7] border-[#DEE2E6]"
        placeholder="Masukan Nama Produk"
        onChange={handleChange}
        defaultValue={inputData?.name}
      />
      <label htmlFor="description" className="label">
        Deskripsi Produk
      </label>
      <textarea
        id="description"
        className="textarea textarea-bordered w-full border-[#DEE2E6] bg-[#F7F7F7] min-h-[400px]"
        onChange={handleChange}
        defaultValue={inputData?.description}
      ></textarea>
      <div className="flex justify-between gap-2">
        <div className="w-full">
          <label htmlFor="price" className="label">
            Harga Produk
          </label>
          <input
            type="number"
            id="price"
            className="input input-bordered w-full bg-[#F7F7F7] border-[#DEE2E6]"
            placeholder="Rp. 0"
            onChange={handleChange}
            defaultValue={inputData?.price}
          />
        </div>
        <div className="w-full">
          <label htmlFor="category_id" className="label">
            Kategori
          </label>
          <select
            id="category_id"
            className="select  select-bordered w-full bg-[#F7F7F7] border-[#DEE2E6]"
            onChange={handleChange}
            value={inputData?.category_id}
          >
            <option disabled selected>
              Kategori
            </option>
            {data?.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="stock" className="label">
          Stok Produk
        </label>
        <input
          type="number"
          id="stock"
          className="input input-bordered w-full bg-[#F7F7F7] border-[#DEE2E6]"
          placeholder="0"
          defaultValue={inputData?.stock}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default FormEditProduct;
