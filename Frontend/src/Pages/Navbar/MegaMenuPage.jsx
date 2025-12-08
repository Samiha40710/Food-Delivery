import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import allMegaItems from "../../Data/allMegaItems";

// ⭐ Mapping UI names → Real item names in data
const nameMap = {
  Mango: "Mango Shake",
  Banana: "Banana Shake",
  Chocolate: "Chocolate Shake",
  Strawberry: "Strawberry Shake",
  Coffee: "Coffee Shake",
};

const megaMenuData = [
  {
    mainCategory: "Fast Food",
    categories: [
      { name: "Food Item", items: ["Burger", "Shawarma", "Sandwiches", "Pizza", "Pasta", "Noodles", "Broast"] },
      { name: "Snacks", items: ["Nuggets", "Fries", "Chicken Popcorn", "Chicken Fingers", "Pizza Fries"] },
      { name: "Shakes", items: ["Mango", "Banana", "Chocolate", "Strawberry", "Coffee"] },
      { name: "Drinks", items: ["Coke", "Pepsi", "Sprite", "7up", "Sting"] },
      { name: "Desserts", items: ["Icecream", "Cakes", "Cupcakes", "Cookies", "Donuts", "Sundae"] },
      { name: "BBQ", items: ["Chicken Wings", "Chicken Nuggets", "Burgers", "Sandwiches", "BBQ Wrap"] },
    ],
  },
  {
    mainCategory: "Desi Food",
    categories: [
      { name: "Food Item", items: ["Karahi", "Biryani", "Pulaoo", "Paaye", "Handi", "Haleem"] },
      { name: "Snacks", items: ["Samosa", "Pakora", "Spring Roll", "Gol Gappay", "Chaat"] },
      { name: "Shakes", items: ["Mango", "Banana", "Chocolate", "Strawberry", "Vanilla"] },
      { name: "Drinks", items: ["Lassi", "Lemonade", "Rabri Doodh", "Falooda", "Rooh Afza Sharbat"] },
      { name: "Desserts", items: ["Kheer", "Halwa", "Mithai", "Kulfi", "Custard"] },
      { name: "BBQ", items: ["Chicken Tikka", "Seekh Kabab", "Chapli Kabab", "Fish Fry", "Malai Tikka"] },
    ],
  },
];

const MegaMenuPage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    const realName = nameMap[itemName] || itemName;

    const itemObj = allMegaItems.find((i) => i.name === realName);

    if (itemObj) {
      navigate(`/menu-item/${itemObj.id}`);
    } else {
      console.log("Item not found:", realName);
    }
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-[rgb(255,243,224)] py-16 px-6 lg:px-24 mt-22"
    >
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 text-center mb-20"
      >
        Mega Menu
      </motion.h1>

      {megaMenuData.map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 pb-3">
            {category.mainCategory}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.categories.map((subcat, j) => (
              <motion.div
                key={j}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 
                           p-6 rounded-3xl shadow-lg hover:shadow-2xl 
                           border-t-4 border-orange-400 transition-all cursor-pointer 
                           group overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-500 transition-colors">
                  {subcat.name}
                </h3>

                <ul className="space-y-3 text-gray-700">
                  {subcat.items.map((item, k) => (
                    <motion.li
                      key={k}
                      className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      onClick={() => handleItemClick(item)}
                    >
                      <FaCircle className="w-2 h-2 text-orange-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default MegaMenuPage