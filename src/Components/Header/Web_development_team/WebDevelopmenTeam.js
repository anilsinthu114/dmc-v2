import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./WebDevelopmenTeam.css"; 

const WebDevelopmenTeam = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
        <Link
          to="/wdt/website-team"
          className={`menuButton ${
            location.pathname ==="/wdt/website-team" ? "active" : ""
          }`}
        >
          JNTUGV Website 
        </Link>

        <Link
          to="/wdt/iqac-team"
          className={`menuButton ${
            location.pathname ==="/wdt/iqac-team" ? "active" : ""
          }`}
        >
          Iqac Cell
        </Link>

        <Link
          to="/wdt/placement-team"
          className={`menuButton ${
            location.pathname ==="/wdt/placement-team" ? "active" : ""
          }`}
        >
          Placement Cell
        </Link>


        <Link
          to="/wdt/dmc-team"
          className={`menuButton ${
            location.pathname ==="/wdt/dmc-team" ? "active" : ""
          }`}
        >
          Dmc Cell
        </Link>


        <Link
          to="/wdt/research-and-development-team"
          className={`menuButton ${
            location.pathname ==="/wdt/research-and-development-team" ? "active" : ""
          }`}
        >
          Research and Development Cell
        </Link>

        
        <Link
          to="/wdt/examination-team"
          className={`menuButton ${
            location.pathname ==="/wdt/examination-team" ? "active" : ""
          }`}
        >
          Examination Cell
        </Link>

        <Link
          to="/wdt/nss-team"
          className={`menuButton ${
            location.pathname ==="/wdt/nss-team" ? "active" : ""
          }`}
        >
          Nss Cell
        </Link>

        <Link
          to="/wdt/sports-team"
          className={`menuButton ${
            location.pathname ==="/wdt/sports-team" ? "active" : ""
          }`}
        >
          Sports Cell
        </Link>



     
     
      </div>
      <Outlet />
    </div>
  );
};

export default WebDevelopmenTeam;
