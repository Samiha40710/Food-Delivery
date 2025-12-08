import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import fastfood from "../../assets/images/fastfood.jpeg";
import desifood from "../../assets/images/desifood.jpeg";
import snacks from "../../assets/images/snacks.jpeg";
import shakes from "../../assets/images/shakes.jpeg";
import drinks from "../../assets/images/drinks.jpeg";
import desserts from "../../assets/images/desserts.jpeg";
import bbq from "../../assets/images/bbq.jpeg";

const categories = [
  { name: "Fast Food", image: fastfood, link: "/mega-menu" },
  { name: "Desi Food", image: desifood, link: "/mega-menu" },
  { name: "Snacks", image: snacks, link: "/mega-menu" },
  { name: "Drinks", image: drinks, link: "/mega-menu" },
  { name: "Shakes", image: shakes, link: "/mega-menu" },
  { name: "Desserts", image: desserts, link: "/mega-menu" },
  { name: "BBQ", image: bbq, link: "/mega-menu" },
];

const FoodMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full py-16 px-6 lg:px-24 bg-[rgb(255,243,224)] min-h-screen mt-22"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 text-center mb-12"
      >
        Explore Our Food Categories
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-sm mt-1">Fresh & delicious</p>
            </div>

            {/* Clickable Link */}
            <Link to={item.link} className="absolute inset-0 z-10"></Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
