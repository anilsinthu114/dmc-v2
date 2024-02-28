import React from 'react';
import { useParams } from 'react-router-dom';
import './AICTE.css';
import AICTEReportData from './AICTEData';

const AICTE = () => {
  const AICTEReport = AICTEReportData;
  const { path } = useParams(); // Get the 'path' parameter from the URL

  const handleViewDownload = (pdfPath) => {
    window.location.href = pdfPath;
  };

  const renderAICTETableRows = () => {
    const aicteReports = AICTEReport.slice(0, 10); // First three reports for AQAR
    return aicteReports.map((report) => (
      <tr key={report.sno}>
        <td>{report.sno}</td>
        <td>
          <button onClick={() => handleViewDownload(report.pdfPath)}>
            {report.name}
          </button>
        </td>
      </tr>
    ));
  };

  // const renderAARTableRows = () => {
  //   const aarReports = AITCEReport.slice(3); // Remaining reports for AAR
  //   return aarReports.map((report) => (
  //     <tr key={report.sno}>
  //       <td>{report.sno}</td>
  //       <td>
  //         <button onClick={() => handleViewDownload(report.pdfPath)}>
  //           {report.name}
  //         </button>
  //       </td>
  //     </tr>
  //   ));
  // };

  const PdfViewer = () => {
    return (
      <div>
        <h2>PDF Viewer</h2>
        <iframe src={path} title="PDF Viewer" width="100%" height="500px" />
      </div>
    );
  };

  return (
    <div>
      <h2 className='AICTE2'>All India Council for Technical Education (AICTE)</h2>
      {path ? ( // Render PdfViewer if 'path' parameter is present
        <PdfViewer />
      ) : (
        <table>
          <thead>
            <tr>
              <th>AICTE Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{renderAICTETableRows()}</tbody>
        </table>
      )}<br></br><br></br>
      {/* <h2 className='AAR2'>Academic Audit Report (AAR)</h2>
      {path ? ( // Render PdfViewer if 'path' parameter is present
        <PdfViewer />
      ) : (
        <table>
          <thead>
            <tr>
              <th>AAR Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{renderAARTableRows()}</tbody>
        </table>
      )} */}
    </div>
  );
};

export default AICTE;
