import React, { useState } from 'react';

const EventEditErrorPopup = () => {
  const [isVisible, setIsVisible] = useState(true); // State untuk visibilitas pop-up

  const closePopup = () => {
    setIsVisible(false); // Fungsi untuk menutup pop-up
  };

  return (
    <div className="relative">
      {isVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          {/* Kontainer Pop-up */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-[543px] h-[300px] text-center">
            {/* Ikon X (Error) */}
            <div className="flex justify-center mb-4">
              <svg
                className="w-16 h-16 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {/* Teks Informasi */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Oops, Event Gagal Diedit!
            </h2>
            <p className="text-gray-600">
              Terjadi masalah saat mengedit event. Coba lagi atau periksa koneksi internetmu.
            </p>
            {/* Tombol Tutup */}
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default EventEditErrorPopup;
