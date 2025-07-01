import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
        <Grid
          container
          spacing={3}
          style={{ marginTop: 24 }}
          justifyContent="center"
        >
          {facilitiesData.map((facility, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={facility.title}
              style={{ display: "flex" }}
            >
              <Card
                className="facility-card"
                style={{
                  background: "#f8f9fa",
                  borderRadius: 14,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s",
                  minHeight: 220,
                }}
                elevation={2}
              >
                <CardContent style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 32,
                        marginRight: 14,
                        lineHeight: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#e3f2fd",
                        borderRadius: "50%",
                        width: 44,
                        height: 44,
                        boxShadow: "0 1px 4px #e3f2fd",
                      }}
                      aria-label="facility-icon"
                    >
                      {facility.icon}
                    </span>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        color: "#0b3d91",
                        fontSize: "1.13rem",
                        flex: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {idx + 1}. {facility.title}
                    </Typography>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20, paddingRight: 0 }}>
                    {facility.points.map((point, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: 7,
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: 1.7,
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Facilities;
