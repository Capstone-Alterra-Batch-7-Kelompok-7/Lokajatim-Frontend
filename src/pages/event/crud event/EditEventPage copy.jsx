import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";  // Import useParams hook
import LocationModal from "./LocationModal";
import DateTimePickerModal from "./DateTimePickerModal";
import CategoryModal from "./CategoryModal";
import TicketPopup from "./TicketPopup";
import "bootstrap-icons/font/bootstrap-icons.css";

function EditEventPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const [eventData, setEventData] = useState(null);  // To hold the fetched event data
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
  
  const [activeTab, setActiveTab] = useState("description");
  const [uploadedFile, setUploadedFile] = useState("");

  useEffect(() => {
    // Fetch event data when the component mounts
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://lokajatim.org/events/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const event = response.data.data;

        // Set the state with the fetched data
        setEventData(event);
        setCategoryDetails({
          category: event.category_id,
          namaEvent: event.name,
          capacity: event.capacity,
        });
        setLocationDetails({
          locationName: event.location_name,
          address: event.address,
          url: event.location_url,
        });
        setEventStartDate(event.date_time.split(' ')[0]);
        setTime(event.date_time.split(' ')[1]);
        setEventDescription(event.description);
        setUploadedFile(event.url_photo);
      } catch (error) {
        console.error("Error fetching event data", error);
      }
    };

    if (id) {
      fetchEventData();
    }
  }, [id]);  // Re-fetch when the event ID changes
  
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
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setUploadedFile(base64String); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async () => {
    console.log(categoryDetails.category);


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

        {/* Rest of the form goes here... */}

        <button
          className="w-[565px] h-[52px] bg-[#4F3017] text-white rounded-[6px] font-semibold hover:bg-[#3C2411]"
          onClick={handleSubmit}
        >
          Update Event
        </button>

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

export default EditEventPage;
