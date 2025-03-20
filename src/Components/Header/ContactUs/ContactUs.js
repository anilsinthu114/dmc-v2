import React from "react";
import { FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2 className="cd">📞 Get in Touch</h2>

      {/* Location + Coordinator Section */}
      <div className="contact-section">
       

        <div className="contact-item">
          <h3>Digital Monitoring Cell Co-ordinator</h3>
          <h4>Mr. Anil Wurity</h4>
          <p>Assistant Professor,<br />Information Technology Department</p>
          <p>JNTU-GV College of Engineering</p>

          <h3>Contact Number</h3>
          <p>
            <FaPhone className="icon" /> +91 85006 69667
          </p>
          <h3>Email</h3>
          <p>
            <FaEnvelope className="icon" />{" "}
            <a href="mailto:dmc@jntugv.edu.in">
              dmc@jntugv.edu.in
            </a>
          </p>
          <h3><FaBuilding className="icon" />Office Location</h3>
          <p>
            DMC Office ,  Second Floor, Academic Block-1,<br/>
            JNTU-GV College of  Engineering, Vizianagaram<br/>
           <strong> Jawaharlal Nehru Technological University Gurajada Vizianagaram<br/>
             NH 43, Dwarapudi (Post), Andhra Pradesh, </strong>
            535003
          </p>
          </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="JNTU Vizianagaram Campus Map"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>
      </div>
  );
}

export default ContactUs;
