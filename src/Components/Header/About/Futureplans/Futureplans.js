import React from "react";
import { FaBullhorn, FaChartLine, FaChartPie, FaExclamationTriangle, FaLeaf, FaMobileAlt, FaNetworkWired, FaShieldAlt, FaSyncAlt, FaUsers } from "react-icons/fa";
import "../About.css";

const futurePlans = [
  {
    icon: <FaChartLine style={{ color: "#0b3d91" }} />,
    title: "Advanced Data Analysis",
    description:
      "Implement sophisticated data analysis techniques, including machine learning and predictive analytics, to derive meaningful insights and identify trends, patterns, and anomalies."
  },
  {
    icon: <FaShieldAlt style={{ color: "#035a5a" }} />,
    title: "Enhanced Security Measures",
    description:
      "Strengthen security with encryption protocols, access controls, and regular audits to protect sensitive data and ensure compliance with regulations."
  },
  {
    icon: <FaNetworkWired style={{ color: "#1a73e8" }} />,
    title: "Integration with IoT Devices",
    description:
      "Integrate Internet of Things (IoT) devices for real-time data collection from campus facilities, enabling proactive monitoring of equipment, energy usage, and environmental conditions."
  },
  {
    icon: <FaMobileAlt style={{ color: "#e67e22" }} />,
    title: "Mobile Application Development",
    description:
      "Develop a mobile app for students, faculty, and staff to access information, report incidents, and receive notifications, providing easy access to campus services and emergency alerts."
  },
  {
    icon: <FaUsers style={{ color: "#8e24aa" }} />,
    title: "Collaboration with Academic Departments",
    description:
      "Collaborate with academic departments to incorporate data-driven insights into curriculum, research, and student experiences, fostering interdisciplinary innovation."
  },
  {
    icon: <FaBullhorn style={{ color: "#d32f2f" }} />,
    title: "Community Engagement Initiatives",
    description:
      "Organize workshops, seminars, and campaigns to raise awareness about the digital monitoring cell, focusing on data privacy, cybersecurity, and digital literacy."
  },
  {
    icon: <FaSyncAlt style={{ color: "#388e3c" }} />,
    title: "Continuous Improvement and Feedback",
    description:
      "Establish feedback mechanisms such as surveys and focus groups to continuously improve services and address user concerns."
  },
  {
    icon: <FaExclamationTriangle style={{ color: "#fbc02d" }} />,
    title: "Emergency Response Planning",
    description:
      "Develop comprehensive emergency response protocols leveraging digital monitoring technologies, including real-time monitoring and automated alerting systems."
  },
  {
    icon: <FaChartPie style={{ color: "#1976d2" }} />,
    title: "Data Visualization and Reporting",
    description:
      "Invest in data visualization tools and dashboards to present monitoring data in an understandable format, facilitating decision-making and communication."
  },
  {
    icon: <FaLeaf style={{ color: "#43a047" }} />,
    title: "Sustainability Initiatives",
    description:
      "Leverage digital monitoring to support campus sustainability, monitoring energy usage, waste management, and environmental impacts to optimize resource efficiency."
  }
];

function Futureplans() {
  return (
    <div className="allRightContent">
      <div className="allRightContentProfile" style={{ paddingBottom: 0 }}>
        <div className="allRightContentHeading" tabIndex={0} aria-label="DMC Future Plans">
          DMC Future Plans
        </div>
        <hr className="dmc-divider" aria-hidden="true" />
        <p style={{
          fontSize: "1.08rem",
          color: "#2a3b4c",
          marginBottom: 24,
          lineHeight: 1.7,
          textAlign: "justify"
        }}>
          Planning the future of a Digital Monitoring Cell (DMC) involves strategic objectives to enhance its effectiveness and relevance. Below are key future plans envisioned for the DMC:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            maxWidth: 700,
            width: "100%"
          }}
        >
          {futurePlans.map((plan, idx) => (
            <li
              key={plan.title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 18,
                background: idx % 2 === 0 ? "#f5f7fa" : "#eaf1fb",
                borderRadius: 10,
                padding: "18px 18px 16px 18px",
                marginBottom: 16,
                boxShadow: "0 1px 6px 0 rgba(11,61,145,0.04)",
                border: "1px solid #e0e7ef",
                transition: "background 0.2s"
              }}
              tabIndex={0}
              aria-label={`${plan.title}: ${plan.description}`}
              onMouseOver={e => e.currentTarget.style.background = "#e3f2fd"}
              onMouseOut={e => e.currentTarget.style.background = idx % 2 === 0 ? "#f5f7fa" : "#eaf1fb"}
            >
              <div style={{
                minWidth: 38,
                minHeight: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.7em",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 1px 4px 0 rgba(11,61,145,0.07)"
              }}>
                {plan.icon}
              </div>
              <div>
                <div className="coh3" style={{ marginBottom: 4, fontSize: "1.13rem" }}>{plan.title}</div>
                <div style={{ color: "#444", fontSize: "1.01rem", lineHeight: 1.6 }}>
                  {plan.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}

export default Futureplans;
