import React from "react";

const EventDeleteErrorPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Jangan render jika pop-up tidak aktif
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
            Terjadi masalah saat menghapus event. Coba lagi atau periksa koneksi internetmu.
          </p>
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  };
  

export default EventDeleteErrorPopup;
