import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
    const [active, setActive] = useState(false) 
  return (
    <nav className='mobile-navigation'>
      <div className='logo'>
        <Link to='/'>
          <span className='text-blue'>
            Moonsmile
          </span>
        </Link>
      </div>
        <div>
           <div className='hamburger' onClick={() => setActive(!active)}></div>
      <div className={`mobile-navbar ${active ? 'active' : ''}`}>
      <div className="contain">
            <div className='hamburger-close' onClick={() => setActive(!active)}></div>
      </div>
        <Link to='/sign-up'>
          <button className='navbar-button'>signin</button>
        </Link>
        <Link to="/login">
            <button className="navbar-button">Login</button>
        </Link>
      </div>
        </div>    
    </nav>
  );
};

export default MobileNavigation;
