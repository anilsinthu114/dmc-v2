import GavelIcon from "@mui/icons-material/Gavel";
import LanIcon from "@mui/icons-material/Lan";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WebIcon from "@mui/icons-material/Web";
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";

const activitiesData = [
  {
    title: "Surveillance and Security Monitoring",
    icon: <SecurityIcon color="primary" />,
    points: [
      "Monitoring the college's digital infrastructure, including networks, servers, and databases, to detect and prevent security breaches, unauthorized access, and malicious activities.",
      "Implementing and managing surveillance systems to monitor physical spaces within the college campus, such as classrooms, laboratories, and common areas, to enhance safety and security.",
    ],
  },
  {
    title: "Network and System Administration",
    icon: <LanIcon color="primary" />,
    points: [
      "Managing and maintaining the college's network infrastructure, including routers, switches, firewalls, and access points, to ensure reliable and secure connectivity for users.",
      "Performing regular maintenance tasks, such as software updates, patch management, and system backups, to keep the college's digital systems up and running smoothly.",
    ],
  },
  {
    title: "Cybersecurity Measures",
    icon: <ShieldIcon color="primary" />,
    points: [
      "Implementing cybersecurity measures, such as encryption, intrusion detection systems, and antivirus software, to safeguard sensitive data and protect against cyber threats, including malware, phishing, and ransomware attacks.",
      "Conducting security audits and risk assessments to identify vulnerabilities and develop strategies to mitigate potential risks to the college's digital assets.",
    ],
  },
  {
    title: "Digital Content Management",
    icon: <WebIcon color="primary" />,
    points: [
      "Managing and updating the college's website, social media accounts, and other digital platforms to ensure accurate and up-to-date information for students, faculty, staff, and the public.",
      "Developing and implementing content management policies and guidelines to maintain consistency, quality, and accessibility of digital content across various channels.",
    ],
  },
  {
    title: "User Support and Training",
    icon: <SupportAgentIcon color="primary" />,
    points: [
      "Providing technical support and assistance to students, faculty, and staff on digital tools, software applications, and online resources available within the college.",
      "Conducting training sessions and workshops to educate users about cybersecurity best practices, digital literacy, and responsible use of technology to promote a safe and secure computing environment.",
    ],
  },
  {
    title: "Incident Response and Resolution",
    icon: <ReportProblemIcon color="primary" />,
    points: [
      "Responding to incidents, such as system outages, security breaches, and data breaches, in a timely and efficient manner to minimize disruption and mitigate potential damages.",
      "Investigating security incidents and conducting forensic analysis to determine the root cause, assess the impact, and implement corrective actions to prevent recurrence.",
    ],
  },
  {
    title: "Compliance and Policy Enforcement",
    icon: <GavelIcon color="primary" />,
    points: [
      "Ensuring compliance with relevant laws, regulations, and college policies governing data privacy, security, and information technology usage.",
      "Enforcing IT security policies, procedures, and guidelines to promote responsible behavior and accountability among users and stakeholders.",
    ],
  },
];

function Activities() {
  return (
    <Box className="allRightContent" sx={{ background: "#fff", borderRadius: 3, boxShadow: 2, p: { xs: 2, sm: 4 }, maxWidth: 900, mx: "auto" }}>
      <Paper elevation={0} sx={{ p: { xs: 1, sm: 2 }, background: "transparent" }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1, color: "#0b3d91" }}>
          DMC Activities
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          The Digital Monitoring Cell (DMC) in a college undertakes a variety of tasks to ensure the effective management and security of digital resources and information within the institution. Below are the key activities of the DMC:
        </Typography>
        <List sx={{ width: "100%" }}>
          {activitiesData.map((activity, idx) => (
            <Box key={activity.title} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 38 }}>{activity.icon}</ListItemIcon>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a237e" }}>
                  {idx + 1}. {activity.title}
                </Typography>
              </Box>
              <List dense disablePadding>
                {activity.points.map((point, i) => (
                  <ListItem key={i} sx={{ pl: 5, alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                      <span style={{ color: "#0b3d91", fontWeight: "bold" }}>•</span>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ color: "#444", lineHeight: 1.7 }}>
                          {point}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Activities;
