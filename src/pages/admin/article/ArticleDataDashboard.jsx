import React, { useEffect, useState } from "react";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AddArticleModal from "../../../components/modal/AddArticleModal";
import EditArticleModal from "../../../components/modal/EditArticleModal";

const ArticleDataDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Add modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for Edit modal
  const [articleToEdit, setArticleToEdit] = useState(null); // Article to edit
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const articlesPerPage = 10; // Number of articles per page

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("token"); // Get JWT token from localStorage
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/articles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.status === true) {
          setArticles(data.data);
        } else {
          console.error("Failed to fetch articles:", data.message);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = articles.map((article) => article.id);
      setSelectedArticles(allIds);
    } else {
      setSelectedArticles([]);
    }
  };

  const handleSelectArticle = (id) => {
    setSelectedArticles((prev) => {
      if (prev.includes(id)) {
        return prev.filter((articleId) => articleId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const deleteArticle = async (id) => {
    const idsToDelete = selectedArticles.length > 0 ? selectedArticles : [id];

    try {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
      for (const articleId of idsToDelete) {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/articles/${articleId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.status !== true) {
          console.error("Failed to delete article:", data.message);
          alert(`Failed to delete article with ID ${articleId}`);
        }
      }

      // Update UI after deletion
      setArticles((prev) => prev.filter((article) => !idsToDelete.includes(article.id)));
      setSelectedArticles([]);
      alert("Artikel berhasil dihapus.");
    } catch (error) {
      console.error("Error deleting articles:", error);
    }
  };

  const handleEdit = (article) => {
    setArticleToEdit(article); // Pass the selected article data
    setIsEditModalOpen(true); // Open the edit modal
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-primary h-16 w-16"></div>
      </div>
    );
  }

  const totalPages = 10; // Display 10 pages regardless of articles count
  return (
    <WrapperDashboard tabActive="article" key={"article"}>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F8F4EB" }}>
        <br />
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Daftar Artikel</h1>
          <div className="flex space-x-2">
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              <span className="material-icons mr-2"></span> Import CSV
            </button>

            {/* Tombol Tambah */}
            <button
              style={{ backgroundColor: "#4F3017", color: "white" }}
              className="flex items-center px-4 py-2 rounded-md hover:opacity-90"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-icons mr-2"></span> Tambah
            </button>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-4 bg-white">
          <div className="overflow-x-auto">
            <table className="table w-full table-striped table-hover">
              <thead>
                <tr>
                  <th className="font-semibold">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedArticles.length === articles.length && articles.length > 0}
                    />
                  </th>
                  <th className="font-semibold">Gambar</th>
                  <th className="font-semibold">Judul Artikel</th>
                  <th className="font-semibold">Penulis</th>
                  <th className="font-semibold">Tanggal Diterbitkan</th>
                  <th className="font-semibold">Status</th>
                  <th className="font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentArticles &&
                  Array.isArray(currentArticles) &&
                  currentArticles.map((article, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedArticles.includes(article.id)}
                          onChange={() => handleSelectArticle(article.id)}
                        />
                      </td>
                      <td>
                        <img
                          src={article.photo}
                          alt={article.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </td>
                      <td>{article.title}</td>
                      <td>Unknown</td>
                      <td>{new Date(article.created_at).toLocaleDateString()}</td>
                      <td>{article.status ? "Active" : "Inactive"}</td>
                      <td className="flex space-x-2">
                        {/* Tombol Edit */}
                        <button
                          className="flex items-center justify-center border border-gray-300 p-2 rounded-md hover:bg-gray-100"
                          title="Edit"
                          onClick={() => handleEdit(article)}
                        >
                          <FaEdit className="text-gray-500" />
                        </button>
                        <button
                          className="flex items-center justify-center border border-gray-300 p-2 rounded-md hover:bg-gray-100"
                          title="Hapus"
                          onClick={() => deleteArticle(article.id)}
                        >
                          <FaTrashAlt className="text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 space-x-2">
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-[#4F3017] hover:text-white"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-[#4F3017] text-white"
                  : "bg-gray-200 hover:bg-[#4F3017] hover:text-white"
              }`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-[#4F3017] hover:text-white"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Modal Tambah Artikel */}
      <AddArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(newArticle) => {
          setArticles((prev) => [newArticle, ...prev]);
          setIsModalOpen(false);
        }}
      />

      {/* Modal Edit Artikel */}
      <EditArticleModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={(updatedArticle) => {
          setArticles((prev) =>
            prev.map((article) =>
              article.id === updatedArticle.id ? updatedArticle : article
            )
          );
          setIsEditModalOpen(false);
        }}
        articleId={articleToEdit?.id || 0}
        initialData={articleToEdit}
      />
    </WrapperDashboard>
  );
};

export default ArticleDataDashboard;
