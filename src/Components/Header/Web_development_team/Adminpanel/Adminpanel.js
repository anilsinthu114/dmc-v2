import React, { useState } from 'react';
import teamData from './AdminpanelData';

// Responsive Admin Panel Team Component with Card Layout
const Adminpanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Increased for card layout

  // Get unique years, sorted descending (latest first)
  const uniqueYears = [...new Set(teamData.map(member => member.year))]
    .sort((a, b) => b.localeCompare(a));

  // Filter data based on search term
  const filteredData = teamData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.year.includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Render developer cards
  const renderDeveloperCards = () => {
    return currentItems.map((member, idx) => (
      <div key={`${member.rollNumber}-${member.year}`} style={cardStyle}>
        <div style={imageContainerStyle}>
          <img
            src={member.image || '/default-avatar.png'} // Default avatar if no image
            alt={member.name}
            style={imageStyle}
            onError={(e) => {
              e.target.src = '/default-avatar.png'; // Fallback image
            }}
          />
        </div>
        <div style={cardContentStyle}>
          <h3 style={nameStyle}>{member.name}</h3>
          <p style={detailStyle}>Roll Number: {member.rollNumber}</p>
          <p style={detailStyle}>Year: {member.year}</p>
          <div style={badgeStyle}>
            <span style={badgeTextStyle}>{member.year}</span>
          </div>
        </div>
      </div>
    ));
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    margin: '0',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    color: '#2e0669',
    textAlign: 'center',
    marginBottom: '1.5em',
    fontSize: '1.5rem',
    fontWeight: '600'
  };

  const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '8px',
    marginBottom: '20px',
    width: '100%'
  };

  const searchInputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%'
  };

  const labelStyle = {
    marginRight: '6px',
    fontSize: '1rem',
    whiteSpace: 'nowrap'
  };

  const searchInputStyle = {
    flex: '1',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    minWidth: '0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const resultsInfoStyle = {
    fontSize: '0.9rem',
    color: '#666',
    textAlign: 'right'
  };

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
    width: '100%'
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    border: '1px solid #f0f0f0'
  };

  const imageContainerStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s'
  };

  const cardContentStyle = {
    padding: '16px'
  };

  const nameStyle = {
    margin: '0 0 8px 0',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2e0669'
  };

  const detailStyle = {
    margin: '4px 0',
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.4'
  };

  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: '#580896',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
    marginTop: '8px'
  };

  const badgeTextStyle = {
    margin: '0'
  };

  const paginationContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6px',
    marginTop: '20px',
    width: '100%'
  };

  const paginationBtnStyle = {
    margin: '0',
    backgroundColor: '#580896',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
    whiteSpace: 'nowrap'
  };

  const disabledBtnStyle = {
    ...paginationBtnStyle,
    backgroundColor: '#bdc3c7',
    color: '#181818',
    cursor: 'not-allowed'
  };

  const activeBtnStyle = {
    ...paginationBtnStyle,
    backgroundColor: '#4a0778'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#666',
    fontSize: '1.1rem'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Admin Panel Team</h3>
      
      {/* Search and Filter Section */}
      <div style={searchContainerStyle}>
        <div style={searchInputGroupStyle}>
          <label htmlFor="searchInput" style={labelStyle}>Search:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by name, roll number, or year..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={searchInputStyle}
          />
        </div>
        <div style={resultsInfoStyle}>
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} results
        </div>
      </div>

      {/* Cards Section */}
      <div style={cardsContainerStyle}>
        {renderDeveloperCards()}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div style={paginationContainerStyle}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={currentPage === 1 ? disabledBtnStyle : paginationBtnStyle}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              style={currentPage === pageNum ? activeBtnStyle : paginationBtnStyle}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={currentPage === totalPages ? disabledBtnStyle : paginationBtnStyle}
          >
            Next
          </button>
        </div>
      )}

      {/* No Results Message */}
      {filteredData.length === 0 && (
        <div style={noResultsStyle}>
          <p>No results found for "{searchTerm}". Please try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default Adminpanel;
