import React from "react";
import {
  FaCogs,
  FaInfoCircle,
  FaLightbulb,
  FaPaintBrush,
  FaTasks,
  FaUserTie,
} from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

// Enhanced menu items for clarity and accessibility
const menuItems = [
  {
    to: "/dmc/about-dmc",
    label: "About DMC Cell",
    icon: <FaInfoCircle aria-hidden="true" />,
  },
  {
    to: "/dmc/dmc-co-ordinator",
    label: "DMC Co-Ordinator",
    icon: <FaUserTie aria-hidden="true" />,
  },
  {
    to: "/dmc/dmc-designer",
    label: "DMC Designer",
    icon: <FaPaintBrush aria-hidden="true" />,
  },
  {
    to: "/dmc/dmc-activities",
    label: "DMC Activities",
    icon: <FaTasks aria-hidden="true" />,
  },
  // Uncomment if needed in the future
  // {
  //   to: "/dmc/dmc-events",
  //   label: "DMC Events",
  //   icon: <FaCalendarAlt aria-hidden="true" />,
  // },
  {
    to: "/dmc/dmc-future-plans",
    label: "DMC Future Plans",
    icon: <FaLightbulb aria-hidden="true" />,
  },
  {
    to: "/dmc/dmc-facilities",
    label: "DMC Facilities",
    icon: <FaCogs aria-hidden="true" />,
  },
];

const navStyle = {
  minWidth: 200,
  background: "linear-gradient(135deg, #e3f2fd 0%, #fafdff 100%)",
  borderRadius: 18,
  boxShadow: "0 4px 24px 0 rgba(11,61,145,0.10)",
  padding: "30px 0 24px 0",
  margin: "24px 32px 24px 0",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  position: "sticky",
  top: 32,
  alignSelf: "flex-start",
  border: "1.5px solid #e0e7ef",
};

const menuButtonBase = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "16px 20px",
  fontWeight: 400,
  color: "#0b3d91",
  background: "transparent",
  borderRadius: 12,
  textDecoration: "none",
  fontSize: "1.08rem",
  transition: "background 0.18s, color 0.18s, font-weight 0.18s, box-shadow 0.18s, transform 0.13s",
  boxShadow: "none",
  outline: "none",
  border: "none",
  cursor: "pointer",
  position: "relative",
  letterSpacing: 0.1,
  minHeight: 48,
  userSelect: "none",
};

const activeButton = {
  fontWeight: 700,
  color: "#035a5a",
  background: "linear-gradient(90deg, #e3f2fd 60%, #e0f7fa 100%)",
  boxShadow: "0 4px 16px 0 rgba(3,90,90,0.10)",
  border: "1.5px solid #90caf9",
  transform: "scale(1.03)",
};

const hoverButton = {
  background: "#f0f7fa",
  color: "#035a5a",
  transform: "translateX(2px) scale(1.01)",
};

const focusButton = {
  background: "#e3f2fd",
  color: "#035a5a",
  boxShadow: "0 0 0 3px #90caf9",
  border: "1.5px solid #90caf9",
};

const dividerStyle = {
  height: 1,
  background: "linear-gradient(90deg, #e0e7ef 0%, #e3f2fd 100%)",
  border: "none",
  margin: "10px 0 10px 0",
};

const AboutMain = () => {
  const location = useLocation();
  const [hovered, setHovered] = React.useState(null);
  const [focused, setFocused] = React.useState(null);

  // Responsive: stack nav on top for small screens
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add a subtle background pattern for main area
  const mainBg = isMobile
    ? "#fafdff"
    : "repeating-linear-gradient(135deg, #fafdff, #fafdff 40px, #f5f7fa 80px, #fafdff 120px)";

  return (
    <div
      className="ABOUT-Main"
      style={{
        display: isMobile ? "block" : "flex",
        minHeight: "70vh",
        width: "100%",
        background: mainBg,
        padding: isMobile ? "0" : "0 0 0 0",
      }}
    >
      <nav
        className="ABOUTallLeftMenu"
        aria-label="About DMC Navigation"
        style={{
          ...navStyle,
          minWidth: isMobile ? "100%" : navStyle.minWidth,
          margin: isMobile ? "0 0 24px 0" : navStyle.margin,
          borderRadius: isMobile ? 0 : navStyle.borderRadius,
          boxShadow: isMobile ? "none" : navStyle.boxShadow,
          position: isMobile ? "static" : navStyle.position,
          top: isMobile ? "unset" : navStyle.top,
          border: isMobile ? "none" : navStyle.border,
          background: isMobile
            ? "linear-gradient(90deg, #e3f2fd 0%, #fafdff 100%)"
            : navStyle.background,
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.18rem",
            color: "#0b3d91",
            letterSpacing: 0.5,
            margin: "0 0 10px 0",
            padding: "0 24px",
            textShadow: "0 2px 8px #e3f2fd",
            display: isMobile ? "none" : "block",
          }}
        >
          DMC Navigation
        </div>
        {!isMobile && <hr style={dividerStyle} />}
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.to;
          const isHovered = hovered === idx;
          const isFocused = focused === idx;
          let style = { ...menuButtonBase };
          if (isActive) style = { ...style, ...activeButton };
          else if (isFocused) style = { ...style, ...focusButton };
          else if (isHovered) style = { ...style, ...hoverButton };

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`menuButton${isActive ? " active" : ""}`}
              style={style}
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              onFocus={() => setFocused(idx)}
              onBlur={() => setFocused(null)}
              onMouseOver={() => setHovered(idx)}
              onMouseOut={() => setHovered(null)}
              onKeyDown={e => {
                // Keyboard navigation: Enter/Space triggers click
                if ((e.key === "Enter" || e.key === " ") && !isActive) {
                  e.preventDefault();
                  e.currentTarget.click();
                }
              }}
            >
              <span
                style={{
                  fontSize: "1.32em",
                  display: "flex",
                  alignItems: "center",
                  marginRight: 8,
                  filter: isActive
                    ? "drop-shadow(0 2px 6px #e3f2fd)"
                    : "none",
                  color: isActive ? "#1976d2" : "#0b3d91",
                  transition: "color 0.18s, filter 0.18s",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span
                style={{
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: isActive ? 700 : 400,
                  letterSpacing: 0.1,
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#035a5a",
                    boxShadow: "0 0 0 3px #e3f2fd",
                    border: "2px solid #90caf9",
                  }}
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
      </nav>
      <div
        style={{
          flex: 1,
          minWidth: 0,
          background: "#fff",
          borderRadius: isMobile ? 0 : 20,
          boxShadow: isMobile ? "none" : "0 4px 24px 0 rgba(11,61,145,0.08)",
          padding: isMobile ? "0" : "28px 32px 32px 0",
          marginTop: isMobile ? 0 : 24,
          marginBottom: isMobile ? 0 : 24,
          marginRight: isMobile ? 0 : 24,
          border: isMobile ? "none" : "1.5px solid #e0e7ef",
          minHeight: isMobile ? "60vh" : "70vh",
          transition: "box-shadow 0.18s, border-radius 0.18s, padding 0.18s",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AboutMain;
