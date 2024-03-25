import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
//import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
//import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from '@mui/icons-material/Campaign';


import { useState } from "react";
// import { PiExamFill } from "react-icons/pi";

const Dropdown = () => {
  const navigate = useNavigate();



  
  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };
  // eslint-disable-next-line no-lone-blocks
  {/*const contactHandler = () => {
    navigate("/contact-us");
  };*/}
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div className="dropdown">
          <div className="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" style={{ verticalAlign: 'middle' }}>
              <HomeIcon />
            </div>
            HOME
          </div>
        </div>



        <div class="dropdown">
          <div class="dropbtn">
            <ApartmentIcon /> &nbsp;
            ABOUT
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/dmc/about-dmc">
                About DMC Cell
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-co-ordinator">
                DMC Co-Ordinator
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-activities">
                DMC Activities
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-events">
              DMC Events
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-future-plans">
              DMC Future Plans
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-facilities">
                DMC Facilities
              </Link>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <GroupsIcon />
            <Link to="/about-elearn" className="link-btn">
              E-LEARN
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <CampaignIcon />
            <Link to="/about-surveillance" className="link-btn">
              SURVEILLANCE
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <DescriptionIcon />
            <Link to="/about-gallery" className="link-btn">
              GALLERY
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <DescriptionIcon />
            <Link to="/about-eticket" className="link-btn">
              E-TICKET
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <DescriptionIcon />
            <Link to="/about-dmc-team" className="link-btn">
              DMC TEAM
            </Link>
          </div>
        </div>

       

      <div className="dropdown">
          <div className="dropbtn">
            <DraftsIcon />
            <Link to="/contact-us" className="link-btn">
              CONTACT US
            </Link>
          </div>
        </div>





      </div>
    </nav>
  );
};

export default Dropdown;