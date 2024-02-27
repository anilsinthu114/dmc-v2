import React from "react";
import "./Data.css";
import Typography from "@mui/material/Typography";

function CS() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          {/* Profile description */}
         
        <div className="allRightContentHeading">Rules for Consultancy Services</div>
        <div className="allRightContentProfile">
        <center></center>
        <hr />

          <div style={{ fontWeight: 'normal', textAlign: 'left',paddingLeft:'50px',paddingRight:'50px' }}>
          <Typography classname ="t">
            ❖ Clearly define the purpose and areas covered by the consultancy services.<br />
            ❖ Specify the required qualifications and expertise for consultants.<br />
            ❖ Address and disclose any potential conflicts of interest.<br />
            ❖ Emphasize the importance of keeping institutional information confidential.<br />
            ❖ Require a formal agreement outlining project details, timelines, and compensation.<br />
            ❖ Establish standards for ensuring the quality of consultancy services.<br />
            ❖ Ensure that services adhere to laws and institutional policies.<br />
            ❖ Define roles, responsibilities, and communication channels for both parties.<br />
            ❖ Outline payment structures, schedules, and expense reimbursement.<br />
            ❖ Clarify ownership and use of intellectual property resulting from the services.<br />
            ❖ Identify and manage potential risks associated with the consultancy.<br />
            ❖ Establish processes for evaluating effectiveness and gathering feedback.<br />
            ❖ Define conditions under which either party can terminate the agreement.<br />
            ❖ Specify required documentation and reporting procedures.<br />
            ❖ Implement mechanisms for ongoing improvement of consultancy services.
          </Typography>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CS;

