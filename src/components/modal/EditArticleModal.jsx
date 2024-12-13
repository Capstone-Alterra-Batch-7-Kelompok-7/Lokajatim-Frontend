import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EditArticleModal = ({ isOpen, onClose, onSave, articleId, initialData }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null, // Stores Base64 string for the image
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        content: initialData.content,
        image: initialData.photo || null, // If photo exists, use it
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result })); // Save Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const payload = {
      title: formData.title,
      content: formData.content,
      photo: formData.image, // Send Base64 string
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/articles/${articleId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Artikel berhasil diperbarui!"); // Show success message
        onSave(result.data); // Trigger onSave callback
        setTimeout(() => {
          setSuccessMessage(""); // Clear the message after 2 seconds
          onClose(); // Close modal
        }, 2000);
      } else {
        console.error("Error updating article:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-4xl">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Edit Artikel</h2>
        {successMessage && (
          <div className="alert alert-success mb-4">
            <span>{successMessage}</span>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="label">
              <span className="label-text">Judul Artikel</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan Judul Artikel"
              className="input input-bordered w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="label">
              <span className="label-text">Deskripsi Artikel</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Masukkan Deskripsi Artikel"
              className="textarea textarea-bordered w-full h-28"
            />
          </div>
          <div className="col-span-2">
            <label className="label">
              <span className="label-text">Gambar Pendukung</span>
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            <small className="text-error text-sm">*Ukuran Maksimal 5 MB</small>
          </div>
        </div>
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

EditArticleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    photo: PropTypes.string,
  }),
};

export default EditArticleModal;
