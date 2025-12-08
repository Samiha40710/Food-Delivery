import React from "react";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>

        <input
          className="w-72 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-xl outline-none transition"
          placeholder="Search orders..."
        />
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Food Delivered</p>
          <h2 className="text-4xl font-semibold mt-1">23,568</h2>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Your Balance</p>
          <h2 className="text-4xl font-semibold mt-1">$8,904.80</h2>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Satisfaction Rating</p>
          <h2 className="text-4xl font-semibold mt-1">98%</h2>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Order History</h2>

          <select className="px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400">
            <option>Sort: Latest</option>
            <option>Sort: Oldest</option>
          </select>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b bg-gray-50 h-12">
              <th>Date</th>
              <th>Order ID</th>
              <th>Dish</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {[ 
              { date: "12/03/2022", id: "#C0E4F7", dish: "Italian Pizza", total: "$359.69", status: "Refunded", color: "bg-pink-100 text-pink-600" },
              { date: "04/25/2023", id: "#12939F", dish: "Veg Burger", total: "$350.3", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "06/20/2023", id: "#9F36CA", dish: "Spaghetti", total: "$67.99", status: "Cancelled", color: "bg-yellow-100 text-yellow-600" },
              { date: "03/02/2023", id: "#A657A0", dish: "Mix Salad", total: "$21.49", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "05/18/2023", id: "#B932FA", dish: "Cheese Sandwich", total: "$12.99", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "07/11/2023", id: "#D45AC1", dish: "Chicken Wings", total: "$44.59", status: "Refunded", color: "bg-pink-100 text-pink-600" },
              { date: "08/21/2023", id: "#E1289A", dish: "Pasta Alfredo", total: "$29.99", status: "Cancelled", color: "bg-yellow-100 text-yellow-600" },
              { date: "09/30/2023", id: "#FA7812", dish: "Chocolate Cake", total: "$15.49", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "10/04/2023", id: "#AB9811", dish: "Garlic Bread", total: "$9.99", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "11/15/2023", id: "#CD4421", dish: "Tacos", total: "$24.99", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "12/01/2023", id: "#DD8211", dish: "Noodles", total: "$11.50", status: "Cancelled", color: "bg-yellow-100 text-yellow-600" },
              { date: "01/09/2024", id: "#EE7290", dish: "Fried Rice", total: "$13.90", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "02/14/2024", id: "#F92811", dish: "BBQ Sandwich", total: "$18.79", status: "Paid", color: "bg-green-100 text-green-600" },
              { date: "03/22/2024", id: "#A77122", dish: "Steak", total: "$56.99", status: "Refunded", color: "bg-pink-100 text-pink-600" },
              { date: "04/10/2024", id: "#BB1133", dish: "Sushi Roll", total: "$32.49", status: "Paid", color: "bg-green-100 text-green-600" }
            ].map((item, index) => (
              <tr key={index} className="border-b h-16 hover:bg-gray-50 transition">
                <td>{item.date}</td>
                <td className="font-medium">{item.id}</td>
                <td>{item.dish}</td>
                <td className="font-semibold">{item.total}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm ${item.color}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}