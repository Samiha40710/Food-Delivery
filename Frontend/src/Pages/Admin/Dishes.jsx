import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Dishes() {
  const [dishes, setDishes] = useState([
    { id: 1, name: "Italian Pizza", category: "Pizza", price: 79, quantity: 16, createdBy: "Admin", status: "Published" },
    { id: 2, name: "Veg Burger", category: "Burger", price: 488, quantity: 20, createdBy: "Restaurant", status: "Published" },
    { id: 3, name: "Spaghetti", category: "Noodles", price: 23, quantity: 10, createdBy: "Admin", status: "Published" },
    { id: 4, name: "Red Velvet Cake", category: "Dessert", price: 350, quantity: 230, createdBy: "Admin", status: "Draft" },
    { id: 5, name: "Mix Salad", category: "Appetizers", price: 645.2, quantity: 0, createdBy: "Admin", status: "Reviewing" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  const [selectedDish, setSelectedDish] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    status: "Published",
  });

  const openAddModal = () => {
    setFormData({ name: "", category: "", price: "", quantity: "", status: "Published" });
    setModalType("add");
    setModalOpen(true);
  };

  const openEditModal = (dish) => {
    setSelectedDish(dish);
    setFormData({ ...dish });
    setModalType("edit");
    setModalOpen(true);
  };

  const openDeleteModal = (dish) => {
    setSelectedDish(dish);
    setModalType("delete");
    setModalOpen(true);
  };

  const handleSave = () => {
    if (modalType === "add") {
      setDishes([...dishes, { ...formData, id: Date.now() }]);
    } else if (modalType === "edit") {
      setDishes(dishes.map((d) => (d.id === selectedDish.id ? formData : d)));
    }
    setModalOpen(false);
    setSelectedDish(null);
  };

  const handleDelete = () => {
    setDishes(dishes.filter((d) => d.id !== selectedDish.id));
    setModalOpen(false);
    setSelectedDish(null);
  };

  // Status colors same as Customers
  const statusColors = {
    Published: "bg-green-100 text-green-700",
    Draft: "bg-red-100 text-red-700",
    Reviewing: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dishes</h1>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          + Add Dish
        </button>
      </div>

      {/* Dishes Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr className="h-12 text-gray-600">
              <th className="px-4">Dish Name</th>
              <th className="px-4">Category</th>
              <th className="px-4">Price</th>
              <th className="px-4">Quantity</th>
              <th className="px-4">Created By</th>
              <th className="px-4">Status</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => (
              <tr key={dish.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">{dish.name}</td>
                <td className="px-4 py-2">{dish.category}</td>
                <td className="px-4 py-2">${dish.price}</td>
                <td className="px-4 py-2">{dish.quantity}</td>
                <td className="px-4 py-2">{dish.createdBy}</td>
                <td className="px-4 py-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[dish.status]}`}>
                    {dish.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => openEditModal(dish)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => openDeleteModal(dish)}
                    className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            {(modalType === "add" || modalType === "edit") && (
              <>
                <h2 className="text-2xl font-bold mb-4">{modalType === "add" ? "Add Dish" : "Edit Dish"}</h2>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Dish Name"
                    className="border px-3 py-2 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="border px-3 py-2 rounded-lg"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="border px-3 py-2 rounded-lg"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="border px-3 py-2 rounded-lg"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                  <select
                    className="border px-3 py-2 rounded-lg"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Reviewing">Reviewing</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 mt-5">
                  <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    Cancel
                  </button>
                  <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
                    {modalType === "add" ? "Add" : "Save"}
                  </button>
                </div>
              </>
            )}

            {modalType === "delete" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
                <p>
                  Are you sure you want to delete <span className="font-semibold">{selectedDish.name}</span>?
                </p>
                <div className="flex justify-end gap-3 mt-5">
                  <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    Cancel
                  </button>
                  <button onClick={handleDelete} className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
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
