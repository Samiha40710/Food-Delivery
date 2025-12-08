import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import allMegaItems from "../Data/allMegaItems";

const MegaMenuDetailPage = () => {

  const { id } = useParams();
  const item = allMegaItems.find((i) => i.id === parseInt(id));
  const [mainImage, setMainImage] = useState(item?.images?.[0] || item?.image);

  if (!item) {
    return <h1 className="text-center text-3xl mt-20">Item Not Found</h1>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-16 px-6 lg:px-16 py-10 bg-white mt-26">
      <div className="w-full lg:w-1/2">
        <img
          src={mainImage}
          alt={item.name}
          className="w-full h-[400px] object-cover rounded-2xl shadow-md"
        />
        <div className="flex gap-4 mt-6">
          {(item.images || [item.image]).map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-24 h-24 rounded-xl overflow-hidden cursor-pointer border-2 ${mainImage === img ? "border-orange-500 shadow-lg" : "border-gray-300"
                }`}
            >
              <img src={img} alt={`${item.name}-${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-3xl font-semibold text-gray-900">${item.price}</p>
        </div>
        <p className="text-gray-500">by Healthy Feast Corner</p>

        <div className="flex items-center gap-2 mt-2 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-500 text-sm ml-2">231 Reviews</span>
        </div>

        <p className="text-gray-600 mt-4 leading-7">
          Delicious {item.name}, freshly prepared for you. Enjoy the perfect taste anytime!
        </p>

        <div className="mt-4">
          <p className="font-semibold text-gray-700">Size :</p>
          <div className="flex gap-4 mt-2">
            {["S", "M", "L"].map((s) => (
              <button
                key={s}
                className="w-10 h-10 border rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <Link to="/ordernow">
          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-xl mt-4 text-lg font-semibold cursor-pointer">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MegaMenuDetailPage