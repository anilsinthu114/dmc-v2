import React, { useState } from 'react';
import './Team.css';

// Import data directly
import teamData from './TeamData'; // Adjust the path based on your project structure

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((member, index) => (
      <tr key={`${member.rollNumber}-${member.year}`} className="team-row">
        <td>{indexOfFirstItem + index + 1}</td>
        <td>{member.name}</td>
        <td>{member.rollNumber}</td>
        <td>
          <span className="year-badge">{member.year}</span>
        </td>
      </tr>
    ));
  };

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px'
  };

  const searchInputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: '1',
    minWidth: '300px'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#34495e',
    fontSize: '1.1rem'
  };

  const searchInputStyle = {
    flex: '1',
    padding: '12px 16px',
    border: '2px solid #bdc3c7',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none'
  };

  const resultsInfoStyle = {
    color: '#7f8c8d',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const tableContainerStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '30px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1rem'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '16px 12px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '1.1rem',
    borderBottom: '2px solid #5a6fd8'
  };

  const cellStyle = {
    padding: '14px 12px',
    borderBottom: '1px solid #ecf0f1',
    transition: 'background-color 0.2s'
  };

  const paginationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px'
  };

  const paginationBtnStyle = {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.2s',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const disabledBtnStyle = {
    ...paginationBtnStyle,
    backgroundColor: '#bdc3c7',
    cursor: 'not-allowed'
  };

  const activeBtnStyle = {
    ...paginationBtnStyle,
    backgroundColor: '#2980b9'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#7f8c8d',
    fontSize: '1.1rem',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Team Members</h3>
      
      {/* Search Section */}
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

      {/* Table Section */}
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>S.No</th>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>Roll Number</th>
              <th style={headerStyle}>Year</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
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

export default Team;
