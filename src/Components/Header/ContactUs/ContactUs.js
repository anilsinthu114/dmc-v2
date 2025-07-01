import React from "react";
import { FaBuilding, FaEnvelope, FaPhone, FaUserTie } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2 className="cd" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
        <span role="img" aria-label="Get in Touch" style={{ fontSize: "2rem" }}>📞</span>
        Get in Touch
      </h2>

      {/* Location + Coordinator Section */}
      <div className="contact-section" style={{ flexWrap: "wrap" 
      }}>
        <div className="contact-item" style={{ minWidth: 260, flex: 1, paddingRight: "10px" }}>
          <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaUserTie aria-hidden="true" style={{ color: "#1976d2", fontSize: "1.3em" }} />
            <span>Digital Monitoring Cell Co-ordinator</span>
            </h3>
          <h4 style={{ marginBottom: 8, fontWeight: 700, color: "#0b3d91" }}>Mr. Anil Wurity</h4>
          <p style={{ marginBottom: 2 }}>
            Assistant Professor,
            <br />
            Information Technology Department
          </p>
          <p style={{ marginBottom: 10 }}>JNTU-GV College of Engineering</p>

          <div
            style={{
              borderRadius: 14,
              padding: "20px 20px 18px 20px",
              margin: "18px 0 18px 0",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              // background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
              boxShadow: "0 2px 12px rgba(26,115,232,0.07)",
            }}
          >
            {/* Contact Number */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                transition: "background 0.2s",
                borderRadius: 8,
                padding: "8px 0",
                cursor: "pointer",
              }}
              tabIndex={0}
              role="button"
              aria-label="Call +91 85006 69667"
              onClick={() => window.open("tel:+918500669667")}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") window.open("tel:+918500669667");
              }}
              title="Call"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4em",
                  boxShadow: "0 2px 8px #e3f2fd",
                  transition: "background 0.2s",
                }}
              >
                <FaPhone aria-hidden="true" />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#0b3d91",
                    fontSize: "1.09em",
                  }}
                >
                  Contact Number
                </div>
                <a
                  href="tel:+918500669667"
                  style={{
                    fontSize: "1.09em",
                    color: "#1976d2",
                    fontWeight: 500,
                    textDecoration: "none",
                    letterSpacing: 0.1,
                  }}
                  tabIndex={-1}
                >
                  +91 85006 69667
                </a>
              </div>
            </div>
            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                transition: "background 0.2s",
                borderRadius: 8,
                padding: "8px 0",
                cursor: "pointer",
              }}
              tabIndex={0}
              role="button"
              aria-label="Email dmc@jntugv.edu.in"
              onClick={() => window.open("mailto:dmc@jntugv.edu.in")}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") window.open("mailto:dmc@jntugv.edu.in");
              }}
              title="Send Email"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4em",
                  boxShadow: "0 2px 8px #e3f2fd",
                  transition: "background 0.2s",
                }}
              >
                <FaEnvelope aria-hidden="true" />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#0b3d91",
                    fontSize: "1.09em",
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:dmc@jntugv.edu.in"
                  style={{
                    color: "#1976d2",
                    textDecoration: "underline",
                    fontSize: "1.09em",
                    fontWeight: 500,
                    letterSpacing: 0.1,
                  }}
                  tabIndex={-1}
                >
                  dmc@jntugv.edu.in
                </a>
              </div>
            </div>
            {/* Office Location */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                borderRadius: 8,
                padding: "8px 0",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4em",
                  boxShadow: "0 2px 8px #e3f2fd",
                  marginTop: 2,
                  transition: "background 0.2s",
                }}
              >
                <FaBuilding aria-hidden="true" />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#0b3d91",
                    fontSize: "1.09em",
                    marginBottom: 2,
                  }}
                >
                  Office Location
                </div>
                <div
                  style={{
                    color: "#222",
                    fontSize: "1.04em",
                    lineHeight: 1.7,
                  }}
                >
                  DMC Office, Second Floor, Academic Block-1,
                  <br />
                  JNTU-GV College of Engineering, Vizianagaram
                  <br />
                  <strong>
                    Jawaharlal Nehru Technological University Gurajada Vizianagaram
                    <br />
                    NH 43, Dwarapudi (Post), Andhra Pradesh,
                  </strong>
                  535003
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced Map Section */}
        <div
          className="map-container"
          style={{
            boxShadow: "0 6px 24px rgba(26,115,232,0.10)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1.5px solid #e0e7ef",
            background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
            margin: "0 auto 10px auto",
            maxWidth: 600,
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "rgba(11,61,145,0.08)",
              color: "#0b3d91",
              fontWeight: 700,
              fontSize: "1.08em",
              padding: "12px 18px 8px 18px",
              letterSpacing: 0.2,
              borderBottom: "1px solid #e0e7ef",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1976d2",
                color: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                marginRight: 8,
                fontSize: "1.1em",
                boxShadow: "0 1px 4px #e3f2fd",
              }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 6.25 9 6.25 9s6.25-3.75 6.25-9c0-3.87-3.13-7-7-7zm0 11.5c-2.48 0-4.5-2.02-4.5-4.5S7.52 4.5 10 4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7A2.5 2.5 0 1 0 10 11a2.5 2.5 0 0 0 0-5z" fill="#fff"/>
              </svg>
            </span>
            <span>Campus Location Map</span>
          </div>
          <iframe
            title="JNTU Vizianagaram Campus Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=320&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
            style={{
              width: "100%",
              height: 320,
              minHeight: 220,
              border: "none",
              borderRadius: "0 0 16px 16px",
              flex: 1,
              background: "#e3f2fd",
              transition: "box-shadow 0.2s",
            }}
          ></iframe>
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#1976d2",
              fontSize: "0.98em",
              padding: "8px 18px",
              borderTop: "1px solid #e0e7ef",
              textAlign: "left",
              fontWeight: 500,
              letterSpacing: 0.1,
            }}
          >
            <span>
              <b>Address:</b> JNTU-GV College of Engineering, NH 43, Dwarapudi (Post), Vizianagaram, Andhra Pradesh 535003
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
