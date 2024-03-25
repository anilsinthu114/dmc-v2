import React from "react";
// import "./Data.css";
import Typography from "@mui/material/Typography";

function VisionMission() {
  return (
    
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
      <div className="allRightContentHeading">Vision</div>
        <div className="allRightContentProfile">
        <center></center>
        <hr />
  
        <div style={{ fontWeight: 'normal', textAlign: 'left',paddingLeft:'50px',paddingRight:'50px' }}>
        <Typography className="t">

❖ To emerge as a premier technical Institution in the field of engineering and research with a focus to produce professionally competent and<br /> socially sensitive engineers capable of working in a multidisciplinary global environment.<br />

</Typography>

           </div><br></br><hr></hr><br></br>
           <div className="allRightContentHeading">Mission</div>

           <div style={{ fontWeight: 'normal', textAlign: 'left',paddingLeft:'50px',paddingRight:'50px' }}>
        <Typography className="t">

❖ To provide high-quality technical education through a creative balance of academia and industry by adopting highly effective teaching-learning processes.<br />
❖ To promote multidisciplinary research with a global perspective to attain professional excellence.<br />
❖ To establish standards that inculcate ethical and moral values that contribute to the growth in the career and development of society.

</Typography>

           </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;

