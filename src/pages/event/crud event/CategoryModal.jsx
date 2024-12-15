import React, { useState , useEffect} from "react";
import axios from "axios";
function CategoryModal({ isOpen, onClose, onSave }) {
  const [category, setCategory] = useState();
  const [eventType, setEventType] = useState("Public");
  const [namaEvent, setnamaEvent] = useState("");
  const [categories, setCategories] = useState([]); // State untuk kategori

  const handleSave = () => {
    onSave({ category, eventType, namaEvent });
    onClose();
  };

  
  const token = localStorage.getItem("token");


  useEffect(() => {
    // Memanggil API untuk mendapatkan daftar kategori
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://lokajatim.org/event-categories", {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan token JWT di header
            "Content-Type": "application/json", // Tentukan format data
        },
        });
        console.log("Res", response)
        setCategories(response.data.data); // Simpan data kategori ke dalam state
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Failed to load categories");
      }
    };

    fetchCategories(); // Panggil fungsi fetchCategories saat komponen dimuat
  }, []); // Hanya dipanggil sekali saat komponen dimuat



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[706px] h-[559px]">
         {/* Tombol Close */}
         <button
        className="absolute top-[16px] right-[16px] text-[#7D787B] text-[20px] hover:text-gray-700"
        onClick={onClose}
        >
        ✕
      </button>

      
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Form </h2>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Nama Event</p>
          <input
            type="text"
            value={namaEvent}
            onChange={(e) => setnamaEvent(e.target.value)}
            placeholder="Masukkan Nama Event"
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-700"
          />
        </div>


        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Kategori *</p>
          <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
        <button
          key={item.id} // Pastikan `item.id` adalah key yang unik
          type="button"
          className={`px-4 py-2 rounded-md border text-sm ${
            category === item.id
              ? "bg-[#4F3017] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setCategory(item.id)} // Pilih kategori
        >
          {item.name} {/* Menampilkan nama kategori */}
        </button>
      ))}
          </div>
        </div>

        

        {/* <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Jenis Event</p>
          <div className="space-y-2">
            {["Public", "Private"].map((type) => (
              <label key={type} className="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="eventType"
                  value={type}
                  checked={eventType === type}
                  onChange={() => setEventType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div> */}

       
        <div className="flex justify-end space-x-2">
 
          <button
            type="button"
            onClick={handleSave}
            className="w-[622px] h-[40px] bg-[#4F3017] hover:bg-gray-600 text-white font-medium rounded-[6px] px-4 py-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
