import React from "react";
import Barcode from "react-barcode";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import Footer from "../../components/Footer";

const Eticket = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <NavbarSearchBrown />

      {/* Instruction */}
      <div className="text-center mt-4">
        <p className="text-gray-700 font-semibold">
          Cetak E-Ticket ini dan bawa ke loket penukaran voucher
        </p>
      </div>

      {/* Ticket Content */}
      <div className="flex justify-center mt-6">
        <div className="card bg-white w-[900px] shadow-lg rounded-lg border">
          {/* Title */}
          <div className="bg-[#4A2C1F] text-white text-left p-4 font-bold text-lg rounded-t-lg">
            Workshop Batik Nasional Surabaya 2024
          </div>

          {/* Ticket Body */}
          <div className="grid grid-cols-2 divide-x divide-gray-300 p-6">
            {/* Left Section */}
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <strong>Selasa 10, November 2024 - 10.00 WIB</strong>
              </p>
              <p>
                <strong>Alamat:</strong> <br />
                Universitas Airlangga, Jl. Mayjen. Prof. Dr. Moestopo 47, Surabaya, Jawa Timur.
              </p>
              <p>
                <strong>Nama Pemesan:</strong> <br />
                <span className="font-semibold">Siti Sabrina Ramadanti Abdul</span>
              </p>
              <p>
                <strong>Nomor Identitas Penduduk:</strong> <br />
                <span className="text-gray-600">7777012345878</span>
              </p>
              <p>
                <strong>ID Tiket:</strong> <br />
                <span className="font-bold">WBN112024001</span>
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-700 font-bold text-lg">Regular Pass</p>
              <p className="text-3xl font-extrabold text-black mb-4">Rp150.000</p>

              {/* Barcode */}
              <div className="p-2 bg-gray-100 rounded-md">
                <Barcode
                  value="LOKAJATIM123"
                  format="CODE128"
                  width={2}
                  height={60}
                  displayValue={false}
                />
              </div>
              <p className="mt-3 text-gray-700">
                Kode Booking: <span className="font-semibold">LOKAJATIM123</span>
              </p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-50 p-4 border-t rounded-b-lg">
            <h3 className="font-bold text-gray-800 mb-2">Syarat dan Ketentuan</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>
                E-ticket hanya berlaku untuk nama yang tertera di tiket dan tidak dapat
                dipindahkan ke orang lain tanpa izin dari penyelenggara.
              </li>
              <li>
                Pengguna harus menukarkan e-voucher dengan tiket fisik atau gelang RFID sesuai
                dengan ketentuan yang berlaku pada lokasi acara.
              </li>
            </ul>
          </div>
        </div>
      </div>
<br />
<br /><br /><br />
    </div>
  );
};

export default Eticket;
