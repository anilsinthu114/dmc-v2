import React from 'react';
import { useParams } from 'react-router-dom';
import './AQAR.css';
import AnnualQualityAssuranceReportData from './AQARData';

const AQAR = () => {
  const AnnualQualityAssuranceReport = AnnualQualityAssuranceReportData;
  const { path } = useParams(); // Get the 'path' parameter from the URL

  const handleViewDownload = (pdfPath) => {
    window.location.href = pdfPath;
  };

  const renderAQARTableRows = () => {
    const aqarReports = AnnualQualityAssuranceReport.slice(0, 3); // First three reports for AQAR
    return aqarReports.map((report) => (
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

  const renderAARTableRows = () => {
    const aarReports = AnnualQualityAssuranceReport.slice(3, 6); // Next three reports for AAR
    return aarReports.map((report) => (
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

  const renderAuditReportTableRows = () => {
    const auditReports = AnnualQualityAssuranceReport.slice(6); // Remaining reports for Audit Reports
    return auditReports.map((report) => (
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
      <h2 className='AQAR2'>Annual Quality Assurance Report (AQAR)</h2>
      {path ? ( // Render PdfViewer if 'path' parameter is present
        <PdfViewer />
      ) : (
        <table className='reports'>
          <thead>
            <tr>
              <th>AQAR Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{renderAQARTableRows()}</tbody>
        </table>
      )}
      <h2 className='AQAR2'>Academic Audit Report (AAR)</h2>
      {path ? ( // Render PdfViewer if 'path' parameter is present
        <PdfViewer />
      ) : (
        <table className='reports'>
          <thead>
            <tr>
              <th>AAR Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{renderAARTableRows()}</tbody>
        </table>
      )}
      <h2 className='AR2'>Audit Reports</h2>
      {path ? ( // Render PdfViewer if 'path' parameter is present
        <PdfViewer />
      ) : (
        <table className='reports'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{renderAuditReportTableRows()}</tbody>
        </table>
      )}
      <br></br><br></br>
    </div>
  );
};

export default AQAR;
