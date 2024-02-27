import { Link, Outlet, useLocation } from "react-router-dom";
import "./Coursedetails.css"; 
const Coursedetails = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
      <Link
        to="about-ug-syllabus"
        className={`menuButton ${
          location.pathname === "/about-course-details/about-ug-syllabus" ? "active" : ""
        }`}
      >
        UG Syllabus
      </Link>
        <Link
          to="about-pg-syllabus"
          className={`menuButton ${
            location.pathname === "/about-course-details/about-pg-syllabus" ? "active" : ""
          }`}
        >
          PG Syllabus
        </Link>
        
        
      </div>
      <Outlet />
    </div>
  );
};

export default Coursedetails;