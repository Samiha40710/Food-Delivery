import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Sellers = () => {
  const [sellers, setSellers] = useState([
    { id: 1, name: "Seller One", email: "seller1@example.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Seller Two", email: "seller2@example.com", phone: "987-654-3210", status: "Inactive" },
    { id: 3, name: "Seller Three", email: "seller3@example.com", phone: "555-555-5555", status: "Active" },
  ]);

  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", status: "Active" });

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setFormData({ name: "", email: "", phone: "", status: "Active" });
    setModalType("add");
    setModalOpen(true);
  };

  const openEditModal = (seller) => {
    setSelectedSeller(seller);
    setFormData({ ...seller });
    setModalType("edit");
    setModalOpen(true);
  };

  const openDeleteModal = (seller) => {
    setSelectedSeller(seller);
    setModalType("delete");
    setModalOpen(true);
  };

  const handleSave = () => {
    if (modalType === "add") {
      setSellers([...sellers, { ...formData, id: Date.now() }]);
    } else if (modalType === "edit") {
      setSellers(sellers.map((s) => (s.id === selectedSeller.id ? formData : s)));
    }
    setModalOpen(false);
    setSelectedSeller(null);
  };

  const handleDelete = () => {
    setSellers(sellers.filter((s) => s.id !== selectedSeller.id));
    setModalOpen(false);
    setSelectedSeller(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Sellers</h1>
        <button
          onClick={openAddModal}
          className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
        >
          + Add Seller
        </button>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Search */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search sellers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 border-b">
              <tr className="h-12 text-gray-600">
                <th className="px-4">ID</th>
                <th className="px-4">Name</th>
                <th className="px-4">Email</th>
                <th className="px-4">Phone</th>
                <th className="px-4">Status</th>
                <th className="px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSellers.map((seller) => (
                <tr key={seller.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{seller.id}</td>
                  <td className="px-4 py-2">{seller.name}</td>
                  <td className="px-4 py-2">{seller.email}</td>
                  <td className="px-4 py-2">{seller.phone}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        seller.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {seller.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => openEditModal(seller)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => openDeleteModal(seller)}
                      className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredSellers.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No sellers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blur background */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          <div className="relative bg-white rounded-2xl p-6 w-96 z-10 shadow-lg">
            {(modalType === "add" || modalType === "edit") && (
              <>
                <h2 className="text-xl font-bold mb-4">{modalType === "add" ? "Add Seller" : "Edit Seller"}</h2>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <select
                    className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                  >
                    {modalType === "add" ? "Add" : "Save"}
                  </button>
                </div>
              </>
            )}

            {modalType === "delete" && (
              <>
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>
                  Are you sure you want to delete <span className="font-semibold">{selectedSeller.name}</span>?
                </p>
                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
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
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sellers;
