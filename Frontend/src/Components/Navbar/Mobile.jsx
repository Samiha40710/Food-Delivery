import React from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import avatarImg from "../../assets/images/avatar.png"; // aapka avatar

const menuData = {
  main: [
    { name: "Home", link: "/" },
    { name: "Food Menu", link: "/food-menu" },
    { name: "Mega Menu", link: "/mega-menu" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};

const Mobile = ({ open, active, setActive }) => {
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";
  const activeTextColor = "text-[rgb(245,130,32)]";

  return (
    <div
      className={`md:hidden bg-[rgb(255,243,224)] overflow-hidden shadow-md transition-all duration-300 ${
        open ? "max-h-[800px] py-4" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col gap-4 px-4 font-medium">
        {/* MAIN LINKS */}
        {menuData.main.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer ${active === item.name ? activeTextColor : hoverTextColor}`}
            onClick={() => setActive(item.name)}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}

        {/* Avatar Dropdown */}
        <div className="relative mt-3">
          <img
            src={avatarImg}
            alt="User Avatar"
            className="w-12 h-12 rounded-full cursor-pointer object-cover mx-auto"
          />
          <ul className="mt-2 bg-white shadow-lg rounded-md py-2 w-40 mx-auto flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <MagnifyingGlassIcon className="w-5" />
              <span>Search</span>
            </li>
            <Link to="/login">
              <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                Login
              </li>
            </Link>
            <Link to="/logout">
              <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Mobile;
