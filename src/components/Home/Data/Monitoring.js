import React from 'react';
import './Data.css';
import Typography from "@mui/material/Typography";

function Monitoring() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          {/* Profile description */}
         
        <div className="allRightContentHeading">Monitoring Mechanism</div>
        <div className="allRightContentProfile">
        <center></center>
        <hr />
  
        <div style={{ fontWeight: 'normal', textAlign: 'left',paddingLeft:'50px',paddingRight:'50px' }}>
        <Typography className="t">
          IQAC need to submit yearly the Annual Quality Assurance Report (AQAR) to NAAC. During the institutional visit the NAAC peer teams will interact<br /> with the IQACs to know the progress, functioning as well quality sustenance initiatives undertaken by them.<br /><br />
          </Typography>
        
        <Typography className="t">
         ❖ Preparation of the Annual Quality Assurance Report (AQAR) of the University based on the quality parameters/assessment criteria developed<br /> by the relevant quality assurance body (like NAAC, NBA, AB) in the prescribed format.<br />
         ❖ Bi-annual development of Quality Radars (QRs) and Ranking of Integral Units of HEIs based on the AQAR.<br />
         ❖ Interaction with SQACs in the pre and post accreditation quality assessment, sustenance and enhancement endeavors.<br />
         ❖ The AQAR shall be approved by the statutory bodies of the University (such as Syndicate, Governing Council/Board) for the follow up action<br /> for necessary quality enhancement measures.<br />
         ❖ The Universities shall regularly submit the AQARs to the NAAC/other accreditation bodies.<br />
         ❖ All Universities shall submit AQARs and/or Quality Radars (QRs) and follow up reports of AQARs to the UGC.<br />
         </Typography><br />
           </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Monitoring;
