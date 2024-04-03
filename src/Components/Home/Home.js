// Home.js
import React from "react";
import { Link } from "react-router-dom";
import dmcImage from "./Images/1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="left-content">
          <h2 className="heading">
            JNTU-GV <br /> Digital Monitoring Cell (DMC)
          </h2>
          <p>
            JNTUGV Digital Monitoring Cell (DMC) Established to maintain and
            monitor the IT infrastructure of the University. DMC is mainly
            involved in University digitization.The Digital Monitoring Cell
            (DMC) serves as the cornerstone of organizations' digital
            operations, overseeing the management, maintenance, and security of
            their digital infrastructure. Established with the primary objective
            of ensuring the efficient and secure functioning of digital systems,
            the DMC undertakes the critical task of monitoring networks,
            servers, databases, and applications. By proactively identifying and
            addressing issues, the DMC minimizes downtime and disruptions,
            thereby optimizing organizational efficiency. Moreover, the DMC is
            entrusted with implementing robust cybersecurity measures to
            safeguard against cyber threats and ensure compliance with relevant
            regulations. Beyond security, the DMC spearheads digitization
            initiatives, driving innovation and digital transformation across
            the organization. Through collaboration with various departments and
            teams, the DMC provides essential support, training, and technical
            assistance, fostering a culture of digital excellence and resilience
            within the organization.
          </p>
        </div>

        <div className="right-content">
          <img src={dmcImage} alt="DMC" />
        </div>
      </div>

      <div className="services-container">
        <h2 className="services">Services</h2>
        <div className="cards-wrapper">
          <div className="card">
            <h3>Hardware</h3>
            <p>
              DMC inspects the complaints received through JNTUGV–eTicket and do
              all the minor repairs. DMC maintains systems and servers for
              various purposes.
            </p>
            <button className="read-more-btn">
              {" "}
              <Link className="link-btn" to="/Hardware">
                Read More
              </Link>
            </button>
          </div>

          <div className="card">
            <h3>Networks</h3>
            <p>
              DMC maintains the Campus Wide Network and campus Wi-Fi. DMC
              configures and maintains the University Firewall through this IP
              based
            </p>
            <button className="read-more-btn">
              {" "}
              <Link className="link-btn" to="/Network">
                Read More
              </Link>
            </button>
          </div>

          <div className="card">
            <h3>Surveillance</h3>
            <p>
              IP Cameras are installed at strategic locations in the campus and
              the monitoring unit is housed in the VC’s chamber to get a quick
              review of the activities in the University.
            </p>
            <button className="read-more-btn">
              {" "}
              <Link className="link-btn" to="/SurveillanceService">
                Read More
              </Link>
            </button>
          </div>

          <div className="card">
            <h3>Software</h3>
            <p>
              All purchases of software must be supported by guarantee and/or
              warranty requirements and be compatible with the University’s
              server and/or hardware system.
            </p>
            <button className="read-more-btn">
              {" "}
              <Link className="link-btn" to="/Software">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
