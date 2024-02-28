import React from "react";
import "./ContactUs.css";
import { Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2>College Details:</h2>
      {/* College Section */}
      <div className="contact-details">
        <Paper elevation={4} className="member">
          <Typography variant="h6">
            <strong>Location:</strong> JNTU-Gurajada College of Engineering
            Vizianagaram,
            <br />
            Nh 43, Dwarapudi (Post), Vizianagaram, Andhra Pradesh, Andhra
            Pradesh 535003 · ~4.8 km
          </Typography>
          <Typography variant="h6">
            <strong>Contact Number:</strong> 089222 77388
          </Typography>
          <Typography variant="h6">
            <strong>Email:</strong> registrarpeshi@jntugv.edu.in
          </Typography>
        </Paper>
        <Paper elevation={4} className="map-container">
          <iframe
            title="JNTU Vizianagaram Campus Map"
            width="500"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Paper>
      </div>

      {/* Additional Contact Section */}
      <div className="additional-contact-section ">
        <h2>Additional Contact Details:</h2>

        <div className="contact-cards">
          {/* Member 1 */}
          <Paper elevation={4} className="paper-details">
            <Typography variant="h6">
              <strong>Vice Chancellor Peshi</strong>{" "}
            </Typography>
            <Typography variant="p">
              Contact Number: +91 89222 22606{" "}
            </Typography>
            <Typography variant="p">Email: vc@jntugv.edu.in</Typography>
          </Paper>

          {/* Member 2 */}
          <Paper elevation={4} className="paper-details">
            <Typography variant="h6">
              <strong>Registrar Peshi</strong>{" "}
            </Typography>
            <Typography variant="p">Contact Number: +91 89222 94316</Typography>
            <Typography variant="p">Email: registrarpeshi@jntugv.edu.in</Typography>
            <Typography variant="p">Email: pa2registrarjntugv@gmail.com</Typography>
          </Paper>

          {/* Member 3 */}
          <Paper elevation={4} className="paper-details">
            <Typography variant="h6">
              <strong>Controller of Examination Office</strong>{" "}
            </Typography>
            <Typography variant="p">Contact Number: +91 89222 94997</Typography>
            <Typography variant="p">Email: ce@jntugv.edu.in</Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
