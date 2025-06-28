// Home.js
import ComputerIcon from "@mui/icons-material/Computer";
import LanIcon from "@mui/icons-material/Lan";
import MemoryIcon from "@mui/icons-material/Memory";
import SecurityCameraIcon from "@mui/icons-material/Videocam";
import React from "react";
import { Link } from "react-router-dom";
import certificatesImage from "../Header/Gallery/team 3.jpg";
import dmcImage from "./Images/1.jpg";
import additionalImage from "./Images/4.jpg";
import NotificationsScrolling from "./NotificationsScrolling/NotificationsScrolling";

const serviceCards = [
  {
    title: "Hardware",
    icon: <MemoryIcon style={{ fontSize: 36, color: "#1976d2", marginBottom: 8 }} />,
    desc:
      "DMC inspects complaints received through JNTUGV–eTicket and performs all minor repairs. DMC maintains systems and servers for various purposes.",
    link: "/Hardware",
  },
  {
    title: "Networks",
    icon: <LanIcon style={{ fontSize: 36, color: "#388e3c", marginBottom: 8 }} />,
    desc:
      "DMC maintains the Campus Wide Network and campus Wi-Fi. DMC configures and maintains the University Firewall and IP-based network infrastructure.",
    link: "/Network",
  },
  {
    title: "Surveillance",
    icon: <SecurityCameraIcon style={{ fontSize: 36, color: "#fbc02d", marginBottom: 8 }} />,
    desc:
      "IP Cameras are installed at strategic locations on campus. The monitoring unit is housed in the VC's chamber for a quick review of University activities.",
    link: "/SurveillanceService",
  },
  {
    title: "Software",
    icon: <ComputerIcon style={{ fontSize: 36, color: "#7b1fa2", marginBottom: 8 }} />,
    desc:
      "All software purchases must be supported by guarantee and/or warranty requirements and be compatible with the University's server and/or hardware system.",
    link: "/Software",
  },
];

