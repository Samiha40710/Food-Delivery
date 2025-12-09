import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiMail, FiTrash2, FiX } from "react-icons/fi";

const SubscribersPage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/subscribe");
        setSubscribers(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  const openModal = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubscriber(null);
    setModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/subscribe/${selectedSubscriber._id}`
      );
      setSubscribers(
        subscribers.filter((sub) => sub._id !== selectedSubscriber._id)
      );
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Failed to delete subscriber.");
    }
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        Loading subscribers...
      </p>
    );

  return (
    <div className="p-6 relative">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Subscribers</h1>
        <span className="bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full shadow">
          Total: {subscribers.length}
        </span>
      </div>

      {subscribers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subscribers.map((sub, index) => (
            <div
              key={sub._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex items-start gap-3 relative"
            >
              <FiMail className="text-orange-500 text-2xl flex-shrink-0" />

              <div className="min-w-0">
                <p className="text-gray-600 text-sm">Subscriber #{index + 1}</p>

                <p className="font-medium text-gray-800 break-all truncate">
                  {sub.email}
                </p>
              </div>

              <button
                onClick={() => openModal(sub)}
                className="absolute top-2 right-2 bg-red-100 text-red-600 p-1 rounded-xl hover:bg-red-200 transition shadow"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No subscribers yet
        </p>
      )}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-11/12 sm:w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Confirm Delete
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-6 break-all">
              Are you sure you want to delete subscriber{" "}
              <span className="font-medium">{selectedSubscriber.email}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribersPage;
