import React from 'react';
import "./Surveillance.css";
import Image1 from './1.jpeg'; // Import your image

const Surveillance = () => {
  return (
    <div className="elearn-container">
      <div className="image-container">
        <img src={Image1} alt="Surveillance" className="surveillance-image" />
      </div>
      <div className="text-container">
        <h2>Surveillance</h2>
        <p>CCTV is installed at strategic locations in the campus and the monitoring
          unit is housed in the VC’s chamber to get a quick review of the activities
          in the University at different locations. This enhances the security system
          in the University as it also has recording facility.</p>
      </div>
    </div>
  );
}

export default Surveillance;
