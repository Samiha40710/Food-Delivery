import {
  HiOutlineHome,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineRectangleGroup,
  HiOutlineBriefcase,
  HiOutlineEnvelopeOpen,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.PNG';

const Sidebar = () => {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-orange-100 text-orange-600 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white h-screen shadow-md p-5 fixed">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-orange-500 mb-10">
        <img src={logo} alt="logo" />
      </h1>

      {/* Sidebar Links */}
      <nav className="space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          <HiOutlineHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/menuitems" className={linkClass}>
          <HiOutlineAdjustmentsHorizontal /> Menu Items
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          <HiOutlineShoppingCart /> Orders
        </NavLink>

        <NavLink to="/dashboard/customers" className={linkClass}>
          <HiOutlineUserGroup /> Customers
        </NavLink>

        <NavLink to="/dashboard/dishes" className={linkClass}>
          <HiOutlineRectangleGroup /> Dishes
        </NavLink>

        <NavLink to="/dashboard/sellers" className={linkClass}>
          <HiOutlineBriefcase /> Sellers
        </NavLink>

        <NavLink to="/dashboard/subscriber" className={linkClass}>
          <HiOutlineEnvelopeOpen /> Subscribers
        </NavLink>

        <NavLink to="/dashboard/contact" className={linkClass}>
          <HiOutlineChatBubbleOvalLeft /> Contact Messages
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-5 left-5">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          <HiOutlineArrowRightOnRectangle /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
