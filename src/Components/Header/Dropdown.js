import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
//import GroupsIcon from "@mui/icons-material/Groups";
//import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from "@mui/icons-material/Person";
//import DraftsIcon from "@mui/icons-material/Drafts";
//import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
//import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
//import CampaignIcon from '@mui/icons-material/Campaign';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import CollectionsIcon from '@mui/icons-material/Collections';
import QrCodeIcon from '@mui/icons-material/QrCode';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';


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
              <Link className="link-btn" to="/dmc/dmc-supporting-staff">
                DMC Staff
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-activities">
                DMC Activities
              </Link>
            </button>
            {/* <button>
              {" "}
              <Link className="link-btn" to="/dmc/dmc-events">
              DMC Events
              </Link>
            </button> */}
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

        {/* <div className="dropdown">
          <div className="dropbtn">
            <GroupsIcon />
            <Link to="/about-elearn" className="link-btn">
              E-LEARN
            </Link>
          </div>
        </div> */}


       {/* <div class="dropdown">
          <div className="dropbtn">
          <Link to="/about-notifications" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <CampaignIcon /> NOTIFICATIONS
        </Link>
          </div>
        </div> */}


{/* <div className="dropdown">
          <div className="dropbtn">
            <CampaignIcon />
            <Link to="/about-notifications" className="link-btn">
              NOTIFICATIONS
            </Link>
          </div>
        </div> */}

        <div className="dropdown">
          <div className="dropbtn">
            <PhotoCameraFrontIcon />
            <Link to="/about-surveillance" className="link-btn">
              SURVEILLANCE
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <CollectionsIcon />
            <Link to="/about-gallery" className="link-btn">
              GALLERY
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <QrCodeIcon />
            <Link to="/about-eticket" className="link-btn">
              E-TICKET
            </Link>
          </div>
        </div>

        {/* <div className="dropdown">
          <div className="dropbtn">
            <DescriptionIcon />
            <Link to="/about-dmc-team" className="link-btn">
              WEB DEVELOPMENT TEAM
            </Link>
          </div>
        </div> */}


<div class="dropdown">
          <div class="dropbtn">
            <GroupsIcon /> &nbsp;
            WEB DEVELOPMENT TEAM
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
          <button >
              {" "}
              <Link className="link-btn" to="/wdt/lead-contributors">
                Lead Contributors  
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/website-team">
                JNTUGV Website  
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/admin-panel">
                Admin Panel  
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/wdt/iqac-team">
                Iqac Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/placement-team">
                Placement Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/dmc-team">
                Dmc Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/research-and-development-team">
              Research and Development Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/examination-team">
                Examination Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/nss-team">
                Nss Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/wdt/sports-team">
                Sports Cell
              </Link>
            </button>
           
           
           
            
          </div>
        </div>

       

      <div className="dropdown">
          <div className="dropbtn">
            <CallIcon />
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