import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AboutMain from './components/Header/About/AboutMain';
import IQAC from './components/Header/About/IQAC/IQAC';
import JNTUGV from './components/Header/About/JNTUGV/JNTUGV';
import Director from './components/Header/About/DIRECTOR/Director';
import Coursedetails from './components/Header/Coursedetails/Coursedetails';
import UGsyllabus from './components/Header/Coursedetails/UGsyllabus/UGsyllabus';
import PGsyllabus from './components/Header/Coursedetails/PGsyllabus/PGsyllabus';

import ProgrammesOffered from './components/Header/Programmes_offered/ProgrammesOffered';
import Reports from './components/Header/Reports/Reports';
import QAT from './components/Header/QAT/QAT';
import AQAR from './components/Header/AQAR/AQAR';
import PdfViewer from './components/Header/AQAR/PdfViewer';
import FeedbackformsMain from './components/Header/Feedbackforms/FeedbackformsMain';
import Faculty from './components/Header/Feedbackforms/Faculty/Faculty';
import Student from './components/Header/Feedbackforms/Student/Student';
import Alumni from './components/Header/Feedbackforms/Alumni/Alumni';
import CS from './components/Home/Data/CS';
import VisionMission from './components/Home/Data/Visionmission';
import IIQA from './components/Home/Data/IIQA';
import NAAC from './components/Home/Data/NAAC';
import NAACSSR from './components/Home/Data/NAACSSR';
import FA from './components/Home/Data/FA';
// import AICTE from './components/Home/Data/AICTE';
import PCOI from './components/Home/Data/PCOI';
// import NewsandEvents from './components/Home/NewsandEvents/NewsandEvents';
// import Scrollbar from './components/Home/NewsandEvents/Scrollbar';
// import UpdatePanel from './components/Home/UpdatePanel/UpdatePanel';
import Coordinator from './components/Header/About/Coordinator/Coordinato';

import Strategies from './components/Home/Data/Strategies';
import Functions from './components/Home/Data/Functions';
import Benefits from './components/Home/Data/Benefits';
import Monitoring from './components/Home/Data/Monitoring';
import Operational from './components/Home/Data/Operational';
import Notifications from './components/Header/Notifications/Notifications';
import Outcomes from './components/Home/Data/Outcomes';

import AICTE from './components/Home/AICTE/AICTE';
import MOU from './components/Home/Data/MOU';
import Events from './components/Home/Data/Events';
import Forms from './components/Header/Forms/Forms';

function App() {
 // const location = useLocation();

  // Check if the current route is the home page ("/")
  //const isHomePage = location.pathname === '/';

  return (
    <Router> 
    <div>
      <Header />
      
      <Home />
    <div>
      <Header /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutMain />}>
          <Route path="about-iqac" element={<IQAC />} />
          <Route path="about-jntugv" element={<JNTUGV />} />
          <Route path="about-director" element={<Director />} />
          <Route path="about-coordinator" element={<Coordinator />} />
        </Route>
        <Route path="/reports" element={<Reports />} />

        
  <Route path="/about-course-details" element={<Coursedetails />}>
    <Route path="about-ug-syllabus" element={<UGsyllabus />} />
    <Route path="about-pg-syllabus" element={<PGsyllabus />} />

    {/* Add more nested routes as needed */}
  </Route>



        
        <Route path="/programmes-offered" element={<ProgrammesOffered />} />
         <Route path="/qat" element={<QAT />} /> 
        <Route path="/AQAR" element={<AQAR />} />
        <Route path="/pdf-viewer/:path" element={<PdfViewer />} />
        <Route path="/forms" element={<Forms />} />
      
      <Route path="/feedbackforms" element={<FeedbackformsMain />}>
          <Route path="faculty-form" element={<Faculty />} />
          <Route path="student-form" element={<Student />} />
          <Route path="alumni-form" element={<Alumni />} />
        </Route>
        
        <Route path="/about-vision-mission" element={<VisionMission />} />
        <Route path="/about-consulty-services" element={<CS />} />
        <Route path="/about-iiqa" element={<IIQA />} /> 
        <Route path="/about-naac-criteria" element={<NAAC />} /> 
        <Route path="/about-naac-ssr" element={<NAACSSR />} /> 
        <Route path="/about-faculty-awards" element={<FA />} />
        <Route path="/about-strategies" element={<Strategies />} />
        <Route path="/about-functions" element={<Functions />} />
        <Route path="/about-benefits" element={<Benefits />} />
        <Route path="/about-course-details/about-ug-syllabus" element={<UGsyllabus />} />
        <Route path="/feedbackforms/faculty-form" element={<Faculty />} />
        <Route path="/about-operational" element={<Operational />} />
        <Route path="/about-monitoring" element={<Monitoring />} />
        <Route path="/about-aicte-approvals" element={<AICTE />} />
        <Route path="/about-pcoi" element={<PCOI />} />
        <Route path="/about-mou" element={<MOU />} />
        <Route path="/about-events" element={<Events />} />
        <Route path="/about-outcomes" element={<Outcomes />} />
        {/* <Route path="/news-and-events" element={<NewsandEvents />} /> 
        <Route path="/scrolling-bar" element={<Scrollbar />} />
        <Route path="/update-panel" element={<UpdatePanel />} /> */}

        <Route path="/notifications" element={<Notifications />} /> 

        </Routes>

        

      
      {/* {isHomePage && <Footer />} */}
      <Footer />
    </div>
  </Router>
  );
}

export default App;
