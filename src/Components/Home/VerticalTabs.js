import '@fortawesome/fontawesome-free/css/all.css';
import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

const navLinks = [
  [
    {
      to: "/about-us/about-iqac",
      label: "About IQAC",
      icon: "fa-solid fa-circle-info"
    },
    {
      to: "/about-us/about-jntugv",
      label: "About JNTUGV",
      icon: "fa-solid fa-university"
    },
    {
      to: "/about-us/about-iqac",
      label: "Institutional Information for Quality Assessment (IIQA)",
      icon: "fa-solid fa-file-alt"
    },
    {
      to: "/about-faculty-awards",
      label: "Faculty Awards",
      icon: "fa-solid fa-award"
    },
    {
      to: "/about-strategies",
      label: "IQAC Strategies & Objectives",
      icon: "fa-solid fa-bullseye"
    },
    {
      to: "/about-vision-mission",
      label: "The JNTU-GV University Vision & Mission",
      icon: "fa-solid fa-eye"
    },
    {
      to: "/about-functions",
      label: "IQAC Functions",
      icon: "fa-solid fa-cogs"
    }
  ],
  [
    {
      to: "/about-benefits",
      label: "IQAC Benefits",
      icon: "fa-solid fa-thumbs-up"
    },
    {
      to: "/about-course-details/about-ug-syllabus",
      label: "Syllabus",
      icon: "fa-solid fa-book"
    },
    {
      to: "/feedbackforms/faculty-form",
      label: "Feedback details of curriculum",
      icon: "fa-solid fa-comments"
    },
    {
      to: "/AQAR",
      label: "Annual Quality Assurance Report",
      icon: "fa-solid fa-calendar-check"
    },
    {
      to: "/about-consulty-services",
      label: "Rules for Consultancy Services",
      icon: "fa-solid fa-gavel"
    },
    {
      to: "/about-operational",
      label: "Operational Features of IQAC",
      icon: "fa-solid fa-sliders-h"
    },
    {
      to: "/about-monitoring",
      label: "Monitoring Mechanism",
      icon: "fa-solid fa-chart-line"
    },
    {
      to: "/about-aicte-approvals",
      label: "AICTE Approvals",
      icon: "fa-solid fa-certificate"
    }
  ]
];

function Home() {
  return (
    <div className="ABOUTmainContainer" style={{ background: "#f7fafd", minHeight: "100vh" }}>
      <div className="allRightContent" style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 0" }}>
        <div className="allRightContentHeading" style={{
          fontSize: "2rem",
          color: "#1976d2",
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 8,
          textAlign: "center"
        }}>
          <i className="fa-solid fa-shield-halved" style={{ marginRight: 10, color: "#1565c0" }}></i>
          Internal Quality Assurance Cell [IQAC]
        </div>
        <div className="allRightContentProfile" style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(30,64,175,0.07)",
          padding: "32px 24px",
          marginTop: 16
        }}>
          <hr style={{ border: "none", borderTop: "2px solid #e3e3e3", margin: "0 0 24px 0" }} />
          <div className="columns-container" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center"
          }}>
            {navLinks.map((column, colIdx) => (
              <div className="column" key={colIdx} style={{
                flex: "1 1 320px",
                minWidth: 260,
                maxWidth: 400
              }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {column.map((item, idx) => (
                    <li key={item.to} style={{ marginBottom: 18 }}>
                      <Link
                        to={item.to}
                        className="nav-link"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px 18px",
                          borderRadius: 8,
                          background: "#f0f6ff",
                          color: "#1e3a8a",
                          fontWeight: 500,
                          fontSize: "1.07rem",
                          textDecoration: "none",
                          boxShadow: "0 1px 4px rgba(30,64,175,0.04)",
                          transition: "background 0.18s, color 0.18s, box-shadow 0.18s"
                        }}
                        tabIndex={0}
                        aria-label={item.label}
                        onMouseOver={e => e.currentTarget.style.background = "#e3f2fd"}
                        onMouseOut={e => e.currentTarget.style.background = "#f0f6ff"}
                      >
                        <i className={`${item.icon} nav-link-icon`} style={{
                          fontSize: "1.25rem",
                          marginRight: 12,
                          color: "#1976d2"
                        }}></i>
                        <span>{item.label}</span>
                        <i className="fa-solid fa-chevron-right" style={{
                          marginLeft: "auto",
                          color: "#90caf9",
                          fontSize: "1rem"
                        }}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <br /><br />
        <div className="iqacMessageContainer" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div className="iqacMessage" style={{
            background: "#e3f2fd",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(30,64,175,0.08)",
            padding: "28px 32px",
            maxWidth: 600,
            textAlign: "center"
          }}>
            <p style={{
              fontWeight: 700,
              fontSize: "1.18rem",
              color: "#1976d2",
              marginBottom: 10,
              letterSpacing: 0.5
            }}>
              <i className="fa-solid fa-quote-left" style={{ color: "#90caf9", marginRight: 8 }}></i>
              IQAC Message
            </p>
            <p style={{
              fontSize: "1.08rem",
              color: "#333",
              marginBottom: 18,
              fontStyle: "italic"
            }}>
              "To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support."
            </p>
            <p className="signature" style={{
              color: "#1e40af",
              fontWeight: 600,
              fontSize: "1.05rem",
              marginTop: 10
            }}>
              Dr. K. Chandra Bhushana Rao<br />
              <span style={{
                fontWeight: 400,
                fontSize: "0.98rem",
                color: "#1976d2"
              }}>IQAC Coordinator</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
