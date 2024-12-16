import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import Footer from "../../components/Footer";

const BuyTicket = () => {
    const { id: eventId } = useParams(); // 
    // State untuk detail event
    const [eventDetails, setEventDetails] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
        imageUrl: "",
    });

    // State untuk detail tiket
    const [ticketDetails, setTicketDetails] = useState({
        name: "Regular Pass",
        price: 0,
        quantity: 0,
    });

    // State untuk data form
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
    });

    // State untuk checkbox setuju S&K
    const [isChecked, setIsChecked] = useState(false);

    // Fetch event details dari API
    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const token = localStorage.getItem("token");
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

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                const { name, date_time: dateTime, location, url_photo: imageUrl } = data.data;

                // Set event details
                setEventDetails({
                    title: name,
                    date: dateTime.split("T")[0], // Extract date from datetime
                    time: dateTime.split("T")[1], // Extract time from datetime
                    location,
                    imageUrl,
                });
            } catch (error) {
                console.error("Error fetching event details:", error.message);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    // Fetch ticket details from localStorage
    useEffect(() => {
        const storedTickets = localStorage.getItem("purchasedTickets");
        if (storedTickets) {
            const parsedTickets = JSON.parse(storedTickets);
            setTicketDetails({
                name: parsedTickets.ticket.type || "Regular Pass",
                price: parsedTickets.ticket.price || 0,
                quantity: parsedTickets.ticket.count || 0,
            });
        }
    }, []);

    // Handle input changes in form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Toggle checkbox state
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Handle payment process
    const handlePayment = async () => {
        try {
            // Retrieve user ID from localStorage
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("user_id"); // Assuming `user_id` is stored in localStorage

            if (!token || !userId) {
                throw new Error("User is not authenticated. Missing token or user_id.");
            }

            // Calculate the total price
            const totalPrice = ticketDetails.price * ticketDetails.quantity + 2000;

            // Construct the payload
            const payload = {
                event_id: eventId,
                total_price: totalPrice,
                cart_id: 1, // Default cart_id (or fetch it if dynamically generated)
                user_id: userId,
                ...formData, // Include fullName, phoneNumber, email, and address
            };

            console.log("Sending payment request with payload:", payload);

            // Send payment request
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/transactions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(`Payment failed: ${errorData?.message || response.statusText}`);
            }

            const result = await response.json();

            // Success message
            alert("Pembayaran berhasil! Kode tiket Anda: " + (result.ticket_code || "N/A"));
            console.log("Payment success:", result);
        } catch (error) {
            console.error("Error during payment:", error.message);
            alert("Pembayaran gagal. Silakan coba lagi.");
        }
    };


    return (
        <div className="bg-[#F5F5F5]">
            <NavbarSearchBrown />

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
                <p>
                    Beranda &gt; Event &gt; November &gt;{" "}
                    <span className="text-black font-medium">{eventDetails.title}</span>
                </p>
            </div>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Event Card with Ticket Info */}
                    <div className="card w-full bg-base-100 shadow-md">
                        <div className="flex items-center p-4">
                            {/* Image Section */}
                            <figure className="w-1/3">
                                <img
                                    src={eventDetails.imageUrl}
                                    alt="Event"
                                    className="w-full h-40 object-cover"
                                />
                            </figure>
                            {/* Info Section */}
                            <div className="w-2/3 pl-4">
                                <h2 className="text-2xl font-bold mb-2">{eventDetails.title}</h2>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCalendarAlt className="text-yellow-600" />
                                    <p>{eventDetails.date}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaClock className="text-yellow-600" />
                                    <p>{eventDetails.time}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaMapMarkerAlt className="text-yellow-600" />
                                    <p>{eventDetails.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Info */}
                        <div className="p-4">
                            <div className="flex justify-between mb-4">
                                <h3 className="font-bold text-lg">Jenis Tiket</h3>
                                <h3 className="font-bold text-lg">Harga</h3>
                                <h3 className="font-bold text-lg">Jumlah</h3>
                            </div>
                            <div className="border-t border-gray-200 mt-4">
                                <div className="flex justify-between text-gray-700 py-2">
                                    <p>{ticketDetails.name}</p>
                                    <p>Rp{ticketDetails.price.toLocaleString()}</p>
                                    <p>x{ticketDetails.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Pemesanan */}
                    <div className="card w-full bg-base-100 shadow-md p-4">
                        <h3 className="font-bold text-lg mb-4">Detail Pemesanan</h3>
                        <form className="space-y-4">
                            {/* Nama */}
                            <div>
                                <label className="block text-gray-700 mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full text-gray-500"
                                />
                                <p className="text-xs text-gray-400">
                                    Gunakan nama yang tertera di KTP/Paspor.
                                </p>
                            </div>

                            {/* Nomor Ponsel */}
                            <div>
                                <label className="block text-gray-700 mb-1">Nomor Ponsel</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full text-gray-500"
                                />
                                <p className="text-xs text-gray-400">Gunakan nomor aktif.</p>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full text-gray-500"
                                />
                                <p className="text-xs text-gray-400">
                                    Gunakan email berformat @gmail.
                                </p>
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block text-gray-700 mb-1">Alamat</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="textarea textarea-bordered w-full text-gray-500"
                                    rows="3"
                                />
                                <p className="text-xs text-gray-400">Sesuai domisili saat ini.</p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section - Detail Harga */}
                <div>
                    <div className="card bg-base-100 shadow-md p-4">
                        <h3 className="font-bold text-lg mb-4">Detail Harga</h3>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex justify-between">
                                <p>Total Harga</p>
                                <p>Rp{ticketDetails.price * ticketDetails.quantity}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Biaya Tambahan</p>
                                <p>Rp1.000</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Biaya Platform</p>
                                <p>Rp1.000</p>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold">
                                <p>Total Bayar</p>
                                <p>
                                    Rp
                                    {(
                                        ticketDetails.price * ticketDetails.quantity +
                                        2000
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            {isChecked ? (
                                <FaCheckSquare
                                    className="text-green-500"
                                    size={24}
                                    onClick={handleCheckboxChange}
                                />
                            ) : (
                                <FaSquare
                                    className="text-gray-500"
                                    size={24}
                                    onClick={handleCheckboxChange}
                                />
                            )}
                            <label className="text-sm text-gray-600 cursor-pointer">
                                Saya setuju dengan S&K yang berlaku di website LokaJatim
                            </label>
                        </div>
                        <button
                            className="btn bg-[#5C3B1E] hover:bg-[#4A2D15] text-white w-full mt-4"
                            disabled={!isChecked}
                            onClick={handlePayment}
                        >
                            Bayar
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BuyTicket;
