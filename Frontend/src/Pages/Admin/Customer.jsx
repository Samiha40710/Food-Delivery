import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const initialCustomers = [
  {
    id: 1,
    name: "Hollie Bruggen",
    phone: "1078832848",
    email: "hbruggen0@narod.ru",
    orders: 17,
    since: "01/21/2023",
    status: "Active",
  },
];

export default function Customer() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [mode, setMode] = useState("add"); // 'add', 'edit', 'delete'

  const handleOpenAdd = () => {
    setSelectedCustomer(null);
    setMode("add");
    setModalOpen(true);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setMode("edit");
    setModalOpen(true);
  };

  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
    setMode("delete");
    setModalOpen(true);
  };

  const handleSave = (customerData) => {
    if (mode === "add") {
      setCustomers((prev) => [
        ...prev,
        { ...customerData, id: prev.length + 1, orders: 0, since: new Date().toLocaleDateString() },
      ]);
    } else if (mode === "edit") {
      setCustomers((prev) =>
        prev.map((c) => (c.id === customerData.id ? customerData : c))
      );
    } else if (mode === "delete") {
      setCustomers(customers.filter((c) => c.id !== selectedCustomer.id));
    }
    setModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header & Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          onClick={handleOpenAdd}
        >
          <FiPlus /> Add Customer
        </button>
      </div>

      {/* Customer Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr className="h-12 text-gray-600">
              <th className="px-4">Name</th>
              <th className="px-4">Phone</th>
              <th className="px-4">Email</th>
              <th className="px-4">Orders</th>
              <th className="px-4">Since</th>
              <th className="px-4">Status</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.orders}</td>
                <td className="px-4 py-2">{customer.since}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(customer)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(customer)}
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
        <CustomerModal
          mode={mode}
          customer={selectedCustomer}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

// Modal Component
const CustomerModal = ({ mode, customer, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    customer || { name: "", email: "", phone: "", status: "Active" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        {mode === "delete" ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete <span className="font-semibold">{customer.name}</span>?</p>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {mode === "add" ? "Add Customer" : "Edit Customer"}
            </h2>
            <div className="flex flex-col gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border px-3 py-2 rounded-lg"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border px-3 py-2 rounded-lg"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border px-3 py-2 rounded-lg"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                {mode === "add" ? "Add" : "Update"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
