import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { menuList as MenuData } from "../../Data/MenuData";

export default function MenuItems() {
  const [itemsList, setItemsList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mainCategory: "",
    category: "",
    price: "",
    status: "Available",
    img: "",
  });

  // Fetch backend + merge static MenuData
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/menu-items");
        const backend = res.data || [];

        const merged = [
          ...MenuData.map((item) => ({ ...item, isStatic: true })),
          ...backend.map((item) => ({ ...item, isStatic: false })),
        ];

        setItemsList(merged);
      } catch (err) {
        console.log("Error fetching menu items:", err);
      }
    };

    fetchMenuItems();
  }, []);

  // Pagination
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedItems = itemsList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Modal open
  const openAddModal = () => {
    setFormData({
      name: "",
      mainCategory: "",
      category: "",
      price: "",
      status: "Available",
      img: "",
    });
    setModalType("add");
    setSelectedItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    if (item.isStatic) {
      alert("Static MenuData cannot be edited!");
      return;
    }
    setSelectedItem(item);
    setFormData({ ...item });
    setModalType("edit");
    setModalOpen(true);
  };

  const openDeleteModal = (item) => {
    if (item.isStatic) {
      alert("Static MenuData cannot be deleted!");
      return;
    }
    setSelectedItem(item);
    setModalType("delete");
    setModalOpen(true);
  };

  // Save ADD + EDIT
  const handleSave = async () => {
    // Validation
    if (!formData.name || !formData.mainCategory || !formData.category || !formData.price) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      // ADD NEW ITEM
      if (modalType === "add") {
        const res = await axios.post(
          "http://localhost:3000/api/menu-items",
          formData
        );
        setItemsList((prev) => [...prev, { ...res.data, isStatic: false }]);
      }

      // EDIT ITEM
      if (modalType === "edit" && selectedItem) {
        const res = await axios.put(
          `http://localhost:3000/api/menu-items/${selectedItem._id}`,
          formData
        );
        setItemsList((prev) =>
          prev.map((item) =>
            item._id === selectedItem._id ? { ...res.data, isStatic: false } : item
          )
        );
      }

      setModalOpen(false);
      setSelectedItem(null);
    } catch (err) {
      console.log("Error saving item:", err.response || err);
      alert("Failed to save item. Check console for details.");
    }
  };

  // Delete
  const handleDelete = async () => {
    if (!selectedItem) return;
    try {
      await axios.delete(
        `http://localhost:3000/api/menu-items/${selectedItem._id}`
      );
      setItemsList((prev) =>
        prev.filter((item) => item._id !== selectedItem._id)
      );
      setModalOpen(false);
      setSelectedItem(null);
    } catch (err) {
      console.log("Error deleting item:", err.response || err);
      alert("Failed to delete item. Check console for details.");
    }
  };

  const statusColors = {
    Available: "bg-green-100 text-green-700",
    Unavailable: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Menu Items</h1>
        <button
          onClick={openAddModal}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          + Add Item
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Main Category</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedItems.map((item) => (
              <tr key={item._id || item.name} className="border-b">
                <td className="px-4 py-2">
                  {item.img ? (
                    <img
                      src={item.img}
                      className="w-16 h-16 rounded object-cover"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.mainCategory}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">Rs {item.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full ${statusColors[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-2 bg-blue-100 text-blue-700 rounded"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => openDeleteModal(item)}
                    className="p-2 bg-red-100 text-red-700 rounded"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {Math.ceil(itemsList.length / ITEMS_PER_PAGE)}
        </span>

        <button
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300"
          disabled={currentPage === Math.ceil(itemsList.length / ITEMS_PER_PAGE)}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
            {/* ADD / EDIT */}
            {(modalType === "add" || modalType === "edit") && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  {modalType === "add" ? "Add Item" : "Edit Item"}
                </h2>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border px-3 py-2 rounded"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <select
                    className="border px-3 py-2 rounded"
                    value={formData.mainCategory}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mainCategory: e.target.value,
                        category: "",
                      })
                    }
                  >
                    <option value="">Select Main Category</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Desi Food">Desi Food</option>
                  </select>

                  <select
                    className="border px-3 py-2 rounded"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="">Select Category</option>
                    {formData.mainCategory && (
                      <>
                        <option value="Food Item">Food Item</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Shakes">Shakes</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Desserts">Desserts</option>
                        <option value="BBQ">BBQ</option>
                      </>
                    )}
                  </select>

                  <input
                    type="number"
                    placeholder="Price"
                    className="border px-3 py-2 rounded"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () =>
                          setFormData({ ...formData, img: reader.result });
                        reader.readAsDataURL(file);
                      }
                    }}
                  />

                  {formData.img && (
                    <img
                      src={formData.img}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 bg-orange-500 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </>
            )}

            {/* DELETE */}
            {modalType === "delete" && (
              <>
                <h2 className="text-xl font-bold mb-3">Confirm Delete</h2>
                <p>
                  Delete item:{" "}
                  <span className="font-semibold">{selectedItem?.name}</span>?
                </p>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={handleDelete}
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
