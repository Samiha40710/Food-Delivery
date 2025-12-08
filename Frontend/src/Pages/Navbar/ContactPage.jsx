// import React from "react";
// import contact from "../../assets/images/contact.png"
// import BottomContact from "./BottomContact";

// const ContactPage = () => {
//   return (
//     <>
//       <div className="w-full min-h-screen bg-white px-6 lg:px-24 py-16 mt-22">

//         {/* LEFT SIDE — TEXT + IMAGE */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//           {/* Left Content */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Contact Information
//             </h2>

//             <p className="text-gray-600 leading-relaxed">
//               FastBite brings delicious meals to you with speed and care. Whether you're craving something spicy, sweet, or savory—we’re always ready to serve you fresh food, fast.
//             </p>

//             {/* Image */}
//             <div className="mt-10">
//               <img
//                 src={contact}
//                 alt="contact"
//                 className="w-72"
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDE — FORM */}
//           <form className="bg-white">

//             {/* Name Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block font-semibold mb-2">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   style={{
//                     width: "100%",
//                     padding: "12px 16px",
//                     border: "1px solid #d1d5db",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
//                   onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
//                 />
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   style={{
//                     width: "100%",
//                     padding: "12px 16px",
//                     border: "1px solid #d1d5db",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
//                   onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mt-6">
//               <label className="block font-semibold mb-2">E-mail</label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 style={{
//                   width: "100%",
//                   padding: "12px 16px",
//                   border: "1px solid #d1d5db",
//                   borderRadius: "8px",
//                   outline: "none",
//                 }}
//                 onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
//                 onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
//               />
//             </div>

//             {/* Message */}
//             <div className="mt-6">
//               <label className="block font-semibold mb-2">Message</label>
//               <textarea
//                 rows="5"
//                 placeholder="Enter Your Message"
//                 style={{
//                   width: "100%",
//                   padding: "12px 16px",
//                   border: "1px solid #d1d5db",
//                   borderRadius: "8px",
//                   outline: "none",
//                 }}
//                 onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
//                 onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
//             >
//               Send Message
//             </button>

//           </form>
//         </div>
//       </div>
//       <BottomContact />
//     </>
//   )
// }

// export default ContactPage
import React from "react";
import contact from "../../assets/images/contact.png";
import BottomContact from "./BottomContact";

const ContactPage = () => {

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message!");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-white px-6 lg:px-24 py-16 mt-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE — TEXT + IMAGE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>

            <p className="text-gray-600 leading-relaxed">
              FastBite brings delicious meals to you with speed and care. Whether you're craving something spicy, sweet, or savory—we’re always ready to serve you fresh food, fast.
            </p>

            <div className="mt-10">
              <img src={contact} alt="contact" className="w-72" />
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <form className="bg-white" onSubmit={handleSubmit}>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
                  onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
                  onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
                onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
                required
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Enter Your Message"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #FF5722")}
                onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <BottomContact />
    </>
  );
};

export default ContactPage;
