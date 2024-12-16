import React, { useState } from "react";
import axios from "axios";
import LocationModal from "./LocationModal";
import DateTimePickerModal from "./DateTimePickerModal";
import CategoryModal from "./CategoryModal";
import TicketPopup from "./TicketPopup";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddEventPage() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
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
  const [uploadedFile, setUploadedFile] = useState(null);

  // Modal toggle functions
  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);
  const openDateTimePicker = () => setIsDateTimePickerOpen(true);
  const closeDateTimePicker = () => setIsDateTimePickerOpen(false);
  const openCategoryModal = () => setIsCategoryModalOpen(true);
  const closeCategoryModal = () => setIsCategoryModalOpen(false);
  const openTicketPopup = () => setIsTicketPopupOpen(true);
  const closeTicketPopup = () => setIsTicketPopupOpen(false);

  // Save data functions
  const handleSaveDateTime = (startDate, endDate) => {
    setEventStartDate(startDate);
    setEventEndDate(endDate);
  };

  const handleSaveLocation = (details) => {
    setLocationDetails(details);
  };

  const handleSaveCategory = (details) => {
    console.log(details)
    setCategoryDetails(details);
  };

  const handleAddTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

  // File upload handlers
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Periksa apakah token ada
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authorized. Please log in first.");
      return;
    }

    // Prepare the event data from state values
    const data = {
      name: eventName,
      description: eventDescription,
      category_id: categoryDetails.category || 1, // Use category selected
      date_time: `${eventStartDate} - ${eventEndDate}`, // Date and Time input
      location: `${locationDetails.locationName}, ${locationDetails.address}`, // Location input
      capacity: categoryDetails.capacity || 100, // Default capacity or from state
      price: 50000, // You can also replace with ticket price if needed
      rating: 4.5, // You can use dynamic rating if applicable
      url_photo: uploadedFile ? URL.createObjectURL(uploadedFile) : "", // Handle photo URL (use uploadedFile or default image)
      tickets, // If you're storing ticket data, pass it here
    };

    try {
      // Send the POST request to the backend API
      const response = await axios.post("https://lokajatim.org/events", data, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the JWT token to the headers
          "Content-Type": "application/json", // Set content type to JSON
        },
      });

      // Handle response success
      if (response.status >= 200 && response.status < 300) {
        console.log("Success:", response.data);
        alert("Event successfully submitted!");
      } else {
        console.error("Unexpected response:", response);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Failed to submit event: ${error.response.data.message || "Unknown error"}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from the server. Please check your internet connection.");
      } else {
        console.error("Error setting up request:", error.message);
        alert("An error occurred while submitting the event.");
      }
    }
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
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#B2B2B2] font-normal mb-1">
              Deskripsi Event*
            </label>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              rows="4"
              className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#B2B2B2] font-normal mb-1">
              Kategori Event*
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
                  onClick={openLocationModal} // Open Location Modal on click
                  className="text-[#BBBBBB] font-normal"
                >
                  {locationDetails.locationName || "Pilih Lokasi"}
                </button>
              </div>
            </div>
            <div>
              <p className="text-[#6D6D6D]-600">Jumlah Kapasitas</p>
              <input
                type="number"
                value={categoryDetails.capacity}
                onChange={(e) => setCategoryDetails({ ...categoryDetails, capacity: e.target.value })}
                className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm text-[#B2B2B2] font-normal"
                placeholder="Jumlah Kapasitas"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-orange-500 text-white py-2 px-4 rounded-md"
            >
              Simpan Event
            </button>
          </div>
        </form>
      </div>

      {/* Modals */}
      <LocationModal isOpen={isLocationModalOpen} onClose={closeLocationModal} onSave={handleSaveLocation} />
      <DateTimePickerModal isOpen={isDateTimePickerOpen} onClose={closeDateTimePicker} onSave={handleSaveDateTime} />
      <CategoryModal isOpen={isCategoryModalOpen} onClose={closeCategoryModal} onSave={handleSaveCategory} />
      <TicketPopup isOpen={isTicketPopupOpen} onClose={closeTicketPopup} onAddTicket={handleAddTicket} />
    </div>
  );
}

export default AddEventPage;
