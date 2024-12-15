import React, { useState } from "react";
import LocationModal from "./LocationModal";
import DateTimePickerModal from "./DateTimePickerModal";
import CategoryModal from "./CategoryModal";
import TicketPopup from "./TicketPopup";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddEventPage() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [tickets, setTickets] = useState([]);

  const handleAddTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

  const [categoryDetails, setCategoryDetails] = useState({
    category: "",
    eventType: "Public",
    capacity: "",
  });
  const [locationDetails, setLocationDetails] = useState({
    locationName: "Univ. Airlangga",
    address: "",
    url: "",
  });
  const [activeTab, setActiveTab] = useState("description"); // State for tab management

  const [uploadedFile, setUploadedFile] = useState(null); // State for uploaded file

  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);
  const openDateTimePicker = () => setIsDateTimePickerOpen(true);
  const closeDateTimePicker = () => setIsDateTimePickerOpen(false);
  const openCategoryModal = () => setIsCategoryModalOpen(true);
  const closeCategoryModal = () => setIsCategoryModalOpen(false);
  const openTicketPopup = () => setIsTicketPopupOpen(true);
  const closeTicketPopup = () => setIsTicketPopupOpen(false);

  const handleSaveDateTime = (startDate, endDate) => {
    setEventStartDate(startDate);
    setEventEndDate(endDate);
  };

  const handleSaveLocation = (details) => {
    setLocationDetails(details);
  };

  const handleSaveCategory = (details) => {
    setCategoryDetails(details);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  return (
    <div className="w-[1119px] h-[1694px] top-[162px] left-[20px] gap-[16px] absolute bg-gray-50 p-8 rounded-[var(--radixxl)]">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Breadcrumb */}
        <h2 className="text-gray-600 mb-6 text-sm">
          Daftar Produk &gt; <span className="font-semibold">Tambah Event</span>
        </h2>

        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
          <p className="text-gray-500 text-sm font-medium">
            Unggah Gambar/Poster/Banner
          </p>
          {uploadedFile ? (
            <div className="mt-4 text-gray-600">
              <p>File: {uploadedFile.name}</p>
              <button
                type="button"
                onClick={handleFileRemove}
                className="text-red-500 text-sm mt-2 underline"
              >
                Hapus File
              </button>
            </div>
          ) : (
            <div className="mt-4 text-gray-400">
              <p>
                Seret file Anda ke sini atau{" "}
                <label
                  htmlFor="fileInput"
                  className="text-orange-500 font-semibold cursor-pointer"
                >
                  Telusuri
                </label>
              </p>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          )}
        </div>

        {/* Form Input */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#B2B2B2] font-normal mb-1">
              Nama Event*
            </label>
            <button
              type="button"
              onClick={openCategoryModal} // Open Category Modal on click
              className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-left text-sm text-[#B2B2B2] font-normal focus:border-orange-500 focus:ring-orange-500"
            >
              {categoryDetails.category || "Pilih Kategori"}
            </button>
          </div>

          {/* Event Info */}
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              {/* Logo Bundar */}
              <img
                src="logoloka.png"
                alt="Penyelenggara Logo"
                className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
              />
              <div>
                <p className="text-[#6D6D6D]-600">Diselenggarakan oleh</p>
                <span className="text-[#BBBBBB]">Lokajatim</span>
              </div>
            </div>
            <div>
              <p className="text-[#6D6D6D]-600">Tanggal & Waktu</p>
              <div className="flex items-center space-x-2 mt-1">
                <i className="bi bi-calendar3 text-gray-600"></i>
                <button
                  type="button"
                  onClick={openDateTimePicker}
                  className="text-[#BBBBBB] font-normal"
                >
                  {eventStartDate && eventEndDate
                    ? `${eventStartDate} - ${eventEndDate}`
                    : "15 Desember 2024"}
                </button>
              </div>
            </div>
            <div>
              <p className="text-[#6D6D6D]-600">Lokasi</p>
              <div className="flex items-center space-x-2 mt-1">
                <i className="bi bi-geo-alt text-gray-600"></i>
                <button
                  type="button"
                  onClick={openLocationModal}
                  className="text-[#BBBBBB] font-normal"
                >
                  {locationDetails.locationName}
                </button>
              </div>
              <p className="text-gray-700 mt-2">{locationDetails.address}</p>
            </div>
          </div>
        </form>

        {/* Tabs */}
        <div className="flex space-x-4 mt-6 border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm ${
              activeTab === "description"
                ? "border-b-2 border-black text-black-500 font-medium"
                : "text-[#667085] font-normal"
            }`}
            onClick={() => setActiveTab("description")}
          >
            DESKRIPSI
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeTab === "ticket"
                ? "border-b-2 border-black text-black-500 font-medium"
                : "text-[#667085] font-normal"
            }`}
            onClick={() => setActiveTab("ticket")}
          >
            TIKET
          </button>
        </div>

        {/* Content */}
        {activeTab === "description" && (
          <div className="w-[1,072px] h-[289px] p-[24px] gap-[24px] rounded-[6px] border border-[1px] bg-[#DEE2E6] p-4">

            <p className="text-sm text-[#161616] mb-4">
              Workshop ini bertujuan untuk memperkenalkan seni membatik kepada
              masyarakat, baik pemula maupun yang sudah berpengalaman. Selain
              belajar teknik membatik, peserta juga akan menikmati berbagai
              pengalaman menarik seperti booth pameran kain batik, instalasi
              seni batik, serta sesi kolaborasi bersama pengrajin lokal.
            </p>
            <ul className="text-sm text-[#161616] list-disc pl-5">
              <li>
                Pemilik tiket Regular+ 2 Day Pass dapat menukarkan e-ticket pada
                pukul 09:00 - 17:00 WIB.
              </li>
              <li>
                Pemilik tiket Regular+ 2 Day Pass akan mendapatkan 2 wristband
                yang berlaku selama acara.
              </li>
              <li>Kehilangan wristband di luar tanggung jawab penyelenggara.</li>
              <li>
                Bonus: Mendapatkan satu lembar kain batik hasil karya sendiri di
                akhir workshop.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "ticket" && (
          <div className="flex justify-center h-screen bg-white">
            <div className="relative w-[779px] h-[191px] bg-[#BBBBBB] rounded-[16px] p-4 mt-6">
              {/* Setengah Lingkaran Kiri */}
              <div className="absolute top-1/2 left-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-r-full"></div>

              {/* Setengah Lingkaran Kanan */}
              <div className="absolute top-1/2 right-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-l-full"></div>
              {/* Judul */}
              <h2 className="text-xl font-bold mb-2">Buat Tiket</h2>
              {/* Garis putus-putus */}
              <div className="border-t border-dashed border-black mb-2"></div>
              {/* Teks deskripsi */}
              <ul className="text-sm text-black space-y-1">
                <li>
                  Tentukan jenis tiket untuk event Anda, seperti tiket reguler,
                  VIP, atau early bird.
                </li>
                <li>Contoh: "Reguler", "VIP", "Early Bird", "Free Entry".</li>
                <li>
                  Pastikan setiap jenis tiket memiliki deskripsi dan harga yang
                  sesuai jika berlaku.
                </li>
              </ul>
              {/* Tombol tambah */}
              <button
                onClick={openTicketPopup}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-transparent border-2 border-black rounded-full flex items-center justify-center text-2xl text-black"
              >
                +
              </button>
            </div>
          </div>
        )}

 {/* Menampilkan daftar tiket yang telah diinput */}
<div>
  {tickets.length > 0 &&
    tickets.map((ticket, index) => (
      <div
        key={index}
        className="relative w-[779px] h-[191px] bg-[#E9B763] rounded-[16px] mt-6"
      >
        {/* Garis Putus-Putus */}
        <div className="absolute top-1/2 left-0 w-full border-t-[2px] border-dashed border-[#7D787B]"></div>

        {/* Setengah Lingkaran Kiri */}
        <div className="absolute top-1/2 left-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-r-full"></div>

        {/* Setengah Lingkaran Kanan */}
        <div className="absolute top-1/2 right-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-l-full"></div>

        {/* Konten Tiket */}
        <div className="flex flex-col justify-between h-full p-6">
          {/* Bagian Atas */}
          <div className="mb-4">
            <h3 className="text-[20px] font-bold">{ticket.ticketName}</h3>
            <p className="text-[14px] text-[#7D787B] mt-1">
              Tersisa {ticket.ticketAmount} kursi
            </p>
          </div>

          {/* Bagian Harga dan Tombol */}
          <div className="flex justify-between items-center">
            {/* Harga */}
            <div className="text-[24px] font-bold">
              Rp. {Number(ticket.price).toLocaleString()}
            </div>

            {/* Tombol Tambah & Kurang */}
            <div className="flex items-center space-x-4">
              <button className="border-[2px] border-black text-[20px] text-black w-8 h-8 flex items-center justify-center rounded-full">
                -
              </button>
              <span className="text-[16px] font-bold">0</span>
              <button className="border-[2px] border-black text-[20px] text-black w-8 h-8 flex items-center justify-center rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

        {/* Modals */}
        <LocationModal
          isOpen={isLocationModalOpen}
          onClose={closeLocationModal}
          onSave={handleSaveLocation}
        />
        <DateTimePickerModal
          isOpen={isDateTimePickerOpen}
          onClose={closeDateTimePicker}
          onSave={handleSaveDateTime}
        />
        <CategoryModal
          isOpen={isCategoryModalOpen}
          onClose={closeCategoryModal}
          onSave={handleSaveCategory}
        />
        <TicketPopup
          isOpen={isTicketPopupOpen}
          onClose={closeTicketPopup}
          onSave={handleAddTicket}
        />
      </div>
    </div>
  );
}

export default AddEventPage;
