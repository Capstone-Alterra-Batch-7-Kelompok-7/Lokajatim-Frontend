import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditEventPopup = ({ eventData, onCancel, onEdit, isOpen }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/addevent', { state: { eventData } });
    if (onEdit) onEdit();
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
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#6f370f]"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventPopup;
