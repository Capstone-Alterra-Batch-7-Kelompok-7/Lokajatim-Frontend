import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditSuccessPopup from './SuccesEditPopup'; // Pastikan SuccesEditPopup adalah file yang benar

const EditEventPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

  const handleEditClick = () => {
    navigate('/add-event'); 
    setShowSuccessPopup(true);

    // Menutup popup sukses setelah 3 detik
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Event Ini?</h2>
        <p className="mb-6">
          Apakah kamu yakin ingin mengedit detail event ini? Pastikan semua data yang diubah sudah benar sebelum disimpan.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleEditClick} // Pastikan nama fungsi benar
            className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#6f370f]"
          >
            Edit
          </button>
        </div>
      </div>
      {showSuccessPopup && (
        <EditSuccessPopup 
          message="Event berhasil diedit!" 
          subMessage="Pindah ke halaman baru untuk melanjutkan." 
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </div>
  );
};

export default EditEventPopup;
