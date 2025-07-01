import GavelIcon from "@mui/icons-material/Gavel";
import LanIcon from "@mui/icons-material/Lan";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WebIcon from "@mui/icons-material/Web";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Chip,
  Fade,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const activitiesData = [
  {
    title: "Surveillance and Security Monitoring",
    icon: <SecurityIcon color="primary" fontSize="large" />,
    points: [
      "Monitoring the college's digital infrastructure, including networks, servers, and databases, to detect and prevent security breaches, unauthorized access, and malicious activities.",
      "Implementing and managing surveillance systems to monitor physical spaces within the college campus, such as classrooms, laboratories, and common areas, to enhance safety and security.",
    ],
  },
  {
    title: "Network and System Administration",
    icon: <LanIcon color="primary" fontSize="large" />,
    points: [
      "Managing and maintaining the college's network infrastructure, including routers, switches, firewalls, and access points, to ensure reliable and secure connectivity for users.",
      "Performing regular maintenance tasks, such as software updates, patch management, and system backups, to keep the college's digital systems up and running smoothly.",
    ],
  },
  {
    title: "Cybersecurity Measures",
    icon: <ShieldIcon color="primary" fontSize="large" />,
    points: [
      "Implementing cybersecurity measures, such as encryption, intrusion detection systems, and antivirus software, to safeguard sensitive data and protect against cyber threats, including malware, phishing, and ransomware attacks.",
      "Conducting security audits and risk assessments to identify vulnerabilities and develop strategies to mitigate potential risks to the college's digital assets.",
    ],
  },
  {
    title: "Digital Content Management",
    icon: <WebIcon color="primary" fontSize="large" />,
    points: [
      "Managing and updating the college's website, social media accounts, and other digital platforms to ensure accurate and up-to-date information for students, faculty, staff, and the public.",
      "Developing and implementing content management policies and guidelines to maintain consistency, quality, and accessibility of digital content across various channels.",
    ],
  },
  {
    title: "User Support and Training",
    icon: <SupportAgentIcon color="primary" fontSize="large" />,
    points: [
      "Providing technical support and assistance to students, faculty, and staff on digital tools, software applications, and online resources available within the college.",
      "Conducting training sessions and workshops to educate users about cybersecurity best practices, digital literacy, and responsible use of technology to promote a safe and secure computing environment.",
    ],
  },
  {
    title: "Incident Response and Resolution",
    icon: <ReportProblemIcon color="primary" fontSize="large" />,
    points: [
      "Responding to incidents, such as system outages, security breaches, and data breaches, in a timely and efficient manner to minimize disruption and mitigate potential damages.",
      "Investigating security incidents and conducting forensic analysis to determine the root cause, assess the impact, and implement corrective actions to prevent recurrence.",
    ],
  },
  {
    title: "Compliance and Policy Enforcement",
    icon: <GavelIcon color="primary" fontSize="large" />,
    points: [
      "Ensuring compliance with relevant laws, regulations, and college policies governing data privacy, security, and information technology usage.",
      "Enforcing IT security policies, procedures, and guidelines to promote responsible behavior and accountability among users and stakeholders.",
    ],
  },
];

function Activities() {
  const theme = useTheme();

  return (
    <Box
      className="allRightContent"
      sx={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
        borderRadius: 4,
        boxShadow: 4,
        p: { xs: 2, sm: 4 },
        maxWidth: 900,
        mx: "auto",
        mt: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <img
          src="https://img.icons8.com/color/48/000000/monitor--v2.png"
          alt="DMC"
          style={{ width: 48, height: 48, marginRight: 12 }}
        />
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            color: "#0b3d91",
            letterSpacing: 1,
            textShadow: "0 2px 8px #e3f2fd",
          }}
        >
          DMC Activities
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          color: "#333",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          lineHeight: 1.7,
          background: "#f5faff",
          borderRadius: 2,
          p: 2,
          boxShadow: 1,
        }}
      >
        The <b>Digital Monitoring Cell (DMC)</b> in a college undertakes a variety of tasks to ensure the effective management and security of digital resources and information within the institution. Below are the key activities of the DMC:
      </Typography>
      {activitiesData.map((activity, idx) => (
        <Fade in timeout={400 + idx * 100} key={activity.title}>
          <Accordion
            disableGutters
            elevation={2}
            sx={{
              mb: 2,
              borderRadius: 2,
              background: "#f8fbff",
              boxShadow: "0 2px 8px #e3f2fd",
              "&:before": { display: "none" },
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 4px 16px #bbdefb",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1976d2" }} />}
              aria-controls={`panel${idx}-content`}
              id={`panel${idx}-header`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                minHeight: 64,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                {activity.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#1a237e",
                  flex: 1,
                  fontSize: { xs: "1.05rem", sm: "1.15rem" },
                }}
              >
                {idx + 1}. {activity.title}
              </Typography>
              <Chip
                label={`#${idx + 1}`}
                size="small"
                sx={{
                  background: "#e3f2fd",
                  color: "#1976d2",
                  fontWeight: 600,
                  ml: 1,
                }}
              />
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 2 }}>
              <List dense disablePadding>
                {activity.points.map((point, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      pl: 0,
                      alignItems: "flex-start",
                      mb: 1,
                      borderLeft: `4px solid ${theme.palette.primary.light}`,
                      background: "#f1f8ff",
                      borderRadius: 1,
                      boxShadow: 0,
                      transition: "background 0.2s",
                      "&:hover": {
                        background: "#e3f2fd",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <span
                        style={{
                          color: "#1976d2",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      >
                        •
                      </span>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#444",
                            lineHeight: 1.7,
                            fontSize: { xs: "0.98rem", sm: "1.05rem" },
                          }}
                        >
                          {point}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Fade>
      ))}
    </Box>
  );
}

export default Activities;
