import React, { useState } from "react";

function CategoryModal({ isOpen, onClose, onSave }) {
  const [category, setCategory] = useState("");
  const [eventType, setEventType] = useState("Public");
  const [capacity, setCapacity] = useState("");

  const handleSave = () => {
    onSave({ category, eventType, capacity });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
         {/* Tombol Close */}
          <button
          className="absolute top-[16px] right-[16px] text-[#7D787B] text-[20px] hover:text-gray-700 z-50"
          onClick={onClose}
          >
          ✕
        </button>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Pilih Kategori</h2>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Kategori *</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Pameran",
              "Workshop",
              "Kesenian",
              "Konser",
              "Festival",
              "Umum",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={`px-4 py-2 rounded-md border text-sm ${
                  category === item
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Jenis Event</p>
          <div className="space-y-2">
            {["Public", "Private"].map((type) => (
              <label key={type} className="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="eventType"
                  value={type}
                  checked={eventType === type}
                  onChange={() => setEventType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Kapasitas Pengunjung</p>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Masukkan kapasitas"
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-700"
          />
        </div>

        <div className="flex justify-end space-x-2">
 
          <button
            type="button"
            onClick={handleSave}
            className="w-[622px] h-[40px] bg-[#4F3017] hover:bg-gray-600 text-white font-medium rounded-[6px] px-4 py-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
