import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css"; 
const AboutMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
         <Link
          to="about-iqac"
          className={`menuButton ${
            location.pathname === "/about-us/about-iqac" ? "active" : ""
          }`}
        >
          IQAC
        </Link>
        <Link
          to="about-jntugv"
          className={`menuButton ${
            location.pathname === "/about-us/about-jntugv" ? "active" : ""
          }`}
        >
          JNTU-GV
        </Link>
        <Link
          to="about-director"
          className={`menuButton ${
            location.pathname === "/about-us/about-director" ? "active" : ""
          }`}
        >
          DIRECTOR
        </Link>
        <Link
          to="about-coordinator"
          className={`menuButton ${
            location.pathname === "/about-us/about-coordinator" ? "active" : ""
          }`}
        >
          CO-ORDINATOR
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMain;