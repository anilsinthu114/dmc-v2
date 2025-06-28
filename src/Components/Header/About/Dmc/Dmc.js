import Typography from "@mui/material/Typography";
import React from "react";
import "../About.css";

function Dmc() {
  return (
    <div className="allRightContent">
      <div className="allRightContentProfile">
        <div className="allRightContentHeading">About DMC Cell</div>
        <hr />
        <Typography className="Text" paragraph>
          The Digital Monitoring Cell (DMC) is a dedicated team responsible for overseeing and managing digital activities within the institution. Its primary functions include monitoring the college's online presence across platforms such as websites and social media to ensure compliance with institutional policies, promote positive engagement, and address concerns raised by students, faculty, or the public.
        </Typography>
        <Typography className="Text" paragraph>
          The DMC also safeguards the college's digital infrastructure and information systems by implementing cybersecurity measures to protect sensitive data and mitigate potential threats. Additionally, the cell provides support and guidance to students and faculty on best practices for digital communication, online safety, and responsible use of technology. Overall, the DMC plays a vital role in maintaining a secure and positive digital environment within the college community.
        </Typography>
        <Typography className="Text" component="ul" style={{ paddingLeft: 24 }}>
          <li>
            DMC offers technical support for various university systems, including the surveillance system, network infrastructure, and firewall management, ensuring the smooth operation and security of critical university assets.
          </li>
          <li>
            DMC provides office support services to all university departments, assisting with digital tools, software, and troubleshooting technical issues to facilitate efficient administrative operations.
          </li>
          <li>
            DMC offers technical support for all virtual meetings conducted by the university, ensuring seamless connectivity, audiovisual equipment functionality, and troubleshooting any technical glitches that may arise during meetings.
          </li>
          <li>
            DMC facilitates the sharing of internet facilities within the university, optimizing resources and reducing costs.
          </li>
          <li>
            DMC has developed a custom e-ticketing tool called "JNTUK E-Ticket," designed to streamline the process of receiving and monitoring service requests related to DMC. This tool enhances efficiency and transparency in handling day-to-day service requests and issue resolution.
          </li>
        </Typography>
      </div>
    </div>
  );
}

export default Dmc;
