import React, { useState } from "react";
import axios from "axios";
import LocationModal from "./LocationModal";
import DateTimePickerModal from "./DateTimePickerModal";
import CategoryModal from "./CategoryModal";
import TicketPopup from "./TicketPopup";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddEventPage() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [eventStartDate, setEventStartDate] = useState("");
  const [time, settime] = useState("");
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [eventDescription, setEventDescription] = useState("")

  const handleAddTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

 
  const [categoryDetails, setCategoryDetails] = useState({
    category: 0 ,
    namaEvent: "",
    capacity: "",
  });
  const [locationDetails, setLocationDetails] = useState({
    locationName: "Univ. Airlangga",
    address: "",
    url: "",
  });
  const [activeTab, setActiveTab] = useState("description"); // State for tab management

  const [uploadedFile, setUploadedFile] = useState(""); // State for uploaded file

  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);
  const openDateTimePicker = () => setIsDateTimePickerOpen(true);
  const closeDateTimePicker = () => setIsDateTimePickerOpen(false);
  const openCategoryModal = () => setIsCategoryModalOpen(true);
  const closeCategoryModal = () => setIsCategoryModalOpen(false);
  const openTicketPopup = () => setIsTicketPopupOpen(true);
  const closeTicketPopup = () => setIsTicketPopupOpen(false);

  const handleSaveDateTime = (startDate, time) => {
    setEventStartDate(`${startDate}/${time}`);
    // settime(endDate);
    console.log(time)
  };

   
  const handleSaveLocation = (details) => {

    setLocationDetails(details);
  };

  const handleSaveCategory = (details) => {
    setCategoryDetails(details);
   
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert file to Base64 string
        const base64String = reader.result;
        setUploadedFile(base64String); // Store the Base64 string
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };
  
  // locationDetails
  // categoryDetails
  // uploadedFile
  
  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async () => {
    console.log(categoryDetails.category)
    // Periksa apakah token ada
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You are not authorized. Please log in first.");
        return;
    }


  
    // Data event
    const data = {
      name:  categoryDetails.namaEvent,
      description: eventDescription,
      category_id:  parseInt(categoryDetails.category,10) || 100, // Use category selected
      date_time: `${eventStartDate}/${time}`, // Date and Time input
      location: `${locationDetails.locationName}, ${locationDetails.address}`, // Location input
      capacity: parseInt(categoryDetails.capacity,10) || 100, // Default capacity or from state
      url_photo: uploadedFile,
      rating: 30000,
      price: 40000,
    };
    try {
        // Kirim permintaan POST ke endpoint
        const response = await axios.post("https://lokajatim.org/events", data, {
            headers: {
                Authorization: `Bearer ${token}`, // Tambahkan token JWT di header
                "Content-Type": "application/json", // Tentukan format data
            },
        });
      
        // Periksa apakah respons memiliki status sukses
        if (response.status >= 200 && response.status < 300) {
            alert("Event successfully submitted!");
        } else {
            console.error("Unexpected response:", response);
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
      console.log(error)
        // Tangani kesalahan, termasuk kesalahan jaringan
        // if (error.response) {
        //     console.error("Error response data:", error.response.data);
        //     alert(`Failed to submit event: ${error.response.data.message || "Unknown error"}`);
        // } else if (error.request) {
        //     console.error("No response received:", error.request);
        //     alert("No response from the server. Please check your internet connection.");
        // } else {
        //     console.error("Error setting up request:", error.message);
        //     alert("An error occurred while submitting the event.");
        // }
    }
};

      return (
        <WrapperDashboard>
          <div className="min-h-screen flex flex-col bg-[#F8F4EB]">
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
                  <div className="mt-4 text-gray-600 w-[782px] h-[324px]">
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
                    onClick={openCategoryModal}
                    className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-left text-sm text-[#B2B2B2] font-normal focus:border-orange-500 focus:ring-orange-500"
                  >
                    {categoryDetails.namaEvent || "Pilih Kategori"}
                  </button>
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-[#B2B2B2] font-normal mb-1">
                    Jumlah Kapasitas
                  </label>
                  <input
                    type="number"
                    value={categoryDetails.capacity}
                    onChange={(e) =>
                      setCategoryDetails({
                        ...categoryDetails,
                        capacity: parseInt(e.target.value, 10) || 0,
                      })
                    }
                    className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
                    placeholder="Jumlah Kapasitas"
                  />
                </div>
    
                {/* Event Info */}
                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center space-x-3">
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
                    
                    {/* Tanggal */}
                    <div className="flex items-center space-x-2 mt-1">
                      <i className="bi bi-calendar3 text-gray-600"></i>
                      <button
                        type="button"
                        onClick={openDateTimePicker} 
                        className="text-[#BBBBBB] font-normal"
                      >
                        {eventStartDate || "Pilih Tanggal"}
                      </button>
                    </div>
                    
                    {/* Waktu */}
                    <div className="flex items-center space-x-2 mt-2">
                      <i className="bi bi-clock text-gray-600"></i>
                      <span className="text-[#BBBBBB] font-normal">
                        {time || "Pilih Waktu"}
                      </span>
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
              <div className="flex justify-around space-x-4 mt-6 border-b border-gray-200">
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
                  <textarea
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    rows="4"
                    className="block w-full h-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
                  />
                </div>
              )}
    
              {activeTab === "ticket" && (
                <div className="flex justify-center h-screen bg-white">
                  <div className="relative w-[779px] h-[191px] bg-[#BBBBBB] rounded-[16px] p-4 mt-6">
                    <div className="absolute top-1/2 left-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-r-full"></div>
                    <div className="absolute top-1/2 right-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-l-full"></div>
                    <h2 className="text-xl font-bold mb-2">Buat Tiket</h2>
                    <div className="border-t border-dashed border-black mb-2"></div>
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
                    <button
                      onClick={openTicketPopup}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-transparent border-2 border-black rounded-full flex items-center justify-center text-2xl text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
    
              <div>
                {tickets.length > 0 &&
                  tickets.map((ticket, index) => (
                    <div
                      key={index}
                      className="relative w-[779px] h-[191px] bg-[#E9B763] rounded-[16px] mt-6"
                    >
                      <div className="absolute top-1/2 left-0 w-full border-t-[2px] border-dashed border-[#7D787B]"></div>
                      <div className="absolute top-1/2 left-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-r-full"></div>
                      <div className="absolute top-1/2 right-[-14px] transform -translate-y-1/2 w-[30px] h-[60px] bg-white rounded-l-full"></div>
                      <div className="flex flex-col justify-between h-full p-6">
                        <div className="mb-4">
                          <h3 className="text-[20px] font-bold">{ticket.ticketName}</h3>
                          <p className="text-[14px] text-[#7D787B] mt-1">
                            Tersisa {ticket.ticketAmount} kursi
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-[24px] font-bold">
                            Rp. {Number(ticket.price).toLocaleString()}
                          </div>
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
               <div className="flex justify-center min-h-screen">
                <button
                  className="w-[565px] h-[52px] bg-[#4F3017] text-white rounded-[6px] font-semibold hover:bg-[#3C2411] self-end"
                  onClick={handleSubmit}
                >
                  Submit Event
                </button>
              </div>
              </div>
    
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
        </WrapperDashboard>
      );
    }
    

export default AddEventPage;
