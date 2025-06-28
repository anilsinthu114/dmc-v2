import React, { useState } from "react";
import { FaEnvelope, FaInfoCircle, FaLink, FaPhone } from "react-icons/fa";
import "./Supportingstaff.css";
import directorImage from "./designer.jpg";

// Data for websites
const websites = [
  {
    title: "Directorate of R&D Website",
    url: "https://drd.jntugv.edu.in",
    description:
      "The Research and Development portal showcases research activities, publications, and ongoing projects at JNTU-GV.",
  },
  {
    title: "Directorate of Academic Planning",
    url: "https://dap.jntugv.edu.in",
    description:
      "This portal manages academic calendars, curriculum development, and educational planning initiatives.",
  },
  {
    title: "Director of Industry Relations & Placements",
    url: "https://dirp.jntugv.edu.in",
    description:
      "Facilitates industry collaborations, internships, and placement activities for students.",
  },
  {
    title: "Director of Academic Audit",
    url: "https://daa.jntugv.edu.in",
    description:
      "Handles academic quality assurance and institutional assessment processes.",
  },
  {
    title: "IDEA Club",
    url: "https://ideaclub.jntugv.edu.in",
    description:
      "A platform for fostering innovation, creativity, and entrepreneurial thinking among students.",
  },
  {
    title: "Green Campus",
    url: "https://greencampus.jntugv.edu.in",
    description:
      "Highlights environmental initiatives and sustainability practices on campus.",
  },
  {
    title: "MoU's",
    url: "https://mou.jntugv.edu.in",
    description:
      "Documents partnerships and collaborations with other institutions and organizations.",
  },
  {
    title: "NSS",
    url: "https://nss.jntugv.edu.in",
    description:
      "National Service Scheme portal showcasing social service activities and community outreach programs.",
  },
  {
    title: "Events",
    url: "https://events.jntugv.edu.in",
    description:
      "Calendar and information about university events, conferences, and workshops.",
  },
  {
    title: "RTI",
    url: "https://rti.jntugv.edu.in",
    description:
      "Right to Information portal providing transparency in university administration.",
  },
];

function Supportingstaff() {
  // For email hover effect
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  // For phone copy feedback
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("7997446844");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="mainContainer allRightContent" style={{ maxWidth: 900, margin: "0 auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px 0 rgba(3,90,90,0.08)", padding: "32px 18px" }}>
      <div>
        <div className="allRightContentHeading" style={{ marginBottom: 0 }}>
          Web Designer of Digital Monitoring Cell
        </div>
        <div className="allRightContentProfile" style={{ marginTop: 18, marginBottom: 0, boxShadow: "none", background: "transparent" }}>
          <div className="ADimg" style={{ marginBottom: 0 }}>
            <img
              src={directorImage}
              alt="Mattaparthi Niranjan"
              style={{
                height: 220,
                width: 180,
                objectFit: "cover",
                borderRadius: 12,
                border: "2.5px solid #0b3d91",
                boxShadow: "0 2px 10px 0 rgba(11, 61, 145, 0.10)",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <div className="profileName">
              <h3 className="coh3" style={{ fontWeight: 700, color: "#035a5a", marginBottom: 4 }}>
                Mattaparthi Niranjan
              </h3>
            </div>
            <div className="profileDesignation">
              <h4 className="coh4" style={{ color: "#0b3d91", fontWeight: 500, fontSize: "1.08rem", margin: 0 }}>
                Web Designer of Digital Monitoring Cell
              </h4>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>
          <div
            className="coh4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "1.05rem",
              color: "#333",
              marginBottom: 4,
              cursor: "pointer",
              userSelect: "none",
              transition: "color 0.2s",
              position: "relative",
            }}
            title="Click to copy phone number"
            onClick={handleCopyPhone}
            tabIndex={0}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleCopyPhone(); }}
            aria-label="Copy phone number"
            role="button"
          >
            <FaPhone style={{ color: "#0b3d91" }} />
            <span>Contact No: <span style={{ fontWeight: 600, letterSpacing: 0.5 }}>7997446844</span></span>
            {copied && (
              <span style={{
                marginLeft: 10,
                color: "#0b3d91",
                fontWeight: 500,
                fontSize: "0.98rem",
                background: "#e3f2fd",
                borderRadius: 6,
                padding: "2px 8px",
                transition: "opacity 0.2s",
              }}>
                Copied!
              </span>
            )}
          </div>
          <div
            className="coh4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "1.05rem",
              color: "#333",
              marginBottom: 4,
            }}
          >
            <FaEnvelope style={{ color: "#0b3d91" }} />
            <span>
              Email:{" "}
              <a
                href="mailto:webdesignerdmc@jntugv.edu.in"
                style={{
                  color: isEmailHovered ? "#0b3d91" : "#1a73e8",
                  textDecoration: isEmailHovered ? "underline" : "none",
                  fontWeight: 600,
                  transition: "color 0.2s, text-decoration 0.2s",
                }}
                onMouseOver={() => setIsEmailHovered(true)}
                onFocus={() => setIsEmailHovered(true)}
                onMouseOut={() => setIsEmailHovered(false)}
                onBlur={() => setIsEmailHovered(false)}
                aria-label="Send email to webdesignerdmc@jntugv.edu.in"
              >
                webdesignerdmc@jntugv.edu.in
              </a>
            </span>
          </div>
        </div>
        <hr style={{ margin: "18px 0 10px 0", border: "none", borderTop: "1.5px solid #e0e7ef" }} />
      </div>
      <div>
        <p className="ADsub" style={{ marginTop: 0, marginBottom: 18, fontSize: "1.18rem", color: "#035a5a" }}>
          Websites Designed
        </p>
        <div className="websitesList" style={{ margin: "0 auto", background: "#f4f8fb", borderRadius: 10, boxShadow: "0 1px 6px 0 rgba(3,90,90,0.06)", padding: "24px 18px", maxWidth: 700 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {websites.map((site, idx) => (
              <li
                key={site.url}
                style={{
                  marginBottom: idx === websites.length - 1 ? 0 : 22,
                  paddingBottom: idx === websites.length - 1 ? 0 : 10,
                  borderBottom: idx === websites.length - 1 ? "none" : "1px solid #e0e7ef",
                  transition: "background 0.2s",
                  borderRadius: 8,
                  paddingLeft: 0,
                  paddingRight: 0,
                  position: "relative",
                }}
                tabIndex={0}
                aria-label={`${site.title}: ${site.url}`}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <FaLink style={{ color: "#035a5a", fontSize: "1.1em" }} />
                  <strong style={{ color: "#0b3d91", fontWeight: 600 }}>{site.title}:</strong>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0066cc",
                      textDecoration: "none",
                      fontWeight: 500,
                      marginLeft: 6,
                      wordBreak: "break-all",
                      transition: "color 0.2s, textDecoration: 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}
                  >
                    {site.url}
                  </a>
                </div>
                <p style={{
                  margin: "5px 0 0 28px",
                  color: "#444",
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 6
                }}>
                  <FaInfoCircle style={{ color: "#1a73e8", marginTop: 2 }} /> {site.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Supportingstaff;