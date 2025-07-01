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
    <div style={styles.pageWrapper}>
      <h2 style={styles.heading}>Web Development Team</h2>

      <div className="responsive-container" style={styles.mainContent}>
        {/* Sidebar or Top Tabs */}
        <nav className="responsive-menu" style={styles.menuWrapper}>
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
        </nav>

        {/* Right Content Area */}
        <div style={styles.outletWrapper}>
          <Outlet />
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-container {
              flex-direction: column !important;
            }
            .responsive-menu {
              flex-direction: row !important;
              overflow-x: auto !important;
              gap: 10px !important;
              padding-bottom: 1rem !important;
              border-bottom: 1px solid #eee !important;
              margin-bottom: 1rem !important;
              justify-content: flex-start !important;
              min-width: 0 !important;
              max-width: 100vw !important;
              width: 100% !important;
              /* Hide scroll bar for aesthetics, but keep scrollable */
              scrollbar-width: thin;
              scrollbar-color: #ccc #f4f4f4;
            }
            .responsive-menu::-webkit-scrollbar {
              height: 6px;
            }
            .responsive-menu::-webkit-scrollbar-thumb {
              background: #ccc;
              border-radius: 3px;
            }
            .responsive-menu a {
              min-width: 160px;
              flex: 0 0 auto;
              white-space: nowrap;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  pageWrapper: {
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "1rem",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#2e0669",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    width: "100%",
    boxSizing: "border-box",
  },
  menuWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: "220px",
    maxWidth: "250px",
  },
  menuButton: {
    padding: "12px 16px",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    color: "#333",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
  },
  activeButton: {
    backgroundColor: "#2e0669",
    color: "#fff",
    borderColor: "#2e0669",
    transform: "scale(1.03)",
    boxShadow: "0 4px 10px rgba(46,6,105,0.2)",
  },
  outletWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
    boxSizing: "border-box",
    minHeight: "60vh",
  },
};

export default WebDevelopmenTeam;