const mobileFirstStyles = {
  // General page
  homePage: {
    background: "#f7fafd",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
    padding: 0,
    margin: 0,
  },
  // Scrolling images
  scrollingImagesContainer: {
    marginBottom: 20,
    width: "100%",
    overflowX: "auto",
  },
  scrollingImages: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    overflowX: "auto",
    padding: "10px 0",
    width: "100%",
    scrollbarWidth: "thin",
  },
  scrollImage: {
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(30,64,175,0.08)",
    width: 120,
    height: 80,
    objectFit: "cover",
    flex: "0 0 auto",
  },
  // Main content
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: 24,
    padding: "0 8px",
    width: "100%",
    boxSizing: "border-box",
  },
  leftContent: {
    width: "100%",
    maxWidth: "100%",
    padding: 0,
    marginBottom: 16,
  },
  heading: {
    color: "#1976d2",
    fontWeight: 700,
    fontSize: "1.3rem",
    marginBottom: 10,
    letterSpacing: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  headingIcon: {
    fontSize: 28,
    color: "#1976d2",
    marginRight: 6,
    verticalAlign: "middle",
  },
  leftPara: {
    color: "#333",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: 0,
  },
  rightContent: {
    width: "100%",
    maxWidth: 340,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  dmcImage: {
    width: "100%",
    maxWidth: 320,
    borderRadius: 12,
    boxShadow: "0 4px 16px rgba(30,64,175,0.10)",
    objectFit: "cover",
  },
  // Notifications
  notificationsContainer: {
    background: "#e3f2fd",
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(30,64,175,0.08)",
    padding: "16px 8px",
    margin: "0 auto 24px auto",
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  notificationsHeading: {
    color: "#1976d2",
    fontWeight: 600,
    fontSize: "1.08rem",
    marginBottom: 8,
    letterSpacing: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  notifications: {
    minHeight: 40,
  },
  // Services
  servicesContainer: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 16px rgba(30,64,175,0.07)",
    padding: "20px 6px",
    margin: "0 auto 24px auto",
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  servicesHeading: {
    color: "#1565c0",
    fontWeight: 700,
    fontSize: "1.2rem",
    marginBottom: 16,
    letterSpacing: 0.5,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
    justifyContent: "center",
    width: "100%",
  },
  card: {
    background: "#f7fafd",
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(30,64,175,0.06)",
    padding: "18px 10px",
    textAlign: "center",
    transition: "box-shadow 0.2s, transform 0.2s",
    minHeight: 180,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e3e3e3",
    width: "100%",
    boxSizing: "border-box",
  },
  cardIcon: {
    marginBottom: 8,
  },
  cardTitle: {
    color: "#1976d2",
    fontWeight: 600,
    fontSize: "1.05rem",
    marginBottom: 8,
  },
  cardDesc: {
    color: "#444",
    fontSize: "0.97rem",
    marginBottom: 14,
    flex: 1,
  },
  readMoreBtn: {
    background: "#1976d2",
    color: "#fff",
    padding: "7px 16px",
    borderRadius: 5,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.98rem",
    transition: "background 0.2s",
    boxShadow: "0 2px 6px rgba(30,64,175,0.07)",
    marginTop: "auto",
    display: "inline-block",
    border: "none",
    cursor: "pointer",
  },
  // Responsive overrides
  '@media (min-width: 600px)': {
    homeContainer: {
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 32,
      padding: "0 16px",
    },
    leftContent: {
      flex: "1 1 400px",
      minWidth: 320,
      maxWidth: 600,
      padding: "0 12px",
      marginBottom: 0,
    },
    rightContent: {
      flex: "1 1 320px",
      minWidth: 260,
      maxWidth: 400,
      margin: 0,
    },
    scrollingImages: {
      gap: 16,
    },
    scrollImage: {
      width: 180,
      height: 120,
    },
    notificationsContainer: {
      maxWidth: 900,
      padding: "24px 18px",
    },
    servicesContainer: {
      maxWidth: 1100,
      padding: "32px 18px",
    },
    servicesHeading: {
      fontSize: "1.7rem",
      marginBottom: 24,
    },
    cardsWrapper: {
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 28,
    },
    card: {
      minHeight: 240,
      padding: "24px 18px",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: 16,
    },
    notificationsHeading: {
      fontSize: "1.3rem",
      marginBottom: 12,
      textAlign: "center",
      width: "100%",
      display: "block",
    },
    cardTitle: {
      fontSize: "1.18rem",
      marginBottom: 10,
    },
    cardDesc: {
      fontSize: "1.01rem",
      marginBottom: 18,
    },
    readMoreBtn: {
      fontSize: "1rem",
      padding: "8px 20px",
    },
  },
};

function useMobileFirstStyles() {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" && window.matchMedia("(min-width: 600px)").matches
  );
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 600px)");
    const handler = e => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  function getStyle(key) {
    const base = mobileFirstStyles[key] || {};
    const desktop = isDesktop && mobileFirstStyles['@media (min-width: 600px)'][key]
      ? mobileFirstStyles['@media (min-width: 600px)'][key]
      : {};
    return { ...base, ...desktop };
  }
  return getStyle;
}

const Home = () => {
  const getStyle = useMobileFirstStyles();

  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <div className="home-page-container" style={getStyle("homePage")}>
      {/* Internal CSS for scrollbar and focus/hover */}
      <style>{`
        .scrolling-images::-webkit-scrollbar {
          height: 6px;
        }
        .scrolling-images::-webkit-scrollbar-thumb {
          background: #e3e3e3;
          border-radius: 3px;
        }
        .read-more-btn:focus {
          outline: 2px solid #1976d2;
        }
        .card:active, .card:focus-within {
          box-shadow: 0 4px 16px rgba(30,64,175,0.13);
        }
        @media (min-width: 600px) {
          .scrolling-images::-webkit-scrollbar {
            height: 8px;
          }
        }
      `}</style>
      {/* Hero/Scrolling Images Section - Enhanced UI/UX */}
      <div
        className="centered-image-container"
        style={{
          ...getStyle("scrollingImagesContainer"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%)",
          borderRadius: "1.2em",
          boxShadow: "0 4px 24px rgba(30,64,175,0.10)",
          margin: "24px auto 32px auto",
          padding: "18px 0",
          maxWidth: 900,
        }}
      >
        <div
          className="scrolling-images"
          style={{
            ...getStyle("scrollingImages"),
            display: "flex",
            gap: 24,
            overflowX: "auto",
            padding: "8px 0",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin",
            scrollbarColor: "#b3c6e0 #f0f4fa",
          }}
        >
          {[additionalImage, certificatesImage, additionalImage, certificatesImage].map((img, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                borderRadius: "1em",
                overflow: "hidden",
                minWidth: 180,
                maxWidth: 220,
                boxShadow: "0 2px 12px rgba(30,64,175,0.08)",
                background: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
                scrollSnapAlign: "center",
                cursor: "pointer",
              }}
              tabIndex={0}
              aria-label={idx % 2 === 0 ? "Campus image" : "Team image"}
              onFocus={e => e.currentTarget.style.boxShadow = "0 4px 24px #1976d233"}
              onBlur={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(30,64,175,0.08)"}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={img}
                alt={idx % 2 === 0 ? "Campus" : "Team"}
                className="home-scroll-images"
                style={{
                  ...getStyle("scrollImage"),
                  width: "100%",
                  height: 120,
                  objectFit: "cover",
                  borderRadius: "1em",
                  display: "block",
                  filter: "brightness(0.97) contrast(1.05)",
                  transition: "filter 0.2s",
                }}
                loading="lazy"
              />
              {/* Overlay for better visibility */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "linear-gradient(0deg, rgba(30,64,175,0.13) 70%, transparent 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.01rem",
                  padding: "8px 12px 6px 12px",
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 4px #1a237e33",
                  pointerEvents: "none",
                  borderBottomLeftRadius: "1em",
                  borderBottomRightRadius: "1em",
                  minHeight: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {idx % 2 === 0 ? "Campus" : "Team"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="home-container" style={getStyle("homeContainer")}>
        <div className="left-content" style={getStyle("leftContent")}>
          <h2 className="heading" style={getStyle("heading")}>
            <MemoryIcon style={getStyle("headingIcon")} />
            Digital Monitoring Cell (DMC) - JNTUGV
          </h2>
          <p style={getStyle("leftPara")}>
            The <b>JNTUGV Digital Monitoring Cell (DMC)</b> is established to maintain and monitor the IT infrastructure of the University, playing a pivotal role in University digitization. The DMC oversees the management, maintenance, and security of digital infrastructure, ensuring efficient and secure functioning of digital systems. By proactively monitoring networks, servers, databases, and applications, the DMC minimizes downtime and disruptions, optimizing organizational efficiency.
            </p>
        </div>
        <div className="right-content" style={getStyle("rightContent")}>
          <img
            src={dmcImage}
            alt="DMC"
            style={getStyle("dmcImage")}
            loading="lazy"
          />
        </div>
      </div>

      {/* Notifications Section  */}
      <div className="notifications-Container" style={getStyle("notificationsContainer")}>
        <h3 className="notificationsheading" style={getStyle("notificationsHeading")}>
          <i className="fa-solid fa-bell" style={{ color: "#1976d2" }}></i>
          Latest Notifications
        </h3>
        <div className="notifications" style={getStyle("notifications")}>
          <NotificationsScrolling />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container" style={getStyle("servicesContainer")}>
        <h2 className="services" style={getStyle("servicesHeading")}>
          <i className="fa-solid fa-gears" style={{ marginRight: 8, color: "#1976d2" }}></i>
          Services
        </h2>
        <div className="cards-wrapper" style={getStyle("cardsWrapper")}>
          {serviceCards.map((card, idx) => (
            <div
              className="card"
              key={idx}
              style={getStyle("card")}
              tabIndex={0}
            >
              <div style={getStyle("cardIcon")}>{card.icon}</div>
              <h3 style={getStyle("cardTitle")}>{card.title}</h3>
              <p style={getStyle("cardDesc")}>{card.desc}</p>
              <Link
                to={card.link}
                className="read-more-btn"
                style={{
                  ...getStyle("readMoreBtn"),
                  background: hoveredIdx === idx ? "#1565c0" : "#1976d2",
                }}
                onMouseOver={() => setHoveredIdx(idx)}
                onFocus={() => setHoveredIdx(idx)}
                onMouseOut={() => setHoveredIdx(null)}
                onBlur={() => setHoveredIdx(null)}
                tabIndex={0}
                aria-label={`Read more about ${card.title}`}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
