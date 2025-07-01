import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LanIcon from "@mui/icons-material/Lan";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Typography from "@mui/material/Typography";
import React from "react";

function Dmc() {
  // Enhanced responsive and accessible styles
  const containerStyle = {
    background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(26,115,232,0.08)",
    padding: "32px 24px",
    maxWidth: 900,
    margin: "32px auto",
    fontFamily: "'Inter', 'Roboto', Arial, sans-serif",
    width: "100%",
  };

  const profileStyle = {
    background: "linear-gradient(90deg, #f5faff 0%, #e3f0ff 100%)",
    borderRadius: 12,
    padding: "28px 20px 20px 20px",
    boxShadow: "0 2px 8px #e3f2fd",
    marginBottom: 12,
  };

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
    color: "#0b3d91",
    letterSpacing: 1,
    marginBottom: 8,
    gap: 10,
    textShadow: "0 2px 8px #e3f2fd",
  };

  const hrStyle = {
    border: 0,
    borderTop: "2px solid #e0e7ef",
    borderRadius: 2,
    margin: "18px 0 24px 0",
  };

  const textStyle = {
    color: "#333",
    fontSize: "1.08rem",
    lineHeight: 1.7,
    paddingRight: "20px",
    
    marginBottom: 18,
    borderRadius: 8,
    padding: "14px 18px",
    boxShadow: "0 1px 4px #e3f2fd",
  };

  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
    marginTop: 8,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    background: "#f1f8ff",
    borderLeft: "4px solid #1976d2",
    borderRadius: 8,
    marginBottom: 14,
    padding: "12px 16px",
    boxShadow: "0 1px 4px #e3f2fd",
    transition: "background 0.2s, box-shadow 0.2s",
    fontSize: "1.04rem",
    color: "#222",
    gap: 14,
  };

  const iconStyle = {
    color: "#1976d2",
    fontSize: 28,
    marginTop: 2,
    flexShrink: 0,
    "aria-hidden": "true",
  };

  // Enhanced: Add aria-labels for accessibility, and split long text for readability
  const dmcList = [
    {
      icon: <SecurityIcon style={iconStyle} aria-label="Security and Surveillance" />,
      title: "Technical Support for University Systems",
      text: (
        <>
          DMC offers technical support for various university systems, including the surveillance system, network infrastructure, and firewall management. This ensures the smooth operation and security of critical university assets.
        </>
      ),
    },
    {
      icon: <SupportAgentIcon style={iconStyle} aria-label="Office Support" />,
      title: "Office Support Services",
      text: (
        <>
          DMC provides office support services to all university departments, assisting with digital tools, software, and troubleshooting technical issues to facilitate efficient administrative operations.
        </>
      ),
    },
    {
      icon: <MeetingRoomIcon style={iconStyle} aria-label="Virtual Meeting Support" />,
      title: "Virtual Meeting Support",
      text: (
        <>
          DMC offers technical support for all virtual meetings conducted by the university, ensuring seamless connectivity, audiovisual equipment functionality, and troubleshooting any technical glitches that may arise during meetings.
        </>
      ),
    },
    {
      icon: <LanIcon style={iconStyle} aria-label="Internet Facility Sharing" />,
      title: "Internet Facility Sharing",
      text: (
        <>
          DMC facilitates the sharing of internet facilities within the university, optimizing resources and reducing costs.
        </>
      ),
    },
    {
      icon: <ConfirmationNumberIcon style={iconStyle} aria-label="E-Ticketing Tool" />,
      title: "Custom E-Ticketing Tool",
      text: (
        <>
          DMC has developed a custom e-ticketing tool called <b>JNTUK E-Ticket</b>, designed to streamline the process of receiving and monitoring service requests related to DMC. This tool enhances efficiency and transparency in handling day-to-day service requests and issue resolution.
        </>
      ),
    },
  ];

  // Responsive enhancement: stack on small screens
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ ...containerStyle, padding: isMobile ? "16px 4vw" : containerStyle.padding }}>
      <div style={profileStyle}>
        <div style={headingStyle}>
          <InfoOutlinedIcon color="primary" fontSize="large" aria-hidden="true" />
          <span>About DMC Cell</span>
        </div>
        <hr style={hrStyle} />
        <Typography style={textStyle} paragraph>
          <b>Digital Monitoring Cell (DMC)</b> is a dedicated team responsible for overseeing and managing digital activities within the institution. Its primary functions include monitoring the college's online presence across platforms such as websites and social media to ensure compliance with institutional policies, promote positive engagement, and address concerns raised by students, faculty, or the public.
        </Typography>
        <Typography style={textStyle} paragraph>
          The DMC also safeguards the college's digital infrastructure and information systems by implementing cybersecurity measures to protect sensitive data and mitigate potential threats. Additionally, the cell provides support and guidance to students and faculty on best practices for digital communication, online safety, and responsible use of technology. Overall, the DMC plays a vital role in maintaining a secure and positive digital environment within the college community.
        </Typography>
        <ul style={listStyle} aria-label="DMC Key Functions">
          {dmcList.map((item, idx) => (
            <li key={idx} style={listItemStyle}>
              {item.icon}
              <div>
                <span style={{ fontWeight: 600, color: "#0b3d91", display: "block", marginBottom: 2 }}>
                  {item.title}
                </span>
                <span>{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dmc;