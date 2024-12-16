import React from "react";

const DeleteEventPopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Jangan render jika pop-up tidak aktif

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[623px] p-6 space-y-6">
        {/* Header */}
        <h3 className="text-lg font-bold text-gray-800">Hapus Event Ini?</h3>

        {/* Deskripsi */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Apakah kamu yakin ingin menghapus event ini dari daftar? Tindakan ini
          tidak dapat dibatalkan.
        </p>

        {/* Tombol Aksi */}
        <div className="flex justify-end space-x-4">
          {/* Tombol Batal */}
          <button
            onClick={onClose}
            className="px-5 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Batal
          </button>

          {/* Tombol Hapus */}
          <button
            onClick={onConfirm}
            className="px-5 py-2 text-white bg-[#5E2E19] rounded hover:bg-[#4a2414]"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};


export default DeleteEventPopup;
