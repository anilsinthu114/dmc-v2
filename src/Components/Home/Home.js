import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dmcImage from '../Header/dmc-logo.jpg';
import certificatesImage from "../Header/Gallery/team 3.jpg";
import additionalImage from "./Images/4.jpg";
import NotificationsScrolling from "./NotificationsScrolling/NotificationsScrolling";
import './Services.css';

// Icon SVGs for services
const ServiceIcons = {
  Hardware: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{marginBottom: 8}} xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="28" height="18" rx="3" fill="#1976d2" opacity="0.13"/>
      <rect x="7" y="10" width="24" height="14" rx="2" fill="#1976d2"/>
      <rect x="13" y="26" width="12" height="3" rx="1.5" fill="#1976d2" opacity="0.7"/>
      <circle cx="19" cy="17" r="2.5" fill="#fff"/>
    </svg>
  ),
  Networks: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{marginBottom: 8}} xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="15" fill="#1976d2" opacity="0.13"/>
      <circle cx="19" cy="19" r="10" fill="#1976d2"/>
      <circle cx="19" cy="19" r="3" fill="#fff"/>
      <path d="M19 6v4M19 28v4M6 19h4M28 19h4" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Surveillance: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{marginBottom: 8}} xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="13" width="24" height="8" rx="2" fill="#1976d2" opacity="0.13"/>
      <rect x="10" y="15" width="18" height="4" rx="1" fill="#1976d2"/>
      <circle cx="19" cy="17" r="1.5" fill="#fff"/>
      <rect x="17" y="23" width="4" height="6" rx="2" fill="#1976d2"/>
    </svg>
  ),
  Software: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{marginBottom: 8}} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="22" height="22" rx="4" fill="#1976d2" opacity="0.13"/>
      <rect x="11" y="11" width="16" height="16" rx="2" fill="#1976d2"/>
      <rect x="15" y="15" width="8" height="8" rx="1" fill="#fff"/>
      <rect x="17" y="25" width="4" height="2" rx="1" fill="#1976d2" opacity="0.7"/>
    </svg>
  ),
};

const heroImages = [
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
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f5f9ff", boxSizing: "border-box" }}>
      {/* Hero Carousel */}
      <div style={{ margin: "0 auto", textAlign: "center", marginBottom: "2rem" }} data-aos="fade-in">
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
      <section style={{ margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", marginBottom: "3rem" }}>
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
      <section style={{padding: "1rem", borderRadius: "1rem", margin: "0 auto 3rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} data-aos="zoom-in">
        <h3 style={{ color: "#0d47a1", marginBottom: 12, fontSize: "1.3rem" , textAlign: "center" }}>
          <i className="fa fa-bell" style={{ marginRight: 8 }}></i>
          Latest Notifications
        </h3>
        <div style={{ maxHeight: 320, overflow: "hidden", paddingRight: 10 }}>
          <NotificationsScrolling />
        </div>
      </section>
      <section className="services-container" style={{ margin: "0 auto", padding: "1rem" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
              link: "/about-surveillance"
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
              alignItems: "flex-start"
            }}>
              <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "0.75rem"}}>
                <span aria-hidden="true" style={{marginRight: "0.6rem", fontSize: "1.5rem", display: "flex", alignItems: "center"}}>
                  {ServiceIcons[service.title]}
                </span>
                <h3 style={{ color: "#1565c0", fontSize: "1.2rem", margin: 0 }}>{service.title}</h3>
              </div>
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
