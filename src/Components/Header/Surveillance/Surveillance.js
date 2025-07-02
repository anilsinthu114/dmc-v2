import React from "react";
import Image1 from "./1.jpeg";
import "./Surveillance.css";

// Enhanced: Add more images and captions for a richer experience
const surveillanceImages = [
  {
    src: Image1,
    alt: "CCTV Camera on Campus",
    caption: "CCTV cameras are a common tool for physical surveillance.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Control Room",
    caption: "Control rooms monitor multiple surveillance feeds in real time.",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Facial Recognition",
    caption: "Modern surveillance includes facial recognition and analytics.",
  },
];

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "60vh",
  padding: "2.5rem 1.5rem",
  margin: "2rem auto",
  maxWidth: 1100,
  gap: "2.5rem",
};

const imagesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 2.5fr)",
  gap: "25px",
  minWidth:'100%',
  maxWidth: '100%',
  flex: "1 1 220px",
  alignItems: "center",
  justifyItems: "center",
};

const figureStyle = {
  margin: 0,
  minWidth: 'auto',
  maxWidth: 500,
  background: "rgba(255,255,255,0.13)",
  borderRadius: "12px",
  // boxShadow: "0 2px 12px rgba(118,75,162,0.10)",
  overflow: "hidden",
  textAlign: "center",
  transition: "transform 0.2s",
};

const imageStyle = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.3s",
  cursor: "pointer",
};

const figcaptionStyle = {
  fontSize: "0.97rem",
  color: "#444",
  padding: "8px 10px 10px 10px",
  minHeight: 48,
};

const textContainerStyle = {
  flex: "2 1 400px",
  minWidth: 260,
  padding: "1.2rem 0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 700,
};

const headingStyle = {
  color: "#1976d2",
  fontSize: "2.3rem",
  marginBottom: "1.1rem",
  fontWeight: 800,
  letterSpacing: "0.5px",
  display: "flex",
  alignItems: "center",
  gap: 12,
  textShadow: "2px 2px 8px #764ba233",
};

const paragraphStyle = {
  fontSize: "1.13rem",
  lineHeight: 1.85,
  color: "#263238",
  marginBottom: "1.2rem",
  textShadow: "1px 1px 2px #764ba222",
  letterSpacing: "0.01em",
  background: "rgba(255,255,255,0.13)",
  borderRadius: "16px",
  padding: "22px 18px",
  // boxShadow: "0 2px 12px rgba(118,75,162,0.10)",
  textAlign: "justify",
};

const ulStyle = {
  color: "#1976d2",
  fontSize: "1rem",
  marginLeft: "1.2rem",
  marginBottom: "0.5rem",
  listStyle: "disc inside",
};

const linkStyle = {
  display: "inline-block",
  background: "linear-gradient(90deg, #1976d2 70%, #42a5f5 100%)",
  color: "#fff",
  padding: "0.7rem 1.6rem",
  borderRadius: "0.6rem",
  fontWeight: 600,
  fontSize: "1rem",
  textDecoration: "none",
  boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
  transition: "background 0.2s, transform 0.2s",
  marginTop: "1.2rem",
};

const Surveillance = () => {
  return (
    <section
      style={containerStyle}
      aria-label="Surveillance Service"
    >
      {/* Textual content (right) */}
      <main
        className="text-container"
        style={textContainerStyle}
      >
        <header>
          <h2 style={headingStyle}>
            <span role="img" aria-label="CCTV" style={{ fontSize: "2.2rem", color: "#ffd700" }}>
              📹
            </span>
            Surveillance
          </h2>
        </header>
        {/* Images grid (after heading) */}
        <aside style={imagesGridStyle} aria-label="Surveillance Images">
          {surveillanceImages.map((img, idx) => (
            <figure
              key={idx}
              style={figureStyle}
              className="surveillance-figure"
              tabIndex={0}
              aria-label={img.alt}
              onMouseOver={e => {
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1.04)";
              }}
              onMouseOut={e => {
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1)";
              }}
              onFocus={e => {
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1.04)";
              }}
              onBlur={e => {
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1)";
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={imageStyle}
                loading="lazy"
              />
              <figcaption style={figcaptionStyle}>{img.caption}</figcaption>
            </figure>
          ))}
        </aside>
        <p style={paragraphStyle}>
          Surveillance involves the systematic monitoring of individuals, groups, or activities to gather information, maintain security, or exert control. It encompasses a range of methods, such as physical observation, electronic monitoring (like CCTV and sensors), and cyber surveillance of digital communications. Surveillance is used to prevent crime, monitor public spaces for safety, support law enforcement investigations, and gather intelligence for governments and organizations.
          <br />
          <br />
          <strong>CCTV cameras</strong> are strategically installed across the campus, providing real-time monitoring and enhanced security. The central monitoring unit, located in the <strong>Vice Chancellor’s chamber</strong>, enables quick review of activities at various University locations. All footage is securely recorded, ensuring a safe and transparent environment for students, staff, and visitors.
          <br />
          <br />
          Advances in technology—such as high-definition cameras, facial recognition, and predictive analytics—have greatly expanded surveillance capabilities. However, these developments also raise important questions about privacy, ethics, and the balance between security and individual rights. Ongoing debates focus on issues like mass surveillance, data privacy, and the societal impact of constant monitoring.
        </p>
        <ul style={ulStyle}>
          <li>24/7 surveillance coverage</li>
          <li>Centralized monitoring &amp; quick response</li>
          <li>High-definition video recording</li>
          <li>Enhanced campus safety &amp; transparency</li>
        </ul>
        <nav aria-label="Learn more about campus security">
          <a
            href="https://jntugv.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={e => {
              e.currentTarget.style.background = "linear-gradient(90deg, #1565c0 70%, #1976d2 100%)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "linear-gradient(90deg, #1976d2 70%, #42a5f5 100%)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Learn More about Campus Security
          </a>
        </nav>
      </main>
    </section>
  );
};

export default Surveillance;
