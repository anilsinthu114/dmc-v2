import React from 'react';

const PdfViewer = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const pdfPath = queryParams.get('path');

  return (
    <div>
      <h2>PDF Viewer</h2>
      <iframe src={pdfPath} title="PDF Viewer" width="100%" height="500px" />
    </div>
  );
};

export default PdfViewer;
