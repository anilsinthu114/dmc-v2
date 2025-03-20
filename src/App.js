import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import AboutMain from "./Components/Header/About/AboutMain";
import Activities from "./Components/Header/About/Activities/Activities";
import Dmc from "./Components/Header/About/Dmc/Dmc";
import Dropdown from "./Components/Header/Dropdown";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
//import Events from "./Components/Header/About/Events/Events";
import Facilities from "./Components/Header/About/Facilities/Facilities";
import Futureplans from "./Components/Header/About/Futureplans/Futureplans";
//import Elearn from "./Components/Header/Elearn/Elearn";
import Surveillance from "./Components/Header/Surveillance/Surveillance";
// import Eticket from "./Components/Header/Eticket/Eticket";
import ContactUs from "./Components/Header/ContactUs/ContactUs";
import Gallery from "./Components/Header/Gallery/Gallery";
//import Team from "./Components/Header/Team/Team";
import Coordinator from './Components/Header/About/Coordinator/Coordinator';

import Hardware from "./Components/Home/Hardware";
import Network from "./Components/Home/Network";
import Software from "./Components/Home/Software";
import SurveillanceService from "./Components/Home/SurveillanceService";
//import Notifications from "./Components/Header/Notifications/Notifications";

import Supportingstaff from "./Components/Header/About/Supportingstaff/Supportingstaff";
import Adminpanel from "./Components/Header/Web_development_team/Adminpanel/Adminpanel";
import DigitalMonitoringCell from "./Components/Header/Web_development_team/Dmc/Dmc";
import Examination from "./Components/Header/Web_development_team/Examinations/Examination";
import Iqac from "./Components/Header/Web_development_team/Iqac/Iqac";
import Leadcontributors from "./Components/Header/Web_development_team/Leadcontributors/Leadcontributors";
import Nss from "./Components/Header/Web_development_team/Nss/Nss";
import Placement from "./Components/Header/Web_development_team/Placement/Placement";
import ResearchAndDevelopment from "./Components/Header/Web_development_team/ResearchAndDevelopment/ResearchAndDevelopment";
import Sports from "./Components/Header/Web_development_team/Sports/Sports";
import WebDevelopmenTeam from "./Components/Header/Web_development_team/WebDevelopmenTeam";
import Website from "./Components/Header/Web_development_team/Website/Website";

function App() {
  // const location = useLocation();

  // Check if the current route is the home page ("/")
  //const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      <Dropdown />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dmc" element={<AboutMain />}>
            <Route path="about-dmc" element={<Dmc />} />
            <Route path="dmc-co-ordinator" element={<Coordinator />} />
            <Route path="dmc-designer" element={<Supportingstaff />} />
            <Route path="dmc-activities" element={<Activities />} />
            {/* <Route path="dmc-events" element={<Events />} /> */}
            <Route path="dmc-future-plans" element={<Futureplans />} />
            <Route path="dmc-facilities" element={<Facilities />} />
          </Route>

          {/* <Route path="about-elearn" element={<Elearn />} /> */}
          {/* <Route path="about-notifications" element={<Notifications />} /> */}
          <Route path="about-surveillance" element={<Surveillance />} />
          {/* <Route path="about-eticket" element={<Eticket />} /> */}
          <Route path="about-gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs />} />
          {/* <Route path="about-dmc-team" element={<Team />} /> */}


          <Route path="/wdt" element={<WebDevelopmenTeam />}>
          <Route path="lead-contributors" element={<Leadcontributors />} />
            <Route path="website-team" element={<Website />} />
            <Route path="admin-panel" element={<Adminpanel />} />
            <Route path="iqac-team" element={<Iqac />} />
            <Route path="placement-team" element={<Placement />} />
            <Route path="dmc-team" element={<DigitalMonitoringCell />} />
            <Route path="research-and-development-team" element={<ResearchAndDevelopment />} />
            <Route path="examination-team" element={<Examination />} />
            <Route path="nss-team" element={<Nss />} />
            <Route path="sports-team" element={<Sports />} />
           

          </Route>

          <Route path="Hardware" element={<Hardware />} />
          <Route path="Network" element={<Network />} />
          <Route path="SurveillanceService" element={<SurveillanceService />} />
          <Route path="Software" element={<Software />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
