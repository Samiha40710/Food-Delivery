import { FiHome, FiUsers, FiLogOut, FiClipboard, FiSettings } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.PNG';

const Sidebar = () => {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
      isActive ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
    }`;

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear login token
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="w-64 bg-white h-screen shadow-md p-5 fixed">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-orange-500 mb-10">
        <img src={logo} alt="logo" />
      </h1>

      {/* Sidebar links */}
      <nav className="space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          <FiHome /> Dashboard
        </NavLink>
        <NavLink to="/dashboard/manage" className={linkClass}>
          <FiSettings /> Manage
        </NavLink>
        <NavLink to="/dashboard/orders" className={linkClass}>
          <FiClipboard /> Orders
        </NavLink>
        <NavLink to="/dashboard/customers" className={linkClass}>
          <FiUsers /> Customers
        </NavLink>
        <NavLink to="/dashboard/dishes" className={linkClass}>
          <FiClipboard /> Dishes
        </NavLink>
        <NavLink to="/dashboard/sellers" className={linkClass}>
          <FiClipboard /> Sellers
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-5 left-5">
        <button
          onClick={handleLogout} // attach logout function
          className="flex items-center gap-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
