import React from "react";
import { FaEnvelope, FaInfoCircle, FaLink, FaPhone } from "react-icons/fa";
import "../About.css";
import directorImage from "./designer.jpg";


function Supportingstaff() {
  return (
    <div className="mainContainer allRightContent">
      <div className=""><br/>
        <div className="allRightContentHeading">Web Designer of Digital Monitoring Cell</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={directorImage}
                alt="Profile" style={{ height: '300px', width: '250px' }}/>
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="coh3">Mattaparthi Niranjan</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="coh4">
                    Web Designer  of Digital Monitoring Cell 
            </h4>
            </div>
            </center>
            <hr />
        {/* Profile description */}
        <p className="coh4">
          <FaPhone /> Contact No : 7997446844
        </p>
        <p className="coh4">
          <FaEnvelope /> Email : <a href="mailto:webdesignerdmc@jntugv.edu.in">webdesignerdmc@jntugv.edu.in</a>
        </p>
        <hr/>
          </div>
          <p className="ADsub">Websites Designed</p>
          <div className="websitesList" style={{margin: "0 auto"}}>
            <ul style={{listStyle: "none", padding: 0, margin: "0 20px"}}>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Director of R&D:</strong> <a href="https://drd.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://drd.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> The Research and Development portal showcases research activities, publications, and ongoing projects at JNTU-GV.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Director of Academic Planning:</strong> <a href="https://dap.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://dap.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> This portal manages academic calendars, curriculum development, and educational planning initiatives.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Director of Industry Relations & Placements:</strong> <a href="https://dirp.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://dirp.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Facilitates industry collaborations, internships, and placement activities for students.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Director of Academic Audit:</strong> <a href="https://daa.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://daa.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Handles academic quality assurance and institutional assessment processes.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>IDEA Club:</strong> <a href="https://ideaclub.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://ideaclub.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> A platform for fostering innovation, creativity, and entrepreneurial thinking among students.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Green Campus:</strong> <a href="https://greencampus.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://greencampus.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Highlights environmental initiatives and sustainability practices on campus.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>MoU's:</strong> <a href="https://mou.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://mou.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Documents partnerships and collaborations with other institutions and organizations.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>NSS:</strong> <a href="https://nss.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://nss.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> National Service Scheme portal showcasing social service activities and community outreach programs.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>Events:</strong> <a href="https://events.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://events.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Calendar and information about university events, conferences, and workshops.</p>
              </li>
              <li style={{marginBottom: "20px"}}>
                <FaLink /> <strong>RTI:</strong> <a href="https://rti.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc", textDecoration: "none"}}>https://rti.jntugv.edu.in</a>
                <p style={{margin: "5px 0 0 20px"}}><FaInfoCircle /> Right to Information portal providing transparency in university administration.</p>
              </li>
            </ul>
          </div>
          </div>
  );
}

export default Supportingstaff;