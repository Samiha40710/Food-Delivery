import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { menuList } from "../../Data/MenuData";
import AddDish from "./AddDish";

export default function Manage() {
  const [items, setItems] = useState(menuList);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState("manage"); // "manage" or "add"
  const itemsPerPage = 10;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // AddDish page
  const handleAdd = () => setPage("add");

  // Modal and selected item state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("");

  // Delete logic
  const handleDelete = (item) => {
    setSelectedItem(item);
    setModalType("delete");
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const newItems = items.filter((i) => i.id !== selectedItem.id);
    setItems(newItems);
    setModalOpen(false);
    setSelectedItem(null);
    if (currentPage > Math.ceil(newItems.length / itemsPerPage))
      setCurrentPage(Math.ceil(newItems.length / itemsPerPage));
  };

  // Edit logic
  const handleEdit = (item) => {
    setSelectedItem({ ...item });
    setModalType("edit");
    setModalOpen(true);
  };

  const handleSaveEdit = () => {
    const newItems = items.map((i) =>
      i.id === selectedItem.id ? selectedItem : i
    );
    setItems(newItems);
    setModalOpen(false);
    setSelectedItem(null);
  };

  // If AddDish page
  if (page === "add")
    return (
      <AddDish
        goBack={() => setPage("manage")}
        addNewItem={(newItem) => {
          setItems((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              name: newItem.name || `New Item ${prev.length + 1}`,
              price: newItem.price || 0,
              category: newItem.category || "Fast Food",
              status: "Available",
              img: newItem.img || prev[0].img,
            },
          ]);
          setPage("manage");
        }}
      />
    );

  return (
    <div className="p-10 w-full relative">
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Manage Menu Items
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition-all"
        >
          <FiPlus size={20} /> Add New Food
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="grid grid-cols-6 font-semibold text-gray-600 border-b pb-4">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center py-5 border-b hover:bg-gray-50 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p>{item.category}</p>
            <p className="font-semibold">${item.price}</p>

            <span
              className={`inline-block px-2 py-0.5 rounded-full text-sm font-semibold 
                ${item.status === "Available" ? "bg-green-100 text-green-700" : ""} 
                ${item.status === "Out of Stock" ? "bg-red-100 text-red-700" : ""} 
                ${item.status === "Coming Soon" ? "bg-yellow-100 text-yellow-700" : ""}`}
            >
              {item.status}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200"
              >
                <FiEdit size={18} />
              </button>
              <button
                onClick={() => handleDelete(item)}
                className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8 gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
          {/* Blurred Background */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl p-6 w-96 shadow-lg z-10">
            {modalType === "edit" && selectedItem && (
              <>
                <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    className="border px-3 py-2 rounded-lg"
                    value={selectedItem.name}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, name: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    className="border px-3 py-2 rounded-lg"
                    value={selectedItem.price}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        price: Number(e.target.value),
                      })
                    }
                  />
                  <select
                    className="border px-3 py-2 rounded-lg"
                    value={selectedItem.status}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, status: e.target.value })
                    }
                  >
                    <option value="Available">Available</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => { setModalOpen(false); setSelectedItem(null); }}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Save
                  </button>
                </div>
              </>
            )}

            {modalType === "delete" && selectedItem && (
              <>
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>
                  Are you sure you want to delete{" "}
                  <span className="font-semibold">{selectedItem.name}</span>?
                </p>
                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => { setModalOpen(false); setSelectedItem(null); }}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
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
}
