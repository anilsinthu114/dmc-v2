import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Dropdown from "./Components/Header/Dropdown";
import AboutMain from "./Components/Header/About/AboutMain";
import Activities from "./Components/Header/About/Activities/Activities";
import Dmc from "./Components/Header/About/Dmc/Dmc";
import Events from "./Components/Header/About/Events/Events";
import Facilities from "./Components/Header/About/Facilities/Facilities";
import Futureplans from "./Components/Header/About/Futureplans/Futureplans";
import Elearn from "./Components/Header/Elearn/Elearn";
import Surveillance from "./Components/Header/Surveillance/Surveillance";
import Eticket from "./Components/Header/Eticket/Eticket";
import Gallery from "./Components/Header/Gallery/Gallery";
import ContactUs from "./Components/Header/ContactUs/ContactUs";
import Team from "./Components/Header/Team/Team";
import Coordinator from './Components/Header/About/Coordinator/Coordinator';

import Hardware from "./Components/Home/Hardware";
import Network from "./Components/Home/Network";
import SurveillanceService from "./Components/Home/SurveillanceService";
import Software from "./Components/Home/Software";

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
            <Route path="dmc-activities" element={<Activities />} />
            <Route path="dmc-events" element={<Events />} />
            <Route path="dmc-future-plans" element={<Futureplans />} />
            <Route path="dmc-facilities" element={<Facilities />} />
          </Route>

          <Route path="about-elearn" element={<Elearn />} />
          <Route path="about-surveillance" element={<Surveillance />} />
          <Route path="about-eticket" element={<Eticket />} />
          <Route path="about-gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-dmc-team" element={<Team />} />

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
