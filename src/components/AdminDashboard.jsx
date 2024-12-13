import React from 'react';
import { WrapperDashboard } from './WrapperDashboard';
import SalesStatistics from './SalesStatistics';
import coinsAndBanknotes from '../assets/coins-and-banknotes.png';
import greenBackground from '../assets/green-background.png';
import coins from "../assets/coins.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBagShopping, faCalendar, faFileLines, faMoneyBillTransfer, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Assuming you have the ListMenuDashboard component
const ListMenuDashboard = ({ text, icon, href, active = false }) => {
  return (
    <Link to={href}>
      <div
        className={`flex items-center text-base justify-start py-4  rounded-2xl pl-3 hover:bg-primary hover:text-white ${active ? "bg-primary text-white" : "bg-white"
          }`}
      >
        <FontAwesomeIcon icon={icon} />
        <p className="pl-3">{text}</p>
      </div>
    </Link>
  );
};

const DashboardHome = () => {
  return (
    <WrapperDashboard tabActive="dashboard">
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F4EB' }}>
        
        {/* Konten utama */}
        <div className="p-0 m-0">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Halo, Kansa!</h1>
              <p className="text-gray-500">Lihat apa yang terjadi di tokomu hari ini.</p>
            </div>
            <div className="flex items-center">
              <img
                src={coinsAndBanknotes}
                alt="Ilustrasi uang emas dan hijau"
                className="w-24 h-24"
              />
              <img
                src={greenBackground}
                alt="Ilustrasi uang emas dan hijau"
                className="w-32 h-32"
              />
              <img
                src={coins}
                alt="Ilustrasi uang emas dan hijau"
                className="w-40 h-40"
              />
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <main className="flex-grow p-6 flex justify-between items-start space-x-6">
          {/* Info Box */}
          <div className="bg-white rounded-lg shadow-lg border w-[800px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Info Penting Hari Ini</h2>
              <span className="text-gray-500">Sabtu, 07 Des 2024</span>
            </div>
            <p className="text-gray-500 mb-4">Cek statistik tokomu sekarang!</p>

            {/* Statistik */}
            <div className="grid grid-cols-3 divide-x divide-y divide-gray-200">
              {/* Kotak statistik individu */}
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Pesanan Baru</span>
                <span className="text-4xl font-bold mt-2">27</span>
                <span className="text-gray-600 text-sm mt-1">
                  Potensi Pendapatan <span className="font-bold text-green-600">+Rp.2.358.000</span>
                </span>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Proses Pengiriman</span>
                <span className="text-4xl font-bold mt-2">9</span>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Total Produk</span>
                <span className="text-4xl font-bold mt-2">35.555</span>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Total Event</span>
                <span className="text-4xl font-bold mt-2">142</span>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Event Berlangsung</span>
                <span className="text-4xl font-bold mt-2">2</span>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <span className="text-gray-600 text-sm">Total Artikel</span>
                <span className="text-4xl font-bold mt-2">55</span>
              </div>
            </div>
          </div>

          {/* Kartu Rangkuman Penjualan */}
          <div className="max-w-lg bg-white rounded-lg shadow-lg border border-gray-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-300">
              <h1 className="text-lg font-bold text-gray-800">Rangkuman Penjualan</h1>
              <p className="text-sm text-gray-500">Statistik Penjualan Kamu</p>
            </div>

            {/* Statistik Penjualan */}
            <div className="grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300">
              {/* Tiket yang Dibeli */}
              <div className="px-4 py-6 text-center">
                <h2 className="text-sm text-gray-500">Tiket Dibeli</h2>
                <p className="text-2xl font-bold text-black">34.526</p>
                <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full inline-block mt-2">
                  +10% Dari Bulan Lalu
                </span>
              </div>

              {/* Produk yang Dibeli */}
              <div className="px-4 py-6 text-center">
                <h2 className="text-sm text-gray-500">Produk Dibeli</h2>
                <p className="text-2xl font-bold text-black">5.357</p>
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full inline-block mt-2">
                  -1% Dari Minggu Lalu
                </span>
              </div>
            </div>

            {/* Pendapatan */}
            <div className="px-4 py-6 text-center">
              <h2 className="text-sm text-gray-500">Pendapatan</h2>
              <p className="text-2xl font-bold text-black">Rp.435.000.000</p>
              <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full inline-block mt-2">
                +13% Dari Bulan Lalu
              </span>
            </div>
          </div>
        </main>
      </div>
      <SalesStatistics />
    </WrapperDashboard>
  );
};


export default DashboardHome;
