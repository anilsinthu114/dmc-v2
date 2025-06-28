import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from '@mui/icons-material/Call';
import CollectionsIcon from '@mui/icons-material/Collections';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css";

const menuItems = [
  {
    label: "HOME",
    icon: <HomeIcon />,
    onClick: (navigate, setMenuState) => {
      navigate("/");
      setMenuState(false);
    },
    link: null,
    dropdown: null,
  },
  {
    label: "ABOUT",
    icon: <ApartmentIcon />,
    dropdown: [
      { label: "About DMC Cell", to: "/dmc/about-dmc" },
      { label: "DMC Co-Ordinator", to: "/dmc/dmc-co-ordinator" },
      { label: "DMC Designer", to: "/dmc/dmc-designer" },
      { label: "DMC Activities", to: "/dmc/dmc-activities" },
      // { label: "DMC Events", to: "/dmc/dmc-events" },
      { label: "DMC Future Plans", to: "/dmc/dmc-future-plans" },
      { label: "DMC Facilities", to: "/dmc/dmc-facilities" },
    ],
  },
  {
    label: "SURVEILLANCE",
    icon: <PhotoCameraFrontIcon />,
    link: "/about-surveillance",
  },
  {
    label: "GALLERY",
    icon: <CollectionsIcon />,
    link: "/about-gallery",
  },
  {
    label: "WEB DEVELOPMENT TEAM",
    icon: <GroupsIcon />,
    dropdown: [
      { label: "Lead Contributors", to: "/wdt/lead-contributors" },
      { label: "JNTUGV Website", to: "/wdt/website-team" },
      { label: "Admin Panel", to: "/wdt/admin-panel" },
      { label: "Iqac Cell", to: "/wdt/iqac-team" },
      { label: "Placement Cell", to: "/wdt/placement-team" },
      { label: "Dmc Cell", to: "/wdt/dmc-team" },
      { label: "Research and Development Cell", to: "/wdt/research-and-development-team" },
      { label: "Examination Cell", to: "/wdt/examination-team" },
      { label: "Nss Cell", to: "/wdt/nss-team" },
      { label: "Sports Cell", to: "/wdt/sports-team" },
    ],
  },
  {
    label: "CONTACT US",
    icon: <CallIcon />,
    link: "/contact-us",
  },
];

const Dropdown = () => {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // For accessibility: close menu on navigation
  const handleMenuClick = (item, idx) => {
    if (item.onClick) {
      item.onClick(navigate, setMenuState);
    } else if (item.link) {
      setMenuState(false);
      setOpenDropdown(null);
    } else if (item.dropdown) {
      setOpenDropdown(openDropdown === idx ? null : idx);
    }
  };

  // For keyboard navigation
  const handleKeyDown = (e, item, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuClick(item, idx);
    }
  };

  return (
    <nav className="topnav" aria-label="Main Navigation">
      <div
        className="menu-icon"
        tabIndex={0}
        role="button"
        aria-label={menuState ? "Close menu" : "Open menu"}
        onClick={() => setMenuState(!menuState)}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setMenuState(!menuState)}
        style={{
          outline: "none",
          boxShadow: menuState ? "0 0 0 2px #f8f8f8" : "none",
          transition: "box-shadow 0.2s"
        }}
      >
        <MenuIcon style={{ marginRight: 8 }} />
        <span style={{ fontWeight: 700, letterSpacing: 1 }}>MENU</span>
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        {menuItems.map((item, idx) => (
          <div
            className="dropdown"
            key={item.label}
            tabIndex={0}
            onMouseEnter={() => item.dropdown && setOpenDropdown(idx)}
            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            onFocus={() => item.dropdown && setOpenDropdown(idx)}
            onBlur={() => item.dropdown && setOpenDropdown(null)}
            style={{
              margin: "0.2rem 0",
              borderRadius: 8,
              boxShadow: openDropdown === idx ? "0 2px 12px rgba(44,62,80,0.10)" : "none",
              background: openDropdown === idx ? "rgba(255,255,255,0.04)" : "none",
              transition: "background 0.2s, box-shadow 0.2s"
            }}
          >
            <div
              className="dropbtn"
              tabIndex={0}
              role="button"
              aria-haspopup={!!item.dropdown}
              aria-expanded={openDropdown === idx}
              onClick={() => handleMenuClick(item, idx)}
              onKeyDown={e => handleKeyDown(e, item, idx)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 600,
                fontSize: "1rem",
                color: "#f8f8f8",
                background: openDropdown === idx ? "rgba(255,255,255,0.08)" : "none",
                border: "none",
                cursor: "pointer",
                borderRadius: 8,
                padding: "10px 18px",
                transition: "background 0.2s, color 0.2s"
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{item.icon}</span>
              {item.link ? (
                <Link
                  to={item.link}
                  className="link-btn"
                  style={{
                    color: "#f8f8f8",
                    textDecoration: "none",
                    fontWeight: 600,
                    marginLeft: 8,
                    fontSize: "1rem"
                  }}
                  onClick={() => setMenuState(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{ marginLeft: 8 }}>{item.label}</span>
              )}
              {item.dropdown && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 18,
                    color: "#f8f8f8",
                    transform: openDropdown === idx ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s"
                  }}
                  aria-hidden="true"
                >
                  ▶
                </span>
              )}
            </div>
            {item.dropdown && (
              <div
                className="dropdown-content"
                style={{
                  display: openDropdown === idx ? "block" : "none",
                  opacity: openDropdown === idx ? 1 : 0,
                  pointerEvents: openDropdown === idx ? "auto" : "none",
                  transition: "opacity 0.2s",
                  background: "linear-gradient(120deg, #2e0669 60%,rgb(78, 113, 200) 100%)",
                  borderRadius: 8,
                  marginTop: 2,
                  boxShadow: "0 4px 16px rgba(44,62,80,0.13)",
                  zIndex: 10,
                  minWidth: 220,
                  padding: "0.5rem 0"
                }}
                onClick={() => setMenuState(false)}
              >
                {item.dropdown.map(sub => (
                  <button
                    key={sub.to}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      padding: "10px 24px",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 500,
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "background 0.2s, color 0.2s"
                    }}
                    onClick={() => setMenuState(false)}
                  >
                    <Link
                      className="link-btn"
                      to={sub.to}
                      style={{
                        color: "#f8f8f8",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "1rem"
                      }}
                    >
                      {sub.label}
                    </Link>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Dropdown;