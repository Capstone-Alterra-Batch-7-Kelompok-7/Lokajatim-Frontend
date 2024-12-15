import React, { useEffect, useState } from "react";
import { useResetStore } from "../../store/resetPasswordStore";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { setOtpFix } = useResetStore();
  useEffect(() => {
    setOtpFix(otp.join(""));
  }, [otp]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;

    // Jika angka dimasukkan, lanjutkan ke kotak berikutnya
    if (e.target.value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  // Fungsi untuk menangani keydown (mencegah selain angka)
  const handleKeyDown = (e, index) => {
    // Mencegah karakter selain angka dan backspace/delete
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }

    // Fokus otomatis ke kotak sebelumnya jika backspace ditekan
    if (e.key === "Backspace" && otp[index] === "") {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        document.getElementById(`otp-${prevIndex}`).focus();
      }
    }
  };

  return (
    <div className="flex justify-between mb-4 gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          id={`otp-${index}`}
          maxLength="1"
          className="w-16 h-16 text-center font-bold text-black focus:outline-none focus:ring-0 focus:border-none"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => handleKeyDown(e, index)} // Mencegah karakter selain angka dan backspace
        />
      ))}
    </div>
  );
};

export default OTPVerification;
