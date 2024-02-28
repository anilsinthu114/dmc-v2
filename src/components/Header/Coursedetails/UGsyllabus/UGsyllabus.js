import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Coursedetails.css';
import UGSyllabusData from './UGsyllabusData';

const UGsyllabus = () => {
    const { path } = useParams(); // Get the 'path' parameter from the URL
    const [activeTab, setActiveTab] = useState("R23"); // State to track active tab
  
    const handleViewDownload = (pdfPath) => {
      window.location.href = pdfPath;
    };
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
  
    const renderSyllabusTableRows = () => {
      // Filter data based on the selected tab
      const filteredData = UGSyllabusData.filter((report) => {
        if (activeTab === "R23") {
          return report.sno <= 7;
        } else if (activeTab === "R20") {
          return report.sno >= 8 && report.sno <= 14;
        } else if (activeTab === "R19") {
          return report.sno >= 15 && report.sno <= 21;
        } else if (activeTab === "R16") {
          return report.sno >= 22 && report.sno <= 28;
        } else if (activeTab === "R13") {
          return report.sno >= 29 && report.sno <= 35;
        } else {
          return false;
        }
      });
      
      
  
      return filteredData.map((report) => (
        <tr key={report.department}>
          
          <td>{report.department}</td>
          <td>
            <button className="button2" onClick={() => handleViewDownload(report.pdfPath)}>
              {report.name}
            </button>
          </td>
        </tr>
      ));
    };

    
  
    const PdfViewer = () => {
      // Find the selected PDF path based on the activeTab
      const selectedPdfPath = UGSyllabusData.find((report) => report.department.toLowerCase() === activeTab.toLowerCase())?.pdfPath;
  
      return (
        <div>
          <h2>PDF Viewer</h2>
          <iframe src={selectedPdfPath} title="PDF Viewer" width="100%" height="500px" />
        </div>
      );
    };
  
     

    return (
      <div>
         <h2 className="ug">Syllabi of B.Tech. Full-Time Programmes</h2>
        <ul className="tab-navigation" role="tablist">
        <li role="tab" className={`tab-item ${activeTab === "R23" ? "active" : ""}`}>
          <button className={`tab-button ${activeTab === "R23" ? "active" : ""}`} onClick={() => handleTabClick("R23")}>
           R23
          </button>
        </li>
        <li role="tab" className={`tab-item ${activeTab === "R20" ? "active" : ""}`}>
         <button className={`tab-button ${activeTab === "R20" ? "active" : ""}`} onClick={() => handleTabClick("R20")}>
          R20
         </button>
        </li>
        <li role="tab" className={`tab-item ${activeTab === "R19" ? "active" : ""}`}>
          <button className={`tab-button ${activeTab === "R19" ? "active" : ""}`} onClick={() => handleTabClick("R19")}>
           R19
          </button>
         </li>
        <li role="tab" className={`tab-item ${activeTab === "R16" ? "active" : ""}`}>
          <button className={`tab-button ${activeTab === "R16" ? "active" : ""}`} onClick={() => handleTabClick("R16")}>
           R16
          </button>
        </li> 
        <li role="tab" className={`tab-item ${activeTab === "R13" ? "active" : ""}`}>
          <button className={`tab-button ${activeTab === "R13" ? "active" : ""}`} onClick={() => handleTabClick("R13")}>
           R13
          </button>
        </li>
        </ul>
  
       
        {path ? (
          <PdfViewer />
        ) : (
          <table className="syllabus-table">
            <thead>
              <tr>
                
                <th>Department</th>
                <th>Syllabus</th>
              </tr>
            </thead>
            <tbody>{renderSyllabusTableRows()}</tbody>
          </table>
        )}<br></br><br></br>
      </div>
    );
  };

  export default UGsyllabus; 
  