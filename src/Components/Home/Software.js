import AppsIcon from "@mui/icons-material/Apps";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import React from "react";
import "./Services.css";

const features = [
  {
    icon: <ComputerIcon style={{ color: "#1976d2", fontSize: 36 }} />,
    title: "System Software",
    desc: "Manages core functions like operating systems and utilities, ensuring your device runs smoothly."
  },
  {
    icon: <AppsIcon style={{ color: "#388e3c", fontSize: 36 }} />,
    title: "Application Software",
    desc: "Tailored for specific tasks such as word processing, web browsing, and productivity."
  },
  {
    icon: <BuildCircleIcon style={{ color: "#fbc02d", fontSize: 36 }} />,
    title: "Development & Deployment",
    desc: "Involves coding, testing, and deploying software using agile, waterfall, and other methodologies."
  },
  {
    icon: <SecurityIcon style={{ color: "#d32f2f", fontSize: 36 }} />,
    title: "Maintenance & Security",
    desc: "Regular updates ensure functionality, security, and optimal performance."
  },
  {
    icon: <GavelIcon style={{ color: "#7b1fa2", fontSize: 36 }} />,
    title: "Legal & Licensing",
    desc: "Covers copyright, licensing, and distribution models like open-source, freeware, and commercial software."
  }
];

const Software = () => {
  return (
    <div className="class-service enhanced-service-container">
      <div className="software-header">
        <ComputerIcon style={{ fontSize: 48, color: "#1976d2", marginRight: 12 }} />
        <h2 className="heading-service" style={{ display: "inline-block", verticalAlign: "middle" }}>
          Software
        </h2>
      </div>
      <p className="matter-service" style={{ marginBottom: 32, fontSize: "1.1rem", color: "#333" }}>
        Software is the backbone of modern technology, enabling computers and devices to perform a vast array of tasks. From operating systems to specialized applications, software drives innovation, productivity, and the delivery of services in the digital age.
      </p>
      <div className="software-features-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "24px",
        marginBottom: "24px"
      }}>
        {features.map((feature, idx) => (
          <div key={idx} className="software-feature-card" style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            padding: "20px",
            textAlign: "center",
            transition: "box-shadow 0.2s",
            minHeight: "210px"
          }}>
            <div style={{ marginBottom: 12 }}>{feature.icon}</div>
            <h3 style={{ fontSize: "1.15rem", color: "#1976d2", marginBottom: 8 }}>{feature.title}</h3>
            <p style={{ fontSize: "0.98rem", color: "#444" }}>{feature.desc}</p>
          </div>
        ))}
      </div>
      <div style={{
        background: "#e3f2fd",
        borderRadius: "8px",
        padding: "18px 24px",
        textAlign: "center",
        color: "#1565c0",
        fontWeight: 500,
        fontSize: "1.05rem"
      }}>
        <span role="img" aria-label="info">💡</span> Software empowers every industry, from healthcare to education, and is essential for progress in our digital world.
      </div>
    </div>
  );
};

export default Software;
