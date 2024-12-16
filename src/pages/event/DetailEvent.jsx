import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom"; // Pastikan ini diimpor
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import Footer from "../../components/Footer";
import Ticket from "../../assets/icon/ticket.png";
import TicketIcon from "../../assets/icon/icontiket.png";

const DetailEvent = () => {
    const [activeTab, setActiveTab] = useState("deskripsi");
    const [ticketCount, setTicketCount] = useState(0);
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id: eventId } = useParams(); // Ambil ID dari URL params


    // Fetch data event dari API
    const fetchEventData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("Token is missing. Please log in.");

            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/events/${eventId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (result.status) {
                const event = result.data;

                // Tambahkan properti tiket reguler ke objek event
                const basePrice = event.price || 0;
                event.ticket = { type: "regular", price: basePrice };

                setEventData(event);
            } else {
                throw new Error(result.message || "Failed to fetch data");
            }
        } catch (error) {
            setError(error.message);
            console.error("Error fetching data:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEventData();
    }, []);

    const calculateTotalPrice = () => {
        if (!eventData) return 0;
        return ticketCount * eventData.ticket.price;
    };

    const handleIncrement = () => {
        setTicketCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setTicketCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const saveToLocalStorage = () => {
        const ticketData = {
            eventId,
            ticket: {
                type: eventData.ticket.type,
                count: ticketCount,
                price: eventData.ticket.price,
            },
            totalPrice: calculateTotalPrice(),
            eventName: eventData.name,
        };
        // Simpan ke localStorage
        localStorage.setItem("purchasedTickets", JSON.stringify(ticketData));
        alert("Tiket berhasil dibeli dan disimpan!");
        window.location.href = "/events/buyticket";

    };

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-600">{error}</p>;

    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarSearchBrown />
            <div className="text-gray-500 text-sm ml-8 mt-4">
                <span className="cursor-pointer hover:text-yellow-700">Beranda</span>{" "}
                &nbsp;&gt;&nbsp;
                <span className="font-semibold text-black">{eventData.name}</span>
            </div>

            <div className="max-w-7xl mx-auto mt-6 flex gap-8">
                {/* Gambar Event */}
                <div className="max-w-screen-lg mx-auto mb-6">
                    <img
                        src={eventData.url_photo}
                        alt="Event"
                        className="w-full h-96 object-cover"
                    />
                    <div className="w-full mt-4">
                        <div className="flex border-b mb-4">
                            <button
                                className={`w-1/2 py-3 text-center ${
                                    activeTab === "deskripsi"
                                        ? "border-b-2 border-yellow-500 font-bold text-yellow-700"
                                        : "text-gray-600"
                                }`}
                                onClick={() => setActiveTab("deskripsi")}
                            >
                                DESKRIPSI
                            </button>
                            <button
                                className={`w-1/2 py-3 text-center ${
                                    activeTab === "tiket"
                                        ? "border-b-2 border-yellow-500 font-bold text-yellow-700"
                                        : "text-gray-600"
                                }`}
                                onClick={() => setActiveTab("tiket")}
                            >
                                TIKET
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            {activeTab === "deskripsi" && (
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {eventData.description}
                                    </p>
                                </div>
                            )}
                            {activeTab === "tiket" && (
                                <div className="relative rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={Ticket}
                                        alt="Ticket"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-between p-4 text-black z-10">
                                        <div>
                                            <h4 className="font-bold text-lg capitalize">
                                                {eventData.ticket.type}
                                            </h4>
                                            <p className="text-lg font-semibold mt-0">
                                                Rp {eventData.ticket.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end gap-4">
                                            <button
                                                className="p-2 rounded-full border-2 border-black text-black"
                                                onClick={handleDecrement}
                                            >
                                                <AiOutlineMinus size={10} />
                                            </button>
                                            <span className="text-lg">{ticketCount}</span>
                                            <button
                                                className="p-2 rounded-full border-2 border-black text-black"
                                                onClick={handleIncrement}
                                            >
                                                <AiOutlinePlus size={10} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Detail Event */}
                <div className="w-1/4 space-y-3">
                    <div className="bg-white rounded-lg shadow-md p-3 border border-gray-200">
                        {/* Nama Event */}
                        <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
                            {eventData.name}
                        </h2>

                        {/* Tanggal */}
                        <div className="flex items-center gap-2 mb-3">
                            <FaCalendarAlt className="text-orange-600" />
                            <p className="text-gray-600 text-sm">
                                {new Date(eventData.date_time).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Waktu */}
                        <div className="flex items-center gap-2 mb-3">
                            <FaClock className="text-orange-600" />
                            <p className="text-gray-600 text-sm">
                                {new Date(eventData.date_time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>

                        {/* Lokasi */}
                        <div className="flex items-center gap-2 mb-3">
                            <FaMapMarkerAlt className="text-orange-600" />
                            <p className="text-gray-600 text-sm">{eventData.location}</p>
                        </div>

                        {/* Penyelenggara */}
                        <div className="flex items-center gap-2 mb-3">
                            <FaUser className="text-orange-600" />
                            <p className="text-gray-600 text-sm">
                                Penyelenggara: <strong>{eventData.category?.name || "Tidak Ada"}</strong>
                            </p>
                        </div>
                    </div>

                    {/* Harga Tiket */}
                    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        {ticketCount > 0 ? (
                            <>
                                <div className="flex items-center gap-3 mb-2">
                                    <img src={TicketIcon} alt="icon-ticket" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {eventData.ticket.type.charAt(0).toUpperCase() +
                                                eventData.ticket.type.slice(1)}
                                        </h3>
                                        <p className="text-xs text-gray-400">{ticketCount} tiket</p>
                                    </div>
                                    <p className="ml-auto text-sm font-bold text-gray-800">
                                        Rp{(ticketCount * eventData.ticket.price).toLocaleString()}
                                    </p>
                                </div>

                                {/* Garis Pemisah */}
                                <div className="border-t border-gray-200 my-3"></div>

                                {/* Total Harga */}
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-sm font-semibold text-gray-600">Total</p>
                                    <p className="text-lg font-bold text-gray-800">
                                        Rp{calculateTotalPrice().toLocaleString()}
                                    </p>
                                </div>

                                {/* Tombol Beli */}
                                <button
                                    className="w-full py-2 bg-[#5C2908] text-white font-semibold rounded-lg hover:bg-[#4A1F06] transition-colors"
                                    onClick={saveToLocalStorage}
                                >   
                                    Beli Tiket
                                </button>
                            </>
                        ) : (
                            <p className="text-sm text-gray-600 text-center">
                                Kamu belum memilih tiket. Silakan pilih lebih dulu di tab menu <strong>TIKET</strong>.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailEvent;
