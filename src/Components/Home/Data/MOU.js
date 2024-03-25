import React from "react";
import "./Data.css";
import mou from './mou.jpg';
import { Typography } from "@mui/material";



function MOU() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">MOU</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={mou}
                alt="Profile"
                style={{ height: "200px", width: "400px" }}
  />
            </center>
          </div>
        </div><br/>
        
        
         
        <div style={{ fontWeight: 'normal', textAlign: 'left',paddingLeft:'50px',paddingRight:'50px' }}>
        <Typography className="t">

❖ JNTUGV-CEV University College of Engineering Vizianagaram (JNTUK-UCEV) and Natsoft Corporation are collaborated to set up a Blockchain Center of Excellence (BCoE) to develop skills, create and deliver innovative solutions related to blockchain and its associated digital technologies.<br />
❖ The MOU partnership intends to set up a for carrying out any innovation or development of blockchain and its associated technology solutions for the government and private enterprises.<br />
❖ NATSOFT CORPORATION and JNTUGV-CEV (Vizianagaram Campus) will work together in Blockchain and associated emerging technologies to augment the skills and capabilities of the associated faculty members, researchers and students through appropriate learning programs and involvement in projects.<br />
❖ BCoE would encourage interactions with the industry and government agencies on key issues faced and to design suitable innovate solutions to address them through Blockchain and associate technologies.<br />
❖ he Center will also explore opportunities to offer internships to relevant qualified UCEV students on various blockchain solutions and projects.

</Typography><br />
        </div>
        
      </div>
    </div>
  );
}

export default MOU;