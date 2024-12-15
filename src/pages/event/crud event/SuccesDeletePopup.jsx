import React, { useEffect } from 'react';

const SuccessPopup = ({ message, subMessage = '', onClose, duration = 3000 }) => {
  useEffect(() => {
    // Timer untuk menutup popup secara otomatis
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    // Bersihkan timer ketika komponen di-unmount
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[543px] h-[300px] flex flex-col items-center justify-center relative">
        {/* Ikon Checklist */}
        <div className="w-16 h-16 mb-4">
          <svg
            className="text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zM10.97 15.47a.75.75 0 001.06 0l5.25-5.25a.75.75 0 10-1.06-1.06l-4.72 4.72-2.47-2.47a.75.75 0 10-1.06 1.06l3 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Pesan */}
        <h2 className="text-xl font-bold mb-2">{message}</h2>
        {subMessage && <p className="text-gray-500 text-center">{subMessage}</p>}
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
