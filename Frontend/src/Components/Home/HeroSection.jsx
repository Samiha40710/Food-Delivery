import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import richard from "../../assets/images/Team/hamza.jpg"
import areeba from "../../assets/images/Team/areeba.jpg"
import fastest from "../../assets/images/fastest.png"
import vegburger from "../../assets/images/vegburger.jpeg"
import chickenwrap from "../../assets/images/chickenwrap.jpeg"

const HeroSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#FFF4EC] py-20 px-6 md:px-16 rounded-3xl relative overflow-hidden"
    >

      {/* FLOATING EMOJIS */}
      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={ isInView ? { y: [0, -12, 0], opacity: 1 } : { opacity: 0 } }
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 left-1/2 text-2xl"
      >
        😋
      </motion.span>

      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={ isInView ? { y: [-10, 0, -10], opacity: 1 } : { opacity: 0 } }
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-1/3 text-xl"
      >
        🍗
      </motion.span>

      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={ isInView ? { y: [0, 15, 0], opacity: 1 } : { opacity: 0 } }
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-28 text-xl"
      >
        🔥
      </motion.span>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -40 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-orange-200 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold">
            Download App
          </button>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-6">
            Get Started With Us <br /> Today!
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Discover food wherever and whenever and get your
            food delivered quickly.
          </p>

          {/* RIDER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 bg-white shadow-xl rounded-full flex items-center gap-4 px-5 py-3 w-fit relative"
          >
            <img
              src={richard}
              alt="Courier"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">Richard Watson</h3>
              <p className="text-gray-500 text-sm">Food Courier</p>
            </div>

            <button className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-xl">
              📞
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 40 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-white shadow-2xl rounded-3xl p-6 w-[330px] relative">

            {/* Location */}
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>📍 Newyork, USA</span>
              <img
                src={areeba}
                alt="user"
                className="w-8 h-8 rounded-full"
              />
            </div>

            {/* Delivery Banner */}
            <div className="bg-orange-100 p-4 rounded-2xl text-center mb-5">
              <h4 className="font-semibold text-lg">
                The Fastest In Delivery <span className="text-orange-500">Food</span>
              </h4>

              <img
                src={fastest}
                className="w-28 mx-auto mt-3"
                alt="scooter"
              />
            </div>

            {/* Categories */}
            <h3 className="text-gray-700 font-semibold mb-2">Categories</h3>
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full">🍕 Pizza</button>
              <button className="bg-orange-100 text-gray-700 px-4 py-2 rounded-full">🍔 Burger</button>
              <button className="bg-orange-100 text-gray-700 px-4 py-2 rounded-full">🍰 Desserts</button>
            </div>

            {/* Popular */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-gray-700 font-semibold">Popular Now</h3>
                <button className="text-orange-500 text-sm">View All</button>
              </div>

              <div className="flex gap-4">
                <div className="bg-white shadow-lg p-3 rounded-xl w-28">
                  <img
                    src={vegburger}
                    className="w-full h-20 object-cover rounded-lg"
                    alt="Burger"
                  />
                  <p className="text-center text-sm font-semibold mt-2">Veg Burger</p>
                </div>

                <div className="bg-white shadow-lg p-3 rounded-xl w-28">
                  <img
                    src={chickenwrap}
                    className="w-full h-20 object-cover rounded-lg"
                    alt="Chicken"
                  />
                  <p className="text-center text-sm font-semibold mt-2">Chicken Wrap</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default HeroSection;
