import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allItems from "../../Data/allItems";

const SpecialMenu = () => {

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const categories = [
    { icon: "🥐", label: "Bakery" },
    { icon: "🍔", label: "Burger" },
    { icon: "🍤", label: "Coffee" },
    { icon: "🧁", label: "CupCakes" },
    { icon: "🍨", label: "Desserts" },
    { icon: "🥤", label: "Drinks" },
    { icon: "🍜", label: "Noodles" },
    { icon: "🍕", label: "Pizza" },
    { icon: "🥟", label: "Samosa" },
    { icon: "🍟", label: "Snacks" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? allItems.filter((item) => item.category === selectedCategory)
    : allItems;

  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(filteredItems[i % filteredItems.length]);
  }

  const settings = {
    dots: false,
    infinite: items.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // large tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE MENU */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
            Special Menu for you...
          </h2>

          <div className="flex flex-col gap-4 md:gap-6 max-h-[350px] overflow-y-auto pr-2 lg:pr-3 [scrollbar-color:orange_transparent] [scrollbar-width:thin]">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
                  ${selectedCategory === cat.label ? "bg-orange-100 font-semibold" : "hover:bg-orange-50"}`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-lg">{cat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="w-full lg:w-3/4 relative mt-8 lg:mt-0">

          {/* Buttons */}
          <div className="flex justify-end mb-4 gap-2">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-orange-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl"
            >
              ‹
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="bg-orange-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl"
            >
              ›
            </button>
          </div>

          {/* Slider */}
          <Slider {...settings} ref={sliderRef}>
            {items.map((item, index) => (
              <div key={index} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/item/${item.id}`)}
                  className="relative rounded-3xl overflow-hidden cursor-pointer shadow-lg h-[320px] sm:h-[350px] md:h-[380px] hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                    <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                    <p className="text-orange-400 font-bold text-base md:text-lg mt-1">
                      $ {item.price}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  )
}

export default SpecialMenu