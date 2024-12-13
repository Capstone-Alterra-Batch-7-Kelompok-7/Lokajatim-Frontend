import React from "react";
import Static from "../assets/statik.png";

const SalesStatistics = () => {
  return (
    <div className="bg-base-100 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold">Statistik Penjualan</h2>
      <p className="text-sm text-gray-500">
        Statistik Penjualan Kamu dari hari ke hari
      </p>
      <div className="mt-6 flex justify-center">
        <img
          src={Static}
          alt="Statistik Penjualan"
          className="max-w-full h-auto rounded-lg shadow-md" // Membatasi lebar gambar dan menjaga proporsi
        />
      </div>
    </div>
  );
};

export default SalesStatistics;
