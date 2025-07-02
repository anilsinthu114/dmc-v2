import React from "react";
import { FaCloud, FaFingerprint, FaLinux, FaNetworkWired, FaWindows } from "react-icons/fa";
import { MdOutlineThumbUp } from "react-icons/md";
import "./Services.css";

const hardwareFeatures = [
  {
    icon: <FaCloud className="hardware-icon" />,
    title: "Cloud Servers",
    desc: "Scalable and secure cloud-based servers for hosting applications, data, and services with high availability."
  },
  {
    icon: <FaFingerprint className="hardware-icon" />,
    title: "Facial Attendance Registration",
    desc: "Advanced biometric systems for facial recognition-based attendance, ensuring secure and contactless access."
  },
  {
    icon: <MdOutlineThumbUp className="hardware-icon" />,
    title: "Thumb Attendance Registration",
    desc: "Fingerprint and thumbprint devices for accurate and efficient attendance tracking and access control."
  },
  {
    icon: <FaWindows className="hardware-icon" />,
    title: "Windows Server",
    desc: "Robust Windows Server solutions for enterprise-grade networking, file sharing, and application hosting."
  },
  {
    icon: <FaLinux className="hardware-icon" />,
    title: "Ubuntu Intel Server",
    desc: "Reliable Ubuntu-based Intel servers for open-source, high-performance computing and flexible deployments."
  },
  {
    icon: <FaNetworkWired className="hardware-icon" />,
    title: "Networking",
    desc: "Comprehensive networking equipment and solutions, including routers, switches, and adapters for seamless connectivity."
  }
];

const Hardware = () => {
  return (
    <div className="class-service enhanced-service-container">
      <div className="hardware-header">
        <FaCloud style={{ fontSize: 48, color: "#1976d2", marginRight: 12, verticalAlign: "middle" }} />
        <h2 className="heading-service" style={{ display: "inline-block", verticalAlign: "middle" }}>
          Hardware
        </h2>
      </div>
      <p className="matter-service" style={{ marginBottom: 32, fontSize: "1.1rem", color: "#333" }}>
        Our hardware solutions encompass modern cloud servers, biometric attendance systems (facial and thumb), Windows and Ubuntu Intel servers, and advanced networking equipment. We provide the essential infrastructure to power your business, ensuring security, reliability, and seamless connectivity.
      </p>
      <div className="hardware-features-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "24px"
      }}>
        {hardwareFeatures.map((feature, idx) => (
          <div className="hardware-feature-card" key={idx} style={{
            background: "#f5f7fa",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            textAlign: "center"
          }}>
            {feature.icon}
            <h3 style={{ margin: "16px 0 8px 0", fontSize: "1.15rem", color: "#1976d2" }}>{feature.title}</h3>
            <p style={{ color: "#444", fontSize: "1rem" }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hardware;
