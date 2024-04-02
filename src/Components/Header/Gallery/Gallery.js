import React, { useState } from "react";
import "./Gallery.css";
import { skillsData } from "./GalleryImages"; // Import data from ImageGalleryData.js

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-container">
        {skillsData.map((logo, index) => (
          <div className="gallery-card" key={index} onClick={() => openModal(logo.image)}>
            <img src={logo.image} alt={logo.name} className="gallery-image" />
            <h4>{logo.name}</h4>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Large" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
