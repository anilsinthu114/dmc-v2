import React from "react";
import Typography from "@mui/material/Typography";
import "../About.css";

const facilitiesData = [
  {
    title: "Technical Support Services",
    icon: "🛠️",
    points: [
      "Provision of technical support for various university systems, including network infrastructure, servers, software applications, and digital tools.",
      "Assistance with troubleshooting technical issues, resolving software glitches, and optimizing system performance to enhance user experience and productivity.",
    ],
  },
  {
    title: "Cybersecurity Measures",
    icon: "🔒",
    points: [
      "Implementation of cybersecurity measures to protect the college's digital assets and information from cyber threats, including malware, phishing attacks, and data breaches.",
      "Deployment of firewalls, antivirus software, intrusion detection systems, and other security solutions to safeguard sensitive data and ensure compliance with data protection regulations.",
    ],
  },
  {
    title: "Network Infrastructure Management",
    icon: "🌐",
    points: [
      "Management and maintenance of the college's network infrastructure, including routers, switches, wireless access points, and internet connectivity.",
      "Monitoring network traffic, bandwidth usage, and performance metrics to ensure reliable and efficient network operation for users across the campus.",
    ],
  },
  {
    title: "Surveillance and Monitoring Systems",
    icon: "🎥",
    points: [
      "Installation and management of surveillance cameras and monitoring systems to enhance campus security and safety.",
      "Monitoring physical spaces, such as classrooms, laboratories, and common areas, to deter unauthorized access, prevent vandalism, and respond to security incidents effectively.",
    ],
  },
  {
    title: "Digital Communication Tools",
    icon: "💬",
    points: [
      "Provision of digital communication tools and platforms, such as email services, messaging applications, and video conferencing software, to facilitate communication and collaboration among students, faculty, and staff.",
      "Training and support for using digital communication tools effectively, ensuring seamless connectivity and information exchange within the college community.",
    ],
  },
  {
    title: "Internet Facilities and Connectivity",
    icon: "📶",
    points: [
      "Provision of high-speed internet facilities and connectivity services to support academic and administrative activities across the campus.",
      "Management of internet bandwidth, traffic shaping, and access controls to optimize network performance and ensure equitable access for all users.",
    ],
  },
  {
    title: "E-Ticketing and Service Requests",
    icon: "🎫",
    points: [
      "Development and deployment of e-ticketing systems and service request portals to streamline the process of reporting technical issues, requesting assistance, and tracking the status of service tickets.",
      "Efficient handling and resolution of service requests related to IT support, infrastructure maintenance, and digital services offered by the college.",
    ],
  },
  {
    title: "Training and Awareness Programs",
    icon: "📚",
    points: [
      "Organization of training sessions, workshops, and awareness programs on cybersecurity best practices, digital literacy, and responsible use of technology for students, faculty, and staff.",
      "Promotion of a culture of cybersecurity awareness and compliance within the college community to mitigate risks and protect against cyber threats.",
    ],
  },
];

function Facilities() {
  return (
    <div className="allRightContent">
      <div className="allRightContentProfile">
        <div className="allRightContentHeading">DMC Facilities</div>
        <hr />
        <Typography className="Text" paragraph>
          The Digital Monitoring Cell (DMC) provides a range of facilities to ensure a secure, efficient, and productive digital environment for students, faculty, staff, and stakeholders. Below are the key facilities offered:
        </Typography>
        <div style={{ marginTop: 24 }}>
          {facilitiesData.map((facility, idx) => (
            <div
              key={facility.title}
              style={{
                background: "#f8f9fa",
                borderRadius: 12,
                marginBottom: 24,
                padding: "20px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s",
              }}
              className="facility-card"
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 28,
                    marginRight: 12,
                    lineHeight: 1,
                  }}
                  aria-label="facility-icon"
                >
                  {facility.icon}
                </span>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#2d3a4b" }}>
                  {idx + 1}. {facility.title}
                </Typography>
              </div>
              <ul style={{ margin: 0, paddingLeft: 28 }}>
                {facility.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 6,
                      fontSize: "1rem",
                      color: "#444",
                      lineHeight: 1.7,
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilities;
