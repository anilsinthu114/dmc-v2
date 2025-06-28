import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { skillsData } from "./GalleryImages";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Accessibility: trap focus in modal
  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
        if (e.key === "ArrowLeft") {
          showPrev();
        }
        if (e.key === "ArrowRight") {
          showNext();
        }
        if (e.key === "Tab" && modalRef.current) {
          const focusableEls = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstEl = focusableEls[0];
          const lastEl = focusableEls[focusableEls.length - 1];
          if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          } else if (e.shiftKey && document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
    // eslint-disable-next-line
  }, [isModalOpen, currentIndex]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector(".close");
        if (closeBtn) closeBtn.focus();
      }
    }, 0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? skillsData.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === skillsData.length - 1 ? 0 : prev + 1
    );
  };

  // Prevent modal close when clicking inside modal-content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className="gallery-container" aria-label="Skill Gallery">
        {skillsData.map((logo, index) => (
          <div
            className="gallery-card"
            key={index}
            tabIndex={0}
            role="button"
            aria-label={`View ${logo.name} image`}
            onClick={() => openModal(index)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(index);
              }
            }}
            style={{ outline: "none" }}
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="gallery-image"
              loading="lazy"
              draggable={false}
            />
            <h4 title={logo.name}>{logo.name}</h4>
          </div>
        ))}
      </div>

      {isModalOpen && currentIndex !== null && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={skillsData[currentIndex].name}
          tabIndex={-1}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            ref={modalRef}
            onClick={handleModalContentClick}
            style={{ position: "relative" }}
          >
            <button
              className="close"
              onClick={closeModal}
              aria-label="Close modal"
              tabIndex={0}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                position: "absolute",
                top: 18,
                right: 28,
                zIndex: 2,
                cursor: "pointer"
              }}
            >
              &times;
            </button>
            <button
              className="modal-nav modal-nav-left"
              onClick={e => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 38,
                height: 38,
                fontSize: 24,
                cursor: "pointer",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              tabIndex={0}
            >
              &#8592;
            </button>
            <button
              className="modal-nav modal-nav-right"
              onClick={e => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 38,
                height: 38,
                fontSize: 24,
                cursor: "pointer",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              tabIndex={0}
            >
              &#8594;
            </button>
            <img
              src={skillsData[currentIndex].image}
              alt={skillsData[currentIndex].name}
              className="modal-image"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                maxHeight: "60vh",
                background: "#fff",
                borderRadius: "12px"
              }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#222"
              }}
            >
              {skillsData[currentIndex].name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
