import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiTrash2, FiMail } from "react-icons/fi";

const ContactPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Fetch all messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/contact");
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // Open delete modal
  const confirmDelete = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  // Delete message
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/contact/${deleteId}`);
      setMessages(messages.filter((msg) => msg._id !== deleteId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete message.");
    } finally {
      setDeleteModal(false);
      setDeleteId(null);
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-500 text-lg">Loading messages...</p>;

  return (
    <div className="p-6 relative">

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 max-w-full mx-4 transform transition-transform duration-300 scale-100">
            <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center justify-center gap-2">
              <FiTrash2 /> Confirm Delete
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Are you sure you want to delete this message? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteModal(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition shadow-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Messages
        </h2>
        <span className="bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full shadow">
          Total: {messages.length}
        </span>
      </div>

      {/* Messages Grid */}
      {messages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative"
            >
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">{msg.firstName} {msg.lastName}</span>
              </p>
              <p className="text-gray-500 text-sm">{msg.email}</p>
              <p className="text-gray-800 mt-2">{msg.message}</p>
              <p className="text-gray-400 text-xs mt-2">
                {msg.createdAt 
                  ? new Date(msg.createdAt).toLocaleString("en-PK", { 
                      day: "2-digit", month: "short", year: "numeric", 
                      hour: "2-digit", minute: "2-digit" 
                    }) 
                  : "Date not available"}
              </p>

              <button
                onClick={() => confirmDelete(msg._id)}
                className="absolute top-2 right-2 bg-red-100 text-red-600 p-1 rounded-xl hover:bg-red-200 transition shadow"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">No messages yet</p>
      )}
    </div>
  );
};

export default ContactPage;
