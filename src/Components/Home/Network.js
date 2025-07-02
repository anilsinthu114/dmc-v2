import WifiIcon from "@mui/icons-material/Wifi";
import React from "react";

// Import network-related images
const connectivity = "https://via.placeholder.com/220x140?text=Connectivity";
const networkInfrastructure = "https://via.placeholder.com/620x320?text=Network+Infrastructure";
const performance = "https://via.placeholder.com/220x140?text=Performance";
const security = "https://via.placeholder.com/220x140?text=Security";

const Network = () => {
  // Enhanced and responsive styles
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 8px 32px 8px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    // background: "linear-gradient(120deg, #f8f9fa 60%, #e3e6f3 100%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const cardStyle = {
    // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "28px",
    padding: "40px 28px 48px 28px",
    // boxShadow: "0 12px 36px rgba(76, 81, 255, 0.13), 0 2px 8px rgba(0,0,0,0.07)",
    color:'black',
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    margin: "32px 0",
    transition: "box-shadow 0.3s",
  };

  const headingStyle = {
    fontSize: "clamp(2.1rem, 5vw, 3.7rem)",
    fontWeight: "800",
    marginBottom: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.18)",
    letterSpacing: "0.5px",
    lineHeight: 1.1,
  };

  const iconStyle = {
    fontSize: "clamp(2.7rem, 6vw, 4.2rem)",
    color: "#ffe066",
    filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.22))",
    background: "rgba(255,255,255,0.13)",
    borderRadius: "50%",
    padding: "0.3em",
  };

  const contentStyle = {
    fontSize: "clamp(1.05rem, 2.5vw, 1.22rem)",
    lineHeight: 1.85,
    maxWidth: "850px",
    margin: "0 auto 18px auto",
    textAlign: "justify",
    textShadow: "1px 1px 2px rgba(0,0,0,0.13)",
        letterSpacing: "0.01em",
  };

  const highlightStyle = {
    // background: "linear-gradient(90deg, #ffd700 60%, #fffbe7 100%)",
    color: "black",
    padding: "2px 10px",
    borderRadius: "16px",
    fontWeight: "700",
    boxShadow: "0 1px 4px rgba(255,215,0,0.08)",
    margin: "0 2px",
    display: "inline-block",
  };

  const responsiveGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px",
    marginTop: "44px",
    width: "100%",
  };

  const featureCardStyle = {
    // background: "rgba(255,255,255,0.13)",
    borderRadius: "18px",
    padding: "28px 18px 22px 18px",
    backdropFilter: "blur(8px)",
    border: "1.5px solid rgba(255,255,255,0.22)",
    transition: "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s",
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(118,75,162,0.10)",
    position: "relative",
    overflow: "hidden",
  };

  const featureCardHover = {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.13)",
    zIndex: 2,
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "18px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
    border: "2px solid #fff3",
    transition: "transform 0.2s",
  };

  const heroImageStyle = {
    width: "100%",
    background: "#f8f9fa",
    maxWidth: "620px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "18px",
    margin: "24px auto 32px auto",
    display: "block",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    border: "2.5px solid #fff3",
  };

  // For hover effect on feature cards
  const [hovered, setHovered] = React.useState(-1);

  // Responsive: adjust padding for mobile
  const isMobile = window.innerWidth <= 600;
  if (isMobile) {
    cardStyle.padding = "18px 4px 24px 4px";
    heroImageStyle.height = "180px";
    heroImageStyle.maxWidth = "98vw";
    headingStyle.fontSize = "2rem";
    contentStyle.fontSize = "1rem";
    responsiveGrid.gap = "18px";
    featureCardStyle.padding = "16px 6px 12px 6px";
    imageStyle.height = "110px";
  }

  return (
      <div style={cardStyle}>
        <h2 style={headingStyle}>
          <WifiIcon style={iconStyle} />
          <span>Network Infrastructure</span>
        </h2>
        {/* Hero Image */}
        <img
          src={networkInfrastructure}
          alt="Network Infrastructure"
          style={heroImageStyle}
          loading="lazy"
        />

        <p style={contentStyle}>
          A <span style={highlightStyle}>network</span> is a sophisticated system of interconnected devices or nodes that
          communicate and share resources seamlessly. It enables efficient data transmission and
          access to shared services such as <span style={highlightStyle}>internet connectivity</span>,
          <span style={highlightStyle}>file sharing</span>, and <span style={highlightStyle}>printing</span>.
          Networks can be categorized based on their geographic scope, from
          <span style={highlightStyle}>Local Area Networks (LANs)</span> confined to a small area like a
          home or office, to <span style={highlightStyle}>Wide Area Networks (WANs)</span> spanning large distances,
          such as the internet. Various network technologies, including
          <span style={highlightStyle}>Ethernet</span>, <span style={highlightStyle}>Wi-Fi</span>, and
          <span style={highlightStyle}>cellular networks</span>, facilitate communication
          between devices, supporting a wide range of applications and services
          essential for modern computing and communication.
        </p>

        <div style={responsiveGrid}>
          {[
            {
              img: connectivity,
              alt: "Network Connectivity",
              icon: "🌐",
              title: "Connectivity",
              desc: "Seamless internet access and data transmission across all connected devices.",
            },
            {
              img: security,
              alt: "Network Security",
              icon: "🔒",
              title: "Security",
              desc: "Advanced security protocols to protect data and maintain network integrity.",
            },
            {
              img: performance,
              alt: "Network Performance",
              icon: "⚡",
              title: "Performance",
              desc: "High-speed data transfer and optimized network performance for all users.",
            },
          ].map((feature, idx) => (
            <div
              key={feature.title}
              style={{
                ...featureCardStyle,
                ...(hovered === idx ? featureCardHover : {}),
              }}
              tabIndex={0}
              aria-label={feature.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(-1)}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(-1)}
            >
              <img
                src={feature.img}
                alt={feature.alt}
                style={{
                  ...imageStyle,
                  transform: hovered === idx ? "scale(1.04)" : "scale(1)",
                }}
                loading="lazy"
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  justifyContent: "center",
                  textShadow: "1px 1px 4px #5a3e9b33",
                }}
              >
                <span style={{ fontSize: "1.3em" }}>{feature.icon}</span>
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.99rem",
                  lineHeight: "1.7",
                  textShadow: "0 1px 2px #5a3e9b22",
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Network;
