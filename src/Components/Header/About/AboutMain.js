import React from "react";
import { FaCogs, FaInfoCircle, FaLightbulb, FaPaintBrush, FaTasks, FaUserTie } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
// import "./About.css";

const menuItems = [
  {
    to: "/dmc/about-dmc",
    label: "About DMC Cell",
    icon: <FaInfoCircle />,
  },
  {
    to: "/dmc/dmc-co-ordinator",
    label: "DMC Co-Ordinator",
    icon: <FaUserTie />,
  },
  {
    to: "/dmc/dmc-designer",
    label: "DMC Designer",
    icon: <FaPaintBrush />,
  },
  {
    to: "/dmc/dmc-activities",
    label: "DMC Activities",
    icon: <FaTasks />,
  },
  // Uncomment if needed in the future
  // {
  //   to: "/dmc/dmc-events",
  //   label: "DMC Events",
  //   icon: <FaCalendarAlt />,
  // },
  {
    to: "/dmc/dmc-future-plans",
    label: "DMC Future Plans",
    icon: <FaLightbulb />,
  },
  {
    to: "/dmc/dmc-facilities",
    label: "DMC Facilities",
    icon: <FaCogs />,
  },
];

const AboutMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main" style={{ display: "flex", minHeight: "70vh" }}>
      <nav
        className="ABOUTallLeftMenu"
        aria-label="About DMC Navigation"
        style={{
          minWidth: 220,
          background: "#f7fafc",
          borderRadius: 12,
          boxShadow: "0 2px 12px 0 rgba(11,61,145,0.07)",
          padding: "28px 0 18px 0",
          margin: "18px 24px 18px 0",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`menuButton${isActive ? " active" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 22px",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#035a5a" : "#0b3d91",
                background: isActive ? "#e3f2fd" : "transparent",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: "1.08rem",
                transition: "background 0.18s, color 0.18s, font-weight 0.18s",
                boxShadow: isActive ? "0 2px 8px 0 rgba(3,90,90,0.08)" : "none",
                outline: "none",
              }}
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              onFocus={e => e.currentTarget.style.background = "#e3f2fd"}
              onBlur={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              onMouseOver={e => { if (!isActive) e.currentTarget.style.background = "#f0f7fa"; }}
              onMouseOut={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: "1.18em", display: "flex", alignItems: "center" }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AboutMain;
