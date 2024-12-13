import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Ada yang bisa saya bantu?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("https://your-backend-domain.com/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from API:", errorData);
        throw new Error("Gagal mendapatkan respon dari server.");
      }

      const data = await response.json();

      // Sesuaikan dengan struktur response backend
      setMessages((prev) => [...prev, { sender: "bot", text: data.data.message }]);
    } catch (error) {
      console.error("Error in API response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Bot sedang mengalami masalah. Silakan coba lagi nanti." },
      ]);
    }

    setUserInput("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#8B5428] to-[#D2B48C]">
      {/* Wrapper */}
      <div className="w-[375px] h-full flex flex-col bg-white shadow-lg">
        {/* Header */}
        <div className="w-full flex items-center justify-between bg-[#8B5428] text-white px-4 py-3 shadow-lg">
          <h1 className="text-[20px] font-roboto font-[400] leading-[24px] text-center text-[#FEFEFE] flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center mr-3">
              <img
                src="chtbot.jpg"
                alt="LokaBot Logo"
                className="w-8 h-8 rounded-full"
              />
            </div>
            Lokabot
          </h1>
          <button className="w-[147px] h-[36px] rounded-[16px] border border-[#FFFFFF] bg-[#8B5428] text-white text-[16px] font-roboto font-[400] leading-[20px] text-center">
            Beri Feedback
          </button>
          <button className="text-lg text-white font-semibold hover:text-gray-300">
            &times;
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 w-full bg-white p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 flex ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <p
                className={`max-w-xs px-3 py-2 rounded-lg shadow ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-[#8B5428]"
                    : "bg-[#8B5428] text-white"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="w-full flex items-center bg-[#8B5428] px-3 py-3 relative">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Tulis Pesan"
            className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none shadow-inner"
          />
          <button
            onClick={sendMessage}
            className="w-[41px] h-[39px] flex items-center justify-center bg-white rounded-full shadow-lg ml-2"
          >
            <i className="bi bi-arrow-up text-[20px] text-[#8B5428]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
