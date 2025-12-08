import React, { useState } from "react";

export default function AddDish({ goBack, addNewItem }) {
  const [dish, setDish] = useState({
    name: "",
    category: "",
    price: "",
    costPrice: "",
    quantity: "",
    deliveryType: "",
    shortDesc: "",
    longDesc: "",
    startDate: "",
    endDate: "",
    img: "",
    additionalImages: [],
  });

  const [preview, setPreview] = useState(""); // main image preview
  const [additionalPreviews, setAdditionalPreviews] = useState([]); // additional images previews

  const categories = ["Fast Food", "Dessert", "Beverage", "Vegan"];
  const deliveryTypes = ["Home Delivery", "Takeaway", "Dine-in"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDish((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setDish((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setAdditionalPreviews(previews);
          setDish((prev) => ({ ...prev, additionalImages: previews }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSave = () => {
    addNewItem(dish);
  };

  return (
    <div className="p-10 w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Dish</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Main & Additional Images */}
        <div className="bg-white p-6 border shadow rounded-2xl">
          {/* Main Image */}
          <label className="border-2 border-dashed border-orange-300 bg-orange-100/40 rounded-xl h-72 flex items-center justify-center text-gray-600 cursor-pointer">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-full object-contain rounded-xl"
              />
            ) : (
              "Upload Image"
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          {/* Additional Images */}
          <p className="mt-6 font-semibold text-gray-700">Additional Images</p>
          <div className="grid grid-cols-3 gap-4 mt-3">
            {additionalPreviews.length > 0
              ? additionalPreviews.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Additional ${index}`}
                    className="h-32 w-full object-cover rounded-xl"
                  />
                ))
              : [0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="border-2 border-dashed border-orange-300 bg-orange-50 rounded-xl h-32 flex items-center justify-center"
                  >
                    Upload
                  </div>
                ))}
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleAdditionalImagesChange}
            />
          </div>
          <label className="mt-2 inline-block text-orange-500 cursor-pointer">
            Select Additional Images
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleAdditionalImagesChange}
            />
          </label>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-6 border shadow rounded-2xl space-y-5">
          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Product Name"
            name="name"
            value={dish.name}
            onChange={handleChange}
          />

          <select
            className="w-full border p-3 rounded-xl"
            name="category"
            value={dish.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-5">
            <input
              className="border p-3 rounded-xl"
              placeholder="Selling Price"
              name="price"
              value={dish.price}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-xl"
              placeholder="Cost Price"
              name="costPrice"
              value={dish.costPrice}
              onChange={handleChange}
            />
          </div>

          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Quantity in Stock"
            name="quantity"
            value={dish.quantity}
            onChange={handleChange}
          />

          <select
            className="w-full border p-3 rounded-xl"
            name="deliveryType"
            value={dish.deliveryType}
            onChange={handleChange}
          >
            <option value="">Select Delivery Type</option>
            {deliveryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <textarea
            className="w-full border p-3 rounded-xl"
            rows="3"
            placeholder="Short Description"
            name="shortDesc"
            value={dish.shortDesc}
            onChange={handleChange}
          ></textarea>

          <textarea
            className="w-full border p-3 rounded-xl"
            rows="4"
            placeholder="Long Description"
            name="longDesc"
            value={dish.longDesc}
            onChange={handleChange}
          ></textarea>

          <div className="grid grid-cols-2 gap-5">
            <input
              type="date"
              className="border p-3 rounded-xl"
              name="startDate"
              value={dish.startDate}
              onChange={handleChange}
            />
            <input
              type="date"
              className="border p-3 rounded-xl"
              name="endDate"
              value={dish.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between">
            <button
              className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
              onClick={goBack}
            >
              Cancel
            </button>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
