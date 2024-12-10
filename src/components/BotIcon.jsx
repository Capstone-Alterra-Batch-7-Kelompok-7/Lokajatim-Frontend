import React, { useState } from "react";
import robot from '../assets/icon/robot.png'; // Gunakan gambar yang sesuai

const DraggableFloatingIcon = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 }); // Posisi awal
  const [dragging, setDragging] = useState(false); // Status dragging
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault(); // Mencegah highlight teks saat dragging
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="fixed z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute", // Gunakan absolute agar fleksibel
        cursor: dragging ? "grabbing" : "grab", // Ganti kursor saat dragging
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Lepaskan drag jika mouse keluar
    >
      <img
        src={robot}
        alt="Floating Icon"
        className="w-20 h-20" // Sesuaikan ukuran gambar
        draggable="false" // Mencegah browser default drag pada gambar
      />
    </div>
  );
};

export default DraggableFloatingIcon;
