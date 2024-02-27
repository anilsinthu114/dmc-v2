import React from "react";
import "../About.css";
import Typography from "@mui/material/Typography";

function JNTUGV() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">About JNTUGV</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          <div className="rightcontent">
          {/* Profile description */}
          <Typography className="t">
            JNTU College of Engineering, Vizianagaram was established in the
            year 2007 as a constituent College of JNTU Hyderabad.JNTU Hyderabad
            was trifurcated into three Universities by the Andhra Pradesh Act
            No. 30 of 2008 and since 24th August 2008, the College has become
            the constituent college of JNTU Kakinada. Vide University Act No.22
            of 2021, JNTU Kakinada is bifurcated and Jawaharlal Nehru
            Technological University Gurajada, Vizianagaram come into existence
            as a separate University vide G.O.Ms.No.3, dated: 12-01-2022.</Typography><br/>
            <Typography className="t">
              The university is spread across six districts i.e
              Vizianagaram,Visakhapatnam, Srikakulam, Parvathipuram Manyam,
              Alluri Sitharama Raju and Anakapalli. There are 2 constituent
              colleges and 37 affiliated colleges under its jurisdiction and
              catering education in different Engineering, Pharmacy and
              Management departments.
            
          </Typography>
          <div className="allRightContentHeading">Vision</div><hr />
          <p className="v">❖ To emerge as a premier technical Institution in the field of engineering and research with a focus to produce professionally competent and
socially sensitive engineers capable of working in a multidisciplinary global environment.</p>

<div className="allRightContentHeading">Mission</div><hr />
<p className="v">❖ To provide high-quality technical education through a creative balance of academia and industry by adopting highly effective teaching-learning processes.</p>
<p className="v">❖ To promote multidisciplinary research with a global perspective to attain professional excellence.</p>
<p className="v">❖ To establish standards that inculcate ethical and moral values that contribute to the growth in the career and development of society.</p>
          <br></br><br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JNTUGV;
