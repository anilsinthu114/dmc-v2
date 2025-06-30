import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
import CollectionsIcon from "@mui/icons-material/Collections";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "HOME", icon: <HomeIcon />, path: "/" },
  {
    label: "ABOUT",
    icon: <ApartmentIcon />,
    dropdown: [
      { label: "About DMC Cell", path: "/dmc/about-dmc" },
      { label: "DMC Co-Ordinator", path: "/dmc/dmc-co-ordinator" },
      { label: "DMC Designer", path: "/dmc/dmc-designer" },
      { label: "DMC Activities", path: "/dmc/dmc-activities" },
      { label: "DMC Future Plans", path: "/dmc/dmc-future-plans" },
      { label: "DMC Facilities", path: "/dmc/dmc-facilities" },
    ],
  },
  { label: "SURVEILLANCE", icon: <PhotoCameraFrontIcon />, path: "/about-surveillance" },
  { label: "GALLERY", icon: <CollectionsIcon />, path: "/about-gallery" },
  {
    label: "WEB DEVELOPMENT TEAM",
    icon: <GroupsIcon />,
    dropdown: [
      { label: "Lead Contributors", path: "/wdt/lead-contributors" },
      { label: "JNTUGV Website", path: "/wdt/website-team" },
      { label: "Admin Panel", path: "/wdt/admin-panel" },
      { label: "Iqac Cell", path: "/wdt/iqac-team" },
      { label: "Placement Cell", path: "/wdt/placement-team" },
      { label: "Dmc Cell", path: "/wdt/dmc-team" },
      { label: "Research and Development Cell", path: "/wdt/research-and-development-team" },
      { label: "Examination Cell", path: "/wdt/examination-team" },
      { label: "Nss Cell", path: "/wdt/nss-team" },
      { label: "Sports Cell", path: "/wdt/sports-team" },
    ],
  },
  { label: "CONTACT US", icon: <CallIcon />, path: "/contact-us" },
];

const Dropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 64); // Assume Header is 64px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && openDropdown !== null) {
      const handleClickOutside = (event) => {
        if (
          dropdownRefs.current[openDropdown] &&
          !dropdownRefs.current[openDropdown].contains(event.target)
        ) {
          setOpenDropdown(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown, isMobile]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (index) => setOpenDropdown(openDropdown === index ? null : index);
  const handleMouseEnter = (idx) => !isMobile && setOpenDropdown(idx);
  const handleMouseLeave = (idx) => !isMobile && setOpenDropdown(null);

  return (
    <nav
      className="topnav"
      style={{
        ...styles.navbar(isSticky),
        ...(isMobile && {
          flexDirection: "column",
          alignItems: "stretch",
          padding: "0.5rem",
          borderRadius: 0,
          top: isSticky ? "64px" : 0,
        }),
      }}
    >
      <div
        style={styles.menuButton(isMobile, menuOpen)}
        tabIndex={0}
        onClick={toggleMenu}
        onKeyDown={(e) => ["Enter", " "].includes(e.key) && toggleMenu()}
      >
        <MenuIcon style={{ marginRight: 8 }} /> MENU
      </div>

      <div style={styles.menuContainer(isMobile, menuOpen)}>
        {menuItems.map((item, idx) => {
          const hasDropdown = !!item.dropdown;
          return (
            <div
              key={item.label}
              style={styles.menuItemContainer(isMobile)}
              ref={el => (dropdownRefs.current[idx] = el)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div
                style={{
                  ...styles.dropdownButton(openDropdown === idx, isMobile, hasDropdown),
                  ...(location.pathname === item.path && !hasDropdown ? styles.activeMenuItem : {}),
                }}
                onClick={() => hasDropdown ? toggleDropdown(idx) : navigateTo(item.path)}
                onKeyDown={(e) => e.key === "Enter" && (hasDropdown ? toggleDropdown(idx) : navigateTo(item.path))}
                tabIndex={0}
                role="button"
              >
                {item.icon}
                <span style={{ marginLeft: 10, fontWeight: 600 }}>{item.label}</span>
                {hasDropdown && (
                  <span style={styles.arrow(openDropdown === idx, isMobile)}>
                    {isMobile ? (openDropdown === idx ? "▼" : "▶") : "▼"}
                  </span>
                )}
              </div>

              {hasDropdown && openDropdown === idx && (
                <div style={styles.submenu(isMobile)}>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        ...styles.submenuItem,
                        ...(location.pathname === sub.path ? styles.activeSubmenuItem : {}),
                      }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

const styles = {
  navbar: (isSticky) => ({
    display: "flex",
    Height: "30px",
    position: isSticky ? "sticky" : "relative",
    top: isSticky ? "64px" : "unset",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    zIndex: 999,
    color: "#fff",
    padding: "0.75rem 3rem",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: isSticky ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "none",
    transition: "all 0.3s ease",
    alignItems: "space-between",
    width: "100%",
    gap: "1.3rem",
    boxSizing: "border-box",
  }),
  menuButton: (isMobile, menuOpen) => ({
    display: isMobile ? "flex" : "none",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "12px 18px",
    borderRadius: 0,
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    boxShadow: menuOpen ? "0 4px 12px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.1)",
    fontSize: 20,
    width: "100%",
    border: "none",
    outline: "none",
  }),
  menuContainer: (isMobile, menuOpen) => ({
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "stretch" : "center",
    gap: isMobile ? 0 : "0.75rem",
    width: isMobile ? "100%" : "auto",
  }),
  menuItemContainer: (isMobile) => ({
    position: "relative",
    width: isMobile ? "100%" : "auto",
  }),
  dropdownButton: (isOpen, isMobile, hasDropdown) => ({
    display: "flex",
    alignItems: "center",
    padding: isMobile ? "16px 18px" : "10px 20px",
    background: isOpen ? "rgba(255,255,255,0.10)" : "transparent",
    borderRadius: isMobile ? 0 : 8,
    color: "#fff",
    fontWeight: 600,
    fontSize: isMobile ? 18 : 15,
    justifyContent: "flex-start",
    width: "100%",
    gap: "0.75rem",
    borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
    cursor: "pointer",
  }),
  arrow: (isOpen, isMobile) => ({
    marginLeft: "auto",
    fontSize: isMobile ? 22 : 14,
    transform: isMobile
      ? isOpen
        ? "rotate(90deg)"
        : "rotate(0deg)"
      : isOpen
      ? "rotate(180deg)"
      : "rotate(0deg)",
    transition: "transform 0.2s",
    color: "#ffd86b",
    fontWeight: 700,
  }),
  submenu: (isMobile) => ({
    position: isMobile ? "static" : "absolute",
    top: "100%",
    background: isMobile ? "rgba(118,75,162,0.12)" : "#1e3c72",
    borderRadius: 8,
    padding: isMobile ? 0 : "8px 0",
    zIndex: 1000,
    minWidth: isMobile ? "100%" : 220,
    boxShadow: isMobile ? "none" : "0 4px 16px rgba(0,0,0,0.13)",
    display: "flex",
    flexDirection: "column",
  }),
  submenuItem: {
    display: "block",
    padding: "10px 24px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 15,
    border: "none",
    background: "none",
    transition: "background 0.2s",
    borderRadius: 6,
    cursor: "pointer",
  },
  activeMenuItem: {
    background: "rgba(255,255,255,0.18)",
    color: "#ffd86b",
  },
  activeSubmenuItem: {
    background: "rgba(255,255,255,0.12)",
    color: "#ffd86b",
  },
};

export default Dropdown;