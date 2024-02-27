import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./Dropdown.css";

const Dropdown = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon />
        <p>MENU</p>
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div className="dropdown" onClick={toggleMenu}>
          <Link to="/" className="dropbtn">
            <HomeIcon />
            HOME
          </Link>
        </div>
        <div className="dropdown" onClick={toggleMenu}>
          <Link to="/dmc" className="dropbtn">
            <ApartmentIcon />
            DMC
          </Link>
        </div>
        <div className="dropdown" onClick={toggleMenu}>
          <Link to="/e-ticket" className="dropbtn">
            <DraftsIcon />
            E-Ticket
          </Link>
        </div>
        {/* Add more dropdowns for other menu items */}
      </div>
    </nav>
  );
};

export default Dropdown;
