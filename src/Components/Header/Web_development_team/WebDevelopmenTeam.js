import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { to: "/wdt/lead-contributors", label: "Lead Contributors" },
  { to: "/wdt/website-team", label: "JNTUGV Website" },
  { to: "/wdt/admin-panel", label: "Admin Panel" },
  { to: "/wdt/iqac-team", label: "IQAC Cell" },
  { to: "/wdt/placement-team", label: "Placement Cell" },
  { to: "/wdt/dmc-team", label: "DMC Cell" },
  { to: "/wdt/research-and-development-team", label: "R&D Cell" },
  { to: "/wdt/examination-team", label: "Examination Cell" },
  { to: "/wdt/nss-team", label: "NSS Cell" },
  { to: "/wdt/sports-team", label: "Sports Cell" },
];

const WebDevelopmenTeam = () => {
  const location = useLocation();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Web Development Team</h2>

      <div style={styles.menuWrapper}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              style={{
                ...styles.menuButton,
                ...(isActive ? styles.activeButton : {}),
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div style={styles.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#2e0669",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  menuWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "14px",
    marginBottom: "2rem",
    width: "100%",
  },
  menuButton: {
    minWidth: "180px",
    maxWidth: "260px",
    height: "46px",
    padding: "0 16px",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
    color: "#333",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
  },
  activeButton: {
    backgroundColor: "#2e0669",
    color: "#fff",
    borderColor: "#2e0669",
    transform: "scale(1.04)",
    boxShadow: "0 4px 12px rgba(46, 6, 105, 0.3)",
  },
  outletWrapper: {
    width: "100%",
    maxWidth: "1200px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
    boxSizing: "border-box",
  },
};

export default WebDevelopmenTeam;