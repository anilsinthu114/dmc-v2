import React from "react";
import "../About.css";
import directorImage from "./1.jpg";

function Supportingstaff() {
  return (
    <div className="mainContainer">
      <div className="allRightContent"><br/>
        <div className="allRightContentHeading">Supporting Staff of Digital Monitoring Cell</div>
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
            <h3 className="coh3">Dr.K.Srikanth</h3>
            <h4 className="coh4">Supporting Staff of Digital Monitoring Cell</h4>
          </div>
          <div className="profileDesignation">
            <h4 className="coh4">
            Assistant professor(C)
            </h4>
          </div>
        </center>
        
        
        
       

         

          
          
            

      </div>
    </div>
  );
}

export default Supportingstaff;