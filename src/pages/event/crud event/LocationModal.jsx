import React, { useState } from "react";

function LocationModal({ isOpen, onClose, onSave }) {
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");

  const handleSave = () => {
    // if (!locationName || !address) {
    //   alert("Nama tempat dan alamat wajib diisi!");
    //   return;
    // }

    onSave({ locationName, address, url }); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Lokasi Event</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Tempat
          </label>
          <input
            type="text"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="Contoh: 'Mal Pemuda Surabaya' atau 'Lapangan Merdeka'."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alamat
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Contoh: 'Jl. Gubernur Suryo No 15, Surabaya, Jawa Timur'."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        { <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lokasi di Google Maps
          </label>
          <div className="w-full h-64 rounded-md overflow-hidden border border-gray-300 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.424946347198!2d-122.0842496852827!3d37.42199977982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba2d6c0b1df1%3A0x696d26f5f418aaaf!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616598927486!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div> }

        { <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            URL (Opsional)
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Masukkan URL jika ada"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div> }

          {/* Tombol Simpan */}
          <div className="flex justify-end space-x-4">
        <button
          className="w-[622px] h-[40px] bg-[#4F3017] text-white rounded-[6px] font-semibold hover:bg-[#3C2411] transition duration-200"
          onClick={handleSave}
        >
          Simpan
        </button>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
