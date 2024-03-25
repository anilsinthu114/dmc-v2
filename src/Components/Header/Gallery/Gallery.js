import React from 'react';
import './Gallery.css'; // Import CSS file for styling
import image1 from './1.jpg';
import image2 from './2.jpeg';

const images = [
  image1,
  image2,
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`pic ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
