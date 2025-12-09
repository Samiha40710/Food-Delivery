import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <img src={logo} alt="logo" width="200" className="cursor-pointer" />
    </Link>
  );
};

export default Logo;
