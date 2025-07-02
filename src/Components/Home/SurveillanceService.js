import React from "react";
import "./Services.css";

const surveillanceImages = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV Camera",
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

const SurveillanceService = () => (
  <div>
    <h2
      className="heading-service"
      style={{
        fontSize: "2.3rem",
        fontWeight: 800,
        letterSpacing: "0.5px",
        textShadow: "2px 2px 8px #764ba233",
        marginBottom: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      <span role="img" aria-label="CCTV" style={{ fontSize: "2.2rem", color: "#ffd700" }}>
        📹
      </span>
      Surveillance
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
        justifyContent: "center",
        marginBottom: "18px",
      }}
    >
      {surveillanceImages.map((img, idx) => (
        <figure
          key={idx}
          style={{
            margin: 0,
            maxWidth: 220,
            background: "rgba(255,255,255,0.13)",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(118,75,162,0.10)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: "100%",
              height: "120px",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
          <figcaption
            style={{
              fontSize: "0.97rem",
              color: "#444",
              padding: "8px 10px 10px 10px",
              minHeight: 48,
            }}
          >
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
    <p
      className="matter-service"
      style={{
        fontSize: "1.13rem",
        lineHeight: 1.85,
        maxWidth: 800,
        margin: "0 auto 18px auto",
        textAlign: "justify",
        textShadow: "1px 1px 2px #764ba222",
        letterSpacing: "0.01em",
        background: "rgba(255,255,255,0.13)",
        borderRadius: "16px",
        padding: "22px 18px",
        boxShadow: "0 2px 12px rgba(118,75,162,0.10)",
      }}
    >
      Surveillance involves the systematic monitoring of individuals, groups, or activities to gather information, maintain security, or exert control. It encompasses a range of methods, such as physical observation, electronic monitoring (like CCTV and sensors), and cyber surveillance of digital communications. Surveillance is used to prevent crime, monitor public spaces for safety, support law enforcement investigations, and gather intelligence for governments and organizations. 
      <br />
      <br />
      Advances in technology—such as high-definition cameras, facial recognition, and predictive analytics—have greatly expanded surveillance capabilities. However, these developments also raise important questions about privacy, ethics, and the balance between security and individual rights. Ongoing debates focus on issues like mass surveillance, data privacy, and the societal impact of constant monitoring.
    </p>
  </div>
);

export default SurveillanceService;
