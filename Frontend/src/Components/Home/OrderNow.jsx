// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const OrderNow = () => {
//   const [billing, setBilling] = useState({
//     firstName: "",
//     lastName: "",
//     company: "",
//     address: "",
//     country: "",
//     state: "",
//     city: "",
//     zip: "",
//     email: "",
//     phone: "",
//     shipDifferent: false,
//     message: "",
//     paymentMethod: "cod",
//     cardName: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setBilling((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Order Placed Successfully!");
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section className="w-full py-16 bg-gray-50 mt-20">
//       <div className="container mx-auto px-4 md:px-6 lg:px-16 flex flex-col lg:flex-row gap-10">

//         {/* Billing & Payment Form */}
//         <motion.form
//           className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-lg"
//           onSubmit={handleSubmit}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {["firstName", "lastName", "company", "address", "zip", "email", "phone"].map((field) => (
//               <motion.input
//                 key={field}
//                 type={field === "email" ? "email" : "text"}
//                 name={field}
//                 placeholder={
//                   field === "firstName" ? "First Name" :
//                   field === "lastName" ? "Last Name" :
//                   field === "company" ? "Company Name (Optional)" :
//                   field === "address" ? "Enter Your Address" :
//                   field === "zip" ? "ZIP/Postal Code" :
//                   field === "email" ? "example@example.com" :
//                   "+1 123-XXX-7890"
//                 }
//                 value={billing[field]}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//                 required={field !== "company"}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               />
//             ))}

//             <motion.select
//               name="country"
//               value={billing.country}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               required
//             >
//               <option value="">Select Country</option>
//               <option value="USA">USA</option>
//               <option value="Canada">Canada</option>
//             </motion.select>

//             <motion.select
//               name="state"
//               value={billing.state}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               required
//             >
//               <option value="">Select State/Province</option>
//               <option value="California">California</option>
//               <option value="Texas">Texas</option>
//             </motion.select>

//             <motion.select
//               name="city"
//               value={billing.city}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               required
//             >
//               <option value="">Select City</option>
//               <option value="Los Angeles">Los Angeles</option>
//               <option value="Houston">Houston</option>
//             </motion.select>
//           </div>

//           <motion.div
//             className="mt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 name="shipDifferent"
//                 checked={billing.shipDifferent}
//                 onChange={handleChange}
//               />
//               Ship to a different address
//             </label>
//           </motion.div>

//           {/* Payment Options */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <h3 className="text-xl font-semibold mt-8 mb-4">Payment Option</h3>
//             <div className="flex flex-col gap-3">
//               {["cod", "paypal", "amazon", "card"].map((method) => (
//                 <label key={method} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value={method}
//                     checked={billing.paymentMethod === method}
//                     onChange={handleChange}
//                   />
//                   {method === "cod" ? "Cash on Delivery" :
//                    method === "paypal" ? "PayPal" :
//                    method === "amazon" ? "Amazon Pay" :
//                    "Debit/Credit Card"}
//                 </label>
//               ))}
//             </div>
//           </motion.div>

//           {billing.paymentMethod === "card" && (
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <input
//                 type="text"
//                 name="cardName"
//                 placeholder="Name on Card"
//                 value={billing.cardName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               />
//               <input
//                 type="text"
//                 name="cardNumber"
//                 placeholder="Card Number"
//                 value={billing.cardNumber}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               />
//               <input
//                 type="text"
//                 name="expiry"
//                 placeholder="MM/YY"
//                 value={billing.expiry}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               />
//               <input
//                 type="text"
//                 name="cvv"
//                 placeholder="CVV"
//                 value={billing.cvv}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
//               />
//             </motion.div>
//           )}

//           {/* Additional Info */}
//           <motion.textarea
//             name="message"
//             placeholder="Additional Notes (Optional)"
//             value={billing.message}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-4 focus:ring-2 focus:ring-orange-400 transition-all"
//             rows={4}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           />

//           <motion.button
//             type="submit"
//             className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full mt-6 transition-all"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//           >
//             Place Order
//           </motion.button>
//         </motion.form>

//         {/* Order Summary */}
//         <motion.div
//           className="w-full lg:w-1/3 bg-white p-6 md:p-10 rounded-xl shadow-lg"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
//           <div className="flex justify-between mb-2">
//             <span>Sub-total</span>
//             <span>$0.00</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Discount</span>
//             <span>-$0.00</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Tax</span>
//             <span>+$0.00</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-2">
//             <span>Total</span>
//             <span>$0.00</span>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default OrderNow;
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const OrderNow = () => {
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    shipDifferent: false,
    message: "",
    paymentMethod: "cod",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/orders", billing);
      alert(response.data.message); // Backend se response message
      setBilling({ // Form reset
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        country: "",
        state: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        shipDifferent: false,
        message: "",
        paymentMethod: "cod",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full py-16 bg-gray-50 mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-16 flex flex-col lg:flex-row gap-10">

        {/* Billing & Payment Form */}
        <motion.form
          className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName", "company", "address", "zip", "email", "phone"].map((field) => (
              <motion.input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={
                  field === "firstName" ? "First Name" :
                  field === "lastName" ? "Last Name" :
                  field === "company" ? "Company Name (Optional)" :
                  field === "address" ? "Enter Your Address" :
                  field === "zip" ? "ZIP/Postal Code" :
                  field === "email" ? "example@example.com" :
                  "+1 123-XXX-7890"
                }
                value={billing[field]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
                required={field !== "company"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            ))}

            <motion.select
              name="country"
              value={billing.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              required
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </motion.select>

            <motion.select
              name="state"
              value={billing.state}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              required
            >
              <option value="">Select State/Province</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </motion.select>

            <motion.select
              name="city"
              value={billing.city}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              required
            >
              <option value="">Select City</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
            </motion.select>
          </div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="shipDifferent"
                checked={billing.shipDifferent}
                onChange={handleChange}
              />
              Ship to a different address
            </label>
          </motion.div>

          {/* Payment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mt-8 mb-4">Payment Option</h3>
            <div className="flex flex-col gap-3">
              {["cod", "paypal", "amazon", "card"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={billing.paymentMethod === method}
                    onChange={handleChange}
                  />
                  {method === "cod" ? "Cash on Delivery" :
                   method === "paypal" ? "PayPal" :
                   method === "amazon" ? "Amazon Pay" :
                   "Debit/Credit Card"}
                </label>
              ))}
            </div>
          </motion.div>

          {billing.paymentMethod === "card" && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                value={billing.cardName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={billing.cardNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={billing.expiry}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={billing.cvv}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-400 transition-all"
              />
            </motion.div>
          )}

          {/* Additional Info */}
          <motion.textarea
            name="message"
            placeholder="Additional Notes (Optional)"
            value={billing.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-4 focus:ring-2 focus:ring-orange-400 transition-all"
            rows={4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

          <motion.button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full mt-6 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Place Order
          </motion.button>
        </motion.form>

        {/* Order Summary */}
        <motion.div
          className="w-full lg:w-1/3 bg-white p-6 md:p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub-total</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>-$0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>+$0.00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-2">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OrderNow;
