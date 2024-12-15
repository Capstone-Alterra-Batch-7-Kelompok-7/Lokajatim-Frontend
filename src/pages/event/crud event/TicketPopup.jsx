import React, { useState } from "react";

const TicketPopup = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    ticketName: "",
    ticketAmount: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose(); 
    setFormData({ ticketName: "", ticketAmount: "", price: "" });
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="ticketName"
              className="block text-[#7D787B] text-sm font-bold mb-2"
            >
              Nama Tiket *
            </label>
            <input
              type="text"
              id="ticketName"
              name="ticketName"
              value={formData.ticketName}
              onChange={handleChange}
              placeholder="Beri nama tiket sesuai jenisnya, seperti Reguler, VIP, atau Early Bird."
              className="w-full text-[#ADB5BD] px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ticketAmount"
              className="block text-[#7D787B] text-sm font-bold mb-2"
            >
              Jumlah Tiket *
            </label>
            <input
              type="number"
              id="ticketAmount"
              name="ticketAmount"
              value={formData.ticketAmount}
              onChange={handleChange}
              placeholder="Contoh: 50, 100, 200."
              className="w-full text-[#ADB5BD] px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-[#7D787B] text-sm font-bold mb-2"
            >
              Harga
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Gunakan angka tanpa simbol mata uang."
              className="w-full text-[#ADB5BD] px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4F3017] text-white py-2 px-4 rounded-lg hover:bg-[#4F3017]"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketPopup;
