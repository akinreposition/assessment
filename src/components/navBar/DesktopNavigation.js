import React from "react";
import { Link } from "react-router-dom";

const DesktopNavigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="text-blue">Moonsmile Bank</span>
        </Link>
      </div>
      <div className="navbar-main">
        <Link to="/sign-up">
          <button className="navbar-button">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="navbar-button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
