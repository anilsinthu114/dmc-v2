import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css"; 

const AboutMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
        <Link
          to="/dmc/about-dmc"
          className={`menuButton ${
            location.pathname ==="/dmc/about-dmc" ? "active" : ""
          }`}
        >
          About DMC Cell
        </Link>

        <Link
          to="/dmc/dmc-co-ordinator"
          className={`menuButton ${
            location.pathname ==="/dmc/dmc-co-ordinator" ? "active" : ""
          }`}
        >
          DMC Co-Ordinator
        </Link>

        <Link
          to="/dmc/dmc-supporting-staff"
          className={`menuButton ${
            location.pathname ==="/dmc/dmc-supporting-staff" ? "active" : ""
          }`}
        >
          DMC Supporting Staff
        </Link>

        <Link
          to="/dmc/dmc-activities"
          className={`menuButton ${
            location.pathname === "/dmc/dmc-activities" ? "active" : ""
          }`}
        >
          DMC Activities
        </Link>

        {/* <Link
          to="/dmc/dmc-events"
          className={`menuButton ${
            location.pathname === "/dmc/dmc-events" ? "active" : ""
          }`}
        >
          DMC Events
        </Link> */}

        <Link
          to="/dmc/dmc-future-plans"
          className={`menuButton ${
            location.pathname === "/dmc/dmc-future-plans" ? "active" : ""
          }`}
        >
          DMC Future Plans
        </Link>

        <Link
          to="/dmc/dmc-facilities"
          className={`menuButton ${
            location.pathname === "/dmc/dmc-facilities" ? "active" : ""
          }`}
        >
          DMC Facilities
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMain;
