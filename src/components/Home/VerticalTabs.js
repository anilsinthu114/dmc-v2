import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.css';
// import NewsandEvents from "./NewsandEvents/NewsandEvents";
// import Scrollbar from "./NewsandEvents/Scrollbar";
// import UpdatePanel from "./UpdatePanel/UpdatePanel";

function Home() {
  return (
    <div className="ABOUTmainContainer">
        <div className="allRightContent">
          <div className="allRightContentHeading">Internal Quality Assurance Cell [IQAC]</div>  <br />
          <div className="allRightContentProfile">
            <hr />
            <div className="columns-container">
              <div className="column">
                <ul>

                  <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>About IQAC</Link><br /><br />
                  <Link to="/about-us/about-jntugv" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>About JNTUGV</Link><br /><br />
                  <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Institutional Information for Quality Assessment(IIQA)</Link><br /><br />

                  {/* <Link to="/about-naac-ssr" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NAAC Self Study Report(SSR)</Link><br /><br /> */}
                  <Link to="/about-faculty-awards" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span> Faculty Awards</Link><br /><br />
                  <Link to="/about-strategies" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>IQAC Strategies & Objectives</Link><br /><br />
                  <Link to="/about-vision-mission" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>The JNTU-GV University Vision & Mission</Link><br /><br />
                  <Link to="/about-functions" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>IQAC Functions</Link><br /><br />

                </ul>
              </div>
              <div className="column">
                <ul>
                  <Link to="/about-benefits" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>IQAC Benefits</Link><br /><br />
                  <Link to="/about-course-details/about-ug-syllabus" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Syllabus</Link><br /><br />
                  <Link to="/feedbackforms/faculty-form" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Feedback details of curriculum</Link><br /><br />
                  <Link to="/AQAR" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Annual Quality Assurance Report</Link><br /><br />                  
                  <Link to="/about-consulty-services" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Rules for Consultancy Services</Link><br /><br />
                  <Link to="/about-operational" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Operational Features of IQAC</Link><br /><br />
                  <Link to="/about-monitoring" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Monitoring Mechanism</Link><br /><br />
                  <Link to="/about-aicte-approvals" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>AICTE Approvals</Link><br /><br />
                  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NBA Accreditations</Link><br /> */}
                  {/* <Link to="/about-pcoi" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Pharmacy Council of India</Link><br /><br /> */}
                  {/* <Link to="/about-naac-criteria" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NAAC Criteria</Link> */}
                  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>PBAS New Format</Link><br /> */}
                  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>PBAS New Format – MS-WORD Document</Link> */}
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="NewsAndEventsContainer">
          <Scrollbar />
          <UpdatePanel />
        </div> */}
      <br /><br />
      <div className="iqacMessageContainer">

        <div className="iqacMessage">

          <p><b>IQAC Message </b></p>
          <p>
            "To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support.""
          </p>
          <p className="signature">Dr. K. Chandra Bhushana Rao<br />IQAC Coordinator</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
