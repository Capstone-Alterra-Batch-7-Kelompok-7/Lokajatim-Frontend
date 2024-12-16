import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams hook
import LocationModal from "./LocationModal";
import DateTimePickerModal from "./DateTimePickerModal";
import CategoryModal from "./CategoryModal";
import TicketPopup from "./TicketPopup";
import "bootstrap-icons/font/bootstrap-icons.css";

function EditEventPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const [eventData, setEventData] = useState(null); // To hold the fetched event data
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [eventStartDate, setEventStartDate] = useState("");
  const [time, setTime] = useState("");
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [eventDescription, setEventDescription] = useState("");

  const [categoryDetails, setCategoryDetails] = useState({
    category: 0,
    namaEvent: "",
    capacity: "",
  });

  const token = localStorage.getItem("token");
  if (!token) {
    alert("You are not authorized. Please log in first.");
    return;
  }

  const [locationDetails, setLocationDetails] = useState({
    locationName: "Univ. Airlangga",
    address: "",
    url: "",
  });

  const [activeTab, setActiveTab] = useState("description"); // State for tab management

  const [uploadedFile, setUploadedFile] = useState(""); // State for uploaded file

  // Fetch event data based on the event ID
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://lokajatim.org/events/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const event = response.data.data;
        console.log(response.data.data)
        // Set event data to state
        setEventData(event);
        
        setCategoryDetails({
          category: event.category_id,
          namaEvent: event.name,
          capacity: event.capacity,
        });
        setLocationDetails({
          locationName: event.location,
          
         
        });
        const dateTime = event.date_time.split("/");

// Pisahkan bagian tanggal dan waktu
setEventStartDate(dateTime[0]); // Ini akan memberikan "2024-12-18"
setTime(dateTime[1]);    
  
        setEventDescription(event.description);
        setUploadedFile(event.url_photo);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    if (id) {
      fetchEventData();
    }
  }, [id]); // Re-fetch when the event ID changes

  const handleAddTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

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
    setTime(time);
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
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setUploadedFile(base64String); // Store the Base64 string
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async () => {
   

    const data = {
      name: categoryDetails.namaEvent,
      description: eventDescription,
      category_id: parseInt(categoryDetails.category, 10) || 100,
      date_time: `${eventStartDate}/${time}`,
      location: `${locationDetails.locationName}, ${locationDetails.address}`,
      capacity: parseInt(categoryDetails.capacity, 10) || 100,
      url_photo: uploadedFile,
      rating: 30000,
      price: 40000,
    };

    try {
      const response = await axios.put(`https://lokajatim.org/events/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        alert("Event successfully updated!");
      } else {
        console.error("Unexpected response:", response);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Failed to submit event. Please try again.");
    }
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1119px] h-[1694px] top-[162px] left-[20px] gap-[16px] absolute bg-gray-50 p-8 rounded-[var(--radixxl)]">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-gray-600 mb-6 text-sm">
          Daftar Produk &gt; <span className="font-semibold">Edit Event</span>
        </h2>

        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
          <p className="text-gray-500 text-sm font-medium">Unggah Gambar/Poster/Banner</p>
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
                setCategoryDetails({ ...categoryDetails, capacity: parseInt(e.target.value, 10) || 0 })
              }
              className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
              placeholder="Jumlah Kapasitas"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <img
                src={uploadedFile}
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
                  {`${eventStartDate}` || "15 Desember 2024/10:10"}
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
        </div>

        <button
          className="w-[565px] h-[52px] bg-[#4F3017] text-white rounded-[6px] font-semibold hover:bg-[#3C2411]"
          onClick={handleSubmit}
        >
          Submit Event
        </button>
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
  );
}

export default EditEventPage;
