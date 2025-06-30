import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dmcImage from '../Header/dmc-logo.jpg';
import certificatesImage from "../Header/Gallery/team 3.jpg";
import additionalImage from "./Images/4.jpg";
import NotificationsScrolling from "./NotificationsScrolling/NotificationsScrolling";
import './Services.css';

const heroImages = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", alt: "Modern Campus", caption: "Modern Campus Facilities" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", alt: "Team Collaboration", caption: "Expert DMC Team" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", alt: "Digital Infrastructure", caption: "Robust Digital Infrastructure" },
  { src: additionalImage, alt: "Campus", caption: "Campus Life" },
  { src: certificatesImage, alt: "Team", caption: "Our Team" },
];

const Home = () => {
  const [heroIdx, setHeroIdx] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-to-top visibility toggle
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f5f9ff", padding: "2rem 1rem", boxSizing: "border-box" }}>
      {/* Hero Carousel */}
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", marginBottom: "2rem" }} data-aos="fade-in">
        <img
          src={heroImages[heroIdx].src}
          alt={heroImages[heroIdx].alt}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 500,
            borderRadius: "1rem",
            objectFit: "cover",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)"
          }}
        />
        <p style={{ marginTop: 12, fontSize: "1.2rem", color: "#1976d2", fontWeight: 600 }}>
          {heroImages[heroIdx].caption}
        </p>
      </div>

      {/* Description Section */}
      <section style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", marginBottom: "3rem" }}>
        <div style={{ flex: "1 1 60%" }} data-aos="fade-right">
          <h2 style={{ color: "#1976d2", fontSize: "1.75rem", marginBottom: "1rem" }}>Digital Monitoring Cell (DMC) - JNTUGV</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            The <strong>JNTUGV Digital Monitoring Cell (DMC)</strong> manages IT infrastructure of the University ensuring secure, uninterrupted operations. It handles servers, surveillance, software, and networking for efficient digital functioning.
          </p>
        </div>
        <div style={{ flex: "1 1 35%", textAlign: "center" }} data-aos="fade-left">
          <img src={dmcImage} alt="DMC Logo" style={{ maxWidth: "100%", height: "auto", borderRadius: '50% ', width:'15rem' }} />
        </div>
      </section>

      {/* Notifications Section */}
      <section style={{ background: "#e3f2fd", padding: "1.5rem", borderRadius: "1rem", maxWidth: 1100, margin: "0 auto 3rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} data-aos="zoom-in">
        <h3 style={{ color: "#0d47a1", marginBottom: 12, fontSize: "1.3rem" , textAlign: "center" }}>
          <i className="fa fa-bell" style={{ marginRight: 8 }}></i>
          Latest Notifications
        </h3>
        <div style={{ maxHeight: 320, overflowY: "auto", paddingRight: 10 }}>
          <NotificationsScrolling />
        </div>
      </section>
      <section className="services-container" style={{ maxWidth: 1100, margin: "0 auto", padding: "1rem" }}>
  <h2 className="services" style={{ 
    textAlign: "center", 
    color: "#1976d2", 
    marginBottom: "1.5rem", 
    fontSize: "1.8rem" 
  }}>
    Our Services
  </h2>

  <div className="cards-wrapper" style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // more mobile-friendly
    gap: "1.5rem"
  }}>
    {[
      {
        title: "Hardware",
        desc: "DMC inspects complaints via JNTUGV–eTicket, performs minor repairs, and maintains systems and servers.",
        link: "/Hardware"
      },
      {
        title: "Networks",
        desc: "DMC manages Campus Wide Network, Wi-Fi, and configures University Firewall through IP-based control.",
        link: "/Network"
      },
      {
        title: "Surveillance",
        desc: "IP Cameras are installed at strategic locations and monitored centrally from the VC’s chamber.",
        link: "/SurveillanceService"
      },
      {
        title: "Software",
        desc: "All software purchases must include warranty/guarantees and be compatible with University infrastructure.",
        link: "/Software"
      }
    ].map((service, idx) => (
      <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{
        backgroundColor: "#fff",
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.2s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <h3 style={{ color: "#1565c0", marginBottom: "0.75rem", fontSize: "1.2rem" }}>{service.title}</h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{service.desc}</p>
        <Link to={service.link} className="read-more-btn" style={{
          marginTop: "1.5rem",
          color: "#fff",
          backgroundColor: "#1976d2",
          padding: "0.6rem 1.2rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: 500,
          alignSelf: "flex-start"
        }}>
          Read More
        </Link>
      </div>
    ))}
  </div>
</section>


      {/* Back to Top Button */}
{showScrollTop && (
  <button
    onClick={scrollToTop}
    title="Back to top"
    aria-label="Back to top"
    style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      backgroundColor: "#1565c0",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "3.5rem",
      height: "3.5rem",
      boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
      cursor: "pointer",
      fontSize: "1.4rem",
      zIndex: 9999,
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "#0d47a1";
      e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#1565c0";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    ↑
  </button>
)}

          </div>
  );
};

export default Home;
