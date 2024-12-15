import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteEventPopup from "./DeleteEventPopup";
import EditEventPopup from "./EditEventPopup";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import EventDeleteErrorPopup from "./EventDeleteErrorPopup";
import axios from "axios";


const EventTable = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);  {/* Tambahkan state ini untuk popup error */}

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://lokajatim.org/events");

        const result = await response.json();
        console.log(result)
        if (result.status && result.data && Array.isArray(result.data)) {
          setEvents(result.data);
        } else {
          console.error("Struktur data API tidak sesuai:", result);
          setEvents([]);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    navigate(`/event-table/${event.id}`)
    // console.log(event)
    // setSelectedEvent(event);
    // setIsPopupOpen(true);
  };

  const handleConfirmEdit = () => {
    console.log(`Konfirmasi Edit Event dengan ID: ${selectedEvent.id}`);
    setIsPopupOpen(false);
  };

  const handleDelete = (event) => {
    setEventToDelete(event);
    setDeletePopupOpen(true);
  };

  const token = localStorage.getItem("token");
    if (!token) {
        alert("You are not authorized. Please log in first.");
        return;
    }


  const handleConfirmDelete = async () => {

    if (eventToDelete?.id) {
      try {
        const response = await axios.delete(`https://lokajatim.org/events/${eventToDelete.id}`,
         {
          headers: {
            Authorization: `Bearer ${token}`, // JWT Token in header
            "Content-Type": "application/json", // Content type header
          },
            },
        );

      
        if (response.data.data.message === "Event deleted") {
          setEvents((prevEvents) => prevEvents.filter((e) => e.id !== eventToDelete.id));
          setErrorPopupOpen(false); // Tutup popup error jika penghapusan berhasil
          navigate("/event-table")
        } else {
          console.error("Gagal menghapus event.");
          setErrorPopupOpen(true);  // Tampilkan popup error jika penghapusan gagal
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        setErrorPopupOpen(true);  // Tampilkan popup error jika terjadi kesalahan
      } finally {
        setDeletePopupOpen(false);
        setEventToDelete(null);
      }
    }
  };
  

  return (
    <div className="flex bg-[#F5F5F5] min-h-screen">
      {/* sidebar */}
      <div className="bg-white shadow-lg p-6">
        <WrapperDashboard />
        {/*konten*/}
        <div className="flex-1 w-[1074px] h-[942px]">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Daftar Event</h1>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Import CSV</button>
              <button
                onClick={() => navigate("/add-event")}
                className="bg-[#8B4513] text-white px-4 py-2 rounded-lg"
              >
                Tambah
              </button>
            </div>
          </div>

          <table className="w-full border-collapse rounded-lg shadow-lg"
          style={{
            top: '206px',
            left: '45px',
          }}>
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-3 border-b-2 border-gray-300">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-300">Nama Event</th>
                <th className="px-4 py-3 border-b-2 border-gray-300">Lokasi</th>
                <th className="px-4 py-3 border-b-2 border-gray-300">Tanggal</th>
                <th className="px-4 py-3 border-b-2 border-gray-300">Kapasitas</th>
                <th className="px-4 py-3 border-b-2 border-gray-300">Harga</th>
                <th className="px-4 py-3 border-b-2 border-gray-300 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : events.length > 0 ? (
                events.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b border-gray-200">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">{event.name}</td>
                    <td className="px-4 py-3 border-b border-gray-200">{event.location}</td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      {new Date(event.date_time).toLocaleDateString("id-ID")} <br />
                      {new Date(event.date_time).toLocaleTimeString("id-ID")}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">{event.capacity}</td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      {event.price === 0 ? "Gratis" : `Rp ${event.price.toLocaleString("id-ID")}`}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(event)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Tidak ada data event.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EditEventPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleConfirmEdit}
      />

      <DeleteEventPopup
        isOpen={isDeletePopupOpen}
        onClose={() => setDeletePopupOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <EventDeleteErrorPopup  
        isOpen={isErrorPopupOpen}
        onClose={() => setErrorPopupOpen(false)}
      />

    </div>
  );
};

export default EventTable;
