import React, { useState } from "react";

function DateTimePickerModal({ isOpen, onClose, onSave }) {
  const [startDate, setStartDate] = useState("");
  const [time, settime] = useState("");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
    <div className="bg-white rounded-[16px] shadow-lg w-[706px] h-[336px] px-8 py-6 relative">
      {/* Tombol Close */}
      <button
        className="absolute top-[16px] right-[16px] text-[#7D787B] text-[20px] hover:text-gray-700"
        onClick={onClose}
      >
        ✕
      </button>
  
      {/* Modal Content */}
      <div>
        {/* Input Tanggal */}
        <div className="mb-4">
          <label className="block text-[14px] font-medium text-[#7D787B] mb-2">
            Tanggal Mulai Event <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="block w-full h-[48px] text-[#BBBBBB] border border-[#E0E0E0] rounded-[6px] px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
  
        {/* Input Waktu */}
        <div className="mb-6">
          <label className="block text-[14px] font-medium text-[#7D787B] mb-2">
           Waktu Event <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            className="block w-full h-[48px] text-[#BBBBBB] border border-[#E0E0E0] rounded-[6px] px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            value={time}
            onChange={(e) => settime(e.target.value)}
          />
        </div>
  
        {/* Tombol Simpan */}
        <button
          className="w-[622px] h-[40px] bg-[#4F3017] text-white rounded-[6px] font-semibold hover:bg-[#3C2411] transition duration-200"
          onClick={() => {
            onSave(startDate, time);
            onClose();
          }}
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
  

  );
}

export default DateTimePickerModal;
