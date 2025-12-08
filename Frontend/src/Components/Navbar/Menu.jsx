import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("Home");
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";
  const activeTextColor = "text-[rgb(245,130,32)]";

  return (
    <ul className="hidden md:flex items-center gap-6 font-medium relative">
      <li className={`cursor-pointer ${active === "Home" ? activeTextColor : hoverTextColor}`} onClick={() => setActive("Home")}>
        <Link to="/">Home</Link>
      </li>
      <li className={`cursor-pointer ${active === "FoodMenu" ? activeTextColor : hoverTextColor}`} onClick={() => setActive("FoodMenu")}>
        <Link to="/food-menu">Food Menu</Link>
      </li>
      <li className={`cursor-pointer ${active === "MegaMenu" ? activeTextColor : hoverTextColor}`} onClick={() => setActive("MegaMenu")}>
        <Link to="/mega-menu">Mega Menu</Link>
      </li>
      <li className={`cursor-pointer ${active === "About" ? activeTextColor : hoverTextColor}`} onClick={() => setActive("About")}>
        <Link to="/about">About</Link>
      </li>
      <li className={`cursor-pointer ${active === "Contact" ? activeTextColor : hoverTextColor}`} onClick={() => setActive("Contact")}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;