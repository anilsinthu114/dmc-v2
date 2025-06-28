import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./WebDevelopmenTeam.css"; // CSS import remains, but see note below

const menuItems = [
  { to: "/wdt/lead-contributors", label: "Lead Contributors" },
  { to: "/wdt/website-team", label: "JNTUGV Website" },
  { to: "/wdt/admin-panel", label: "Admin Panel" },
  { to: "/wdt/iqac-team", label: "Iqac Cell" },
  { to: "/wdt/placement-team", label: "Placement Cell" },
  { to: "/wdt/dmc-team", label: "Dmc Cell" },
  { to: "/wdt/research-and-development-team", label: "Research and Development Cell" },
  { to: "/wdt/examination-team", label: "Examination Cell" },
  { to: "/wdt/nss-team", label: "Nss Cell" },
  { to: "/wdt/sports-team", label: "Sports Cell" },
];

const menuButtonStyle = {
  width: "90vw",
  maxWidth: "300px",
  minWidth: "160px",
  height: "44px",
  borderRadius: "7px",
  boxShadow: "0px 4px 22px 0px rgba(123, 124, 134, 0.36)",
  padding: "5px",
  textAlign: "center",
  textDecoration: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #555555",
  background: "#fff",
  color: "black",
  fontSize: "15px",
  fontWeight: "bold",
  marginBottom: "10px",
  transition: "background 0.2s, color 0.2s, border 0.2s"
};

const activeButtonStyle = {
  ...menuButtonStyle,
  background: "#2e0669",
  color: "#fff",
  border: "1px solid #2e0669"
};

const aboutMainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%"
};

const aboutAllLeftStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px",
  marginRight: "0",
  position: "static",
  left: "0",
  width: "100%",
  alignItems: "center"
};

const WebDevelopmenTeam = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main" style={aboutMainStyle}>
      <div className="ABOUTallLeft horizontal-menu" style={aboutAllLeftStyle}>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="menuButton"
            style={
              location.pathname === item.to
                ? activeButtonStyle
                : menuButtonStyle
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default WebDevelopmenTeam;
