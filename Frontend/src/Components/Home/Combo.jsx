// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import combo from "../../assets/images/combo.png";

// const Combo = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });

//   return (
//     <section
//       ref={ref}
//       className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 lg:px-16 py-16 md:py-20 text-white"
//       style={{
//         backgroundImage: `url(${combo})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* LEFT TEXT SECTION */}
//       <div className="max-w-xl text-center lg:text-left">
//         {/* Tagline */}
//         <motion.span
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.7 }}
//           className="text-[rgb(234,179,8)] mb-4 md:mb-6 font-handrawn text-xl md:text-2xl"
//         >
//           Limited-Time Combo Deal
//         </motion.span>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold"
//         >
//           Your Favorite Meal, Now at a Delicious Price!
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base lg:text-lg"
//         >
//           Enjoy a mouth-watering combo packed with fresh ingredients, bold flavors,
//           and the perfect balance of taste. Order now and treat yourself to a meal
//           that's made to satisfy every craving.
//         </motion.p>

//         {/* Button Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-6 mt-6 md:mt-8"
//         >
//           <Link to="/ordernow">
//           <button className="bg-[rgb(245,130,32)] hover:bg-[rgb(249,115,22)] rounded-full px-8 sm:px-10 py-3 sm:py-4 font-medium text-white transition-all cursor-pointer">
//             Order Now
//           </button>
//           </Link>
//           <div className="flex items-baseline gap-2">
//             <h4 className="text-xl sm:text-2xl font-medium text-yellow-400">$23.47</h4>
//             <h4 className="text-sm sm:text-lg text-white/75 line-through">$44.99</h4>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Combo;
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import combo from "../../assets/images/combo.png";
import axios from "axios";

const Combo = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const navigate = useNavigate();

  const handleOrderNow = async () => {
    try {
      // Default order data (aap customize kar sakte ho)
      const orderData = {
        firstName: "Guest",
        lastName: "User",
        address: "123 Main St",
        country: "USA",
        state: "California",
        city: "Los Angeles",
        zip: "90001",
        email: "guest@example.com",
        phone: "+1 123-456-7890",
        paymentMethod: "cod",
        message: "Ordered from Combo Deal section",
        items: [
          {
            dish: "Combo Meal",
            price: 23.47,
            quantity: 1,
          },
        ],
        total: 23.47,
      };

      const response = await axios.post("http://localhost:3000/orders", orderData);
      alert(response.data.message);
      navigate("/ordernow"); // Redirect to OrderNow page after order
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 lg:px-16 py-16 md:py-20 text-white"
      style={{
        backgroundImage: `url(${combo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* LEFT TEXT SECTION */}
      <div className="max-w-xl text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-[rgb(234,179,8)] mb-4 md:mb-6 font-handrawn text-xl md:text-2xl"
        >
          Limited-Time Combo Deal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold"
        >
          Your Favorite Meal, Now at a Delicious Price!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base lg:text-lg"
        >
          Enjoy a mouth-watering combo packed with fresh ingredients, bold flavors,
          and the perfect balance of taste. Order now and treat yourself to a meal
          that's made to satisfy every craving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-6 mt-6 md:mt-8"
        >
          <button
            onClick={handleOrderNow}
            className="bg-[rgb(245,130,32)] hover:bg-[rgb(249,115,22)] rounded-full px-8 sm:px-10 py-3 sm:py-4 font-medium text-white transition-all cursor-pointer"
          >
            Order Now
          </button>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl sm:text-2xl font-medium text-yellow-400">$23.47</h4>
            <h4 className="text-sm sm:text-lg text-white/75 line-through">$44.99</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Combo;
