import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} FastBite. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
