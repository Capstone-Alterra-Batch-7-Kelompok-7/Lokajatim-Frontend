import React, { useEffect, useState } from 'react';
import promoImage from '../../assets/promo-image.png';
import promoImage2 from '../../assets/promo-image2.png';
import promoImage3 from '../../assets/promo-image3.png';
import Footer from "../../components/FooterHome";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import DraggableFloatingIcon from '../../components/BotIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Loading } from '../../components/Loading';

// Import icon satu per satu

import makananIcon from '../../assets/icon/makanan.png';
import tasIcon from '../../assets/icon/tas.png';
import pakaianIcon from '../../assets/icon/pakaian.png';
import kerajinanIcon from '../../assets/icon/kerajinan.png';
import peralatanIcon from '../../assets/icon/peralatan.png';
import lainLainIcon from '../../assets/icon/lainlain.png';
import pameranIcon from '../../assets/icon/pameran.png';
import workshopIcon from '../../assets/icon/workshop.png';
import kesenianIcon from '../../assets/icon/kesenian.png';
import konserIcon from '../../assets/icon/konser.png';
import festivalIcon from '../../assets/icon/festival.png';
import umumIcon from '../../assets/icon/umum.png';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const promoImages = [promoImage, promoImage2, promoImage3]; // Array gambar promo
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
    }, 2000); // Timer untuk mengganti gambar setiap 1 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, [promoImages.length]);
  const categories = [
    { name: 'Makanan', icon: makananIcon },
    { name: 'Tas', icon: tasIcon },
    { name: 'Pakaian', icon: pakaianIcon },
    { name: 'Kerajinan', icon: kerajinanIcon },
    { name: 'Peralatan', icon: peralatanIcon },
    { name: 'Lain-Lain', icon: lainLainIcon },
    { name: 'Pameran', icon: pameranIcon },
    { name: 'Workshop', icon: workshopIcon },
    { name: 'Kesenian', icon: kesenianIcon },
    { name: 'Konser', icon: konserIcon },
    { name: 'Festival', icon: festivalIcon },
    { name: 'Umum', icon: umumIcon },
  ];
  const [articles, setArticles] = useState([]);
  const [likes, setLikes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch articles
  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/articles`);
      setArticles(response.data.data || []); // Akses data dari 'data'
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]); // Set array kosong jika terjadi error
      setIsLoading(false);
    }
  };

  // Fetch likes
  const fetchLikes = async (articleId) => {
    try {
      // Ambil jumlah likes langsung dari API
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/likes/articles/${articleId}/count`);
      const { count } = response.data.data; // Ambil jumlah likes langsung

      // Perbarui state likes
      setLikes((prevLikes) => ({
        ...prevLikes,
        [articleId]: count, // Gunakan langsung nilai count dari API
      }));
    } catch (error) {
      console.error(`Error fetching likes count for article ${articleId}:`, error);
    }
  };




  // UseEffect to fetch data
  useEffect(() => {
    fetchArticles();
  }, []);



  // Fetch likes for each article when articles are loaded
  useEffect(() => {
    articles.forEach(article => fetchLikes(article.id)); // Fetch likes untuk setiap artikel
  }, [articles]);

  const [activeTab, setActiveTab] = useState("products");
  const [data, setData] = useState([]);

  const [activeTabCard, setActiveTabCard] = useState('products');
  const [dataProducts, setDataProducts] = useState([]);
  const [dataEvents, setDataEvents] = useState([]);





  const fetchData = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(endpoint);
      console.log("Data diterima:", response.data); // Periksa data yang diterima
      setData(response.data.data || []); // Set data sesuai struktur yang diterima dari API
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Set array kosong jika terjadi error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const endpoint =
      activeTab === "products"
        ? `${import.meta.env.VITE_BASE_URL}/products`
        : `${import.meta.env.VITE_BASE_URL}/events`;
    fetchData(endpoint);
  }, [activeTab]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);

  };
  const fetchDataCards = async (endpoint) => {
    try {
      setLoading(true);
      const response = await fetch(endpoint);
      const result = await response.json();

      await new Promise(resolve => setTimeout(resolve, 1000));

      if (result.status && result.data) {
        if (activeTabCard === "products") {
          setDataProducts(result.data);
        } else if (activeTabCard === "events") {
          setDataEvents(result.data);
        }
      } else {
        console.error("No data found in the API response");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const endpoint =
      activeTabCard === "products"
        ? `${import.meta.env.VITE_BASE_URL}/products/best`
        : `${import.meta.env.VITE_BASE_URL}/events/best`;

    fetchDataCards(endpoint);
  }, [activeTabCard]);



  return (
    <div className="bg-white min-h-screen">
      <NavbarSearchBrown />
      {/* Promo Section */}
      <section className="bg-white text-white py-6">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <div className="card w-full lg:w-[90%] bg-orange-600 shadow-xl">

            <figure>
              <img
                src={promoImages[currentImageIndex]} // Gambar berdasarkan indeks saat ini
                alt={`Promo Image ${currentImageIndex + 1}`}
                className="rounded-md w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-screen-xl mx-auto py-8 px-4">
        <h2 className="text-left text-2xl font-bold mb-6 pl-8">Kategori Produk / Event</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 mb-3"
              />
              <span className="font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </section>
      <br />
      <DraggableFloatingIcon></DraggableFloatingIcon>
      <br />

      {/* Popular Section */}
      {/* Popular Section */}
      <section
        className="text-white py-5"
        style={{ background: "linear-gradient(180deg, #B56E34 30%, #8B5428 90%)" }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Yuk Cek Apa Yang Populer Di Lokajatim!
            </h2>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              className={`btn btn-sm ${activeTab === "products"
                ? "bg-white text-[#8B5428] hover:bg-[#EB6B1480] hover:text-white  rounded-full"
                : "bg-[#EB6B1480] text-white hover:bg-white hover:text-[#8B5428]  rounded-full"
                }`}
              onClick={() => setActiveTab("products")}
            >
              Produk
            </button>
            <button
              className={`btn btn-sm ${activeTab === "events"
                ? "bg-white text-[#8B5428] hover:bg-[#EB6B1480] hover:text-white  rounded-full"
                : "bg-[#EB6B1480] text-white hover:bg-white hover:text-[#8B5428] rounded-full"
                }`}
              onClick={() => setActiveTab("events")}
            >
              Event
            </button>
          </div>

          {/* Grid Card untuk Produk atau Event */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {loading ? (
              <p className="text-center col-span-full">Loading...</p>
            ) : data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="card bg-white shadow-lg">
                  <figure>
                    <img
                      src={
                        item.url_photo ||  // Cek gambar event terlebih dahulu
                        (item.photos?.[0]?.url_photo || "") || // Cek gambar produk
                        "https://via.placeholder.com/300x200"  // Gambar fallback jika tidak ada
                      }
                      alt={item.name || "Item"}
                      className="h-36 object-cover w-full"
                    />
                  </figure>
                  <div className="card-body p-4 text-black">
                    <Link to={`/${activeTab === "products" ? "product" : "event"}/${item.id}`} className="card-title text-sm font-semibold">
                      {item.name || "Judul Tidak Tersedia"}
                    </Link>
                    {activeTab === "products" ? (
                      <>
                        <p className="font-bold text-black-500 mt-2">
                          {item.price ? formatRupiah(item.price) : "Gratis"}
                        </p>
                        <p className="text-sm text-gray-600">
                          Stok: {item.stock || "Tidak Tersedia"}
                        </p>
                      </>
                    ) : activeTab === "events" ? (
                      <>
                        <p className="text-sm text-gray-600">
                          Lokasi: {item.location || "Lokasi Tidak Tersedia"}
                        </p>
                        <p className="text-sm text-gray-600">
                          Tanggal:{" "}
                          {new Date(item.date_time).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <p className="font-bold text-black-500 mt-2">
                          {item.price ? formatRupiah(item.price) : "Gratis"}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">Data tidak tersedia.</p>
            )}
          </div>


          {/* Tombol Jelajahi Semua */}
          <div className="flex justify-center mt-8">
            <Link to={activeTab === "products" ? "/products" : "/events"} className="btn btn-sm btn-outline bg-[#EB6B1480] text-white hover:bg-white hover:text-[#8B5428] rounded-md">
              Jelajahi Semua
            </Link>

          </div>
        </div>
      </section>






      {/* Recommendation Cards Section */}
      {/* Recommendation Cards Section */}
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Harga Terbaik Untuk Semua</h2>

          {/* Tabs untuk memilih produk dan event */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTabCard('products')}
              className={`btn btn-sm btn-outline rounded-md ${activeTabCard === 'products' ? 'text-[#ED7D31]' : 'text-black'}`}
            >
              Produk
            </button>

            <button
              onClick={() => setActiveTabCard('events')}
              className={`btn btn-sm btn-outline rounded-md ${activeTabCard === 'events' ? 'text-[#ED7D31]' : 'text-black'}`}
            >
              Event
            </button>
          </div>

          {/* Mengatur tampilan grid untuk produk dan event */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {loading ? (
              <p className="text-center col-span-full">Loading...</p>
            ) : (
              <>
                {/* Menampilkan Produk */}
                {activeTabCard === "products" && dataProducts.length > 0 &&
                  dataProducts.map((item) => (
                    <div key={item.id} className="card bg-white shadow-lg">
                      <figure>
                        <img
                          src={
                            item.photos?.[0] ||
                            "https://via.placeholder.com/300x200"
                          }
                          alt={item.name}
                          className="h-36 object-cover w-full"
                        />
                      </figure>
                      <div className="card-body p-4 text-black">
                        <Link
                          to={`/product/${item.id}`}
                          className="card-title text-sm font-semibold"
                        >
                          {item.name || "Produk Tidak Tersedia"}
                        </Link>
                        <p className="font-bold mt-2">
                          {item.price ? `Rp ${item.price}` : "Gratis"}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Stok: {item.stock || "Tidak Tersedia"}
                        </p>
                      </div>
                    </div>
                  ))}

                {/* Menampilkan Event */}
                {activeTabCard === "events" && dataEvents.length > 0 &&
                  dataEvents.map((event) => (
                    <div key={event.id} className="card bg-white shadow-lg">
                      <figure>
                        <img
                          src={event.url_photo || "https://via.placeholder.com/300x200"}
                          alt={event.name}
                          className="h-36 object-cover w-full"
                        />
                      </figure>
                      <div className="card-body p-4 text-black">
                        <p>{event.name}</p>
                        <p>Lokasi: {event.location}</p>
                        <p>Tanggal: {new Date(event.date_time)?.toLocaleDateString("id-ID")}</p>
                        <p>Harga: {event.price ? `Rp ${event.price}` : "Gratis"}</p>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <Link to={activeTabCard === "products" ? "/products" : "/events"} className="btn btn-sm btn-outline text-black border-black hover:text-[#ED7D31] hover:border-[#ED7D31] hover:bg-[#ED7D311A] rounded-md">
              Jelajahi Semua
            </Link>
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />
      {/* Artikel Terkini */}
      <section className="max-w-screen-xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Artikel Terkini</h2>
        <div className="flex space-x-2 mb-6">
          <button className="btn btn-sm btn-outline text-black hover:text-[#ED7D31] border-black hover:border-[#ED7D31] hover:bg-[#ED7D311A]">
            Budaya
          </button>
          <button className="btn btn-sm btn-outline text-black hover:text-[#ED7D31] border-black hover:border-[#ED7D31] hover:bg-[#ED7D311A]">
            Kerajinan
          </button>
          <button className="btn btn-sm btn-outline text-black hover:text-[#ED7D31] border-black hover:border-[#ED7D31] hover:bg-[#ED7D311A]">
            Kuliner
          </button>
        </div>

        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <Link
                to={`/article/${article.id}`}
                key={article.id}
                className="card shadow-md bg-white rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={article.photo || "fallback-image.jpg"}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col h-full">
                  {/* Title */}
                  <h2 className="font-bold text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  {/* Content */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
                    {article.content}
                  </p>
                  <hr className="border-t border-gray-300 mb-4" />
                  {/* Footer */}
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div>
                      <span>{new Date(article.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faThumbsUpRegular} className="text-black text-sm" />
                      <span>{likes[article.id] || 0}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link to={"/article"} className="btn btn-sm btn-outline text-black border-black hover:text-[#ED7D31] hover:border-[#ED7D31] hover:bg-[#ED7D311A] rounded-md">
            Jelajahi Semua
          </Link>
        </div>
      </section>




      <Footer />
    </div>
  );
};

export default HomePage;
