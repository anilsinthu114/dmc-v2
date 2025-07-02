import React, { useMemo, useState } from 'react';
import './Dmc.css';
import teamData from './DmcData';

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const DigitalMonitoringCell = () => {
  // Search and pagination state
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    return teamData
      .filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.year && member.year.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        // Sort by year descending, then by name
        const yearA = parseInt(a.year?.split('-')[0] || 0, 10);
        const yearB = parseInt(b.year?.split('-')[0] || 0, 10);
        if (yearA !== yearB) return yearB - yearA;
        return a.name.localeCompare(b.name);
      });
  }, [searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Unique years for grouping
  const uniqueYears = useMemo(() => {
    return [
      ...new Set(filteredData.map(member => member.year))
    ].sort((a, b) => {
      const startYearA = parseInt(a?.split('-')[0] || 0, 10);
      const startYearB = parseInt(b?.split('-')[0] || 0, 10);
      return startYearB - startYearA;
    });
  }, [filteredData]);

  // Group paginated data by year
  const groupedData = useMemo(() => {
    const group = {};
    paginatedData.forEach(member => {
      if (!group[member.year]) group[member.year] = [];
      group[member.year].push(member);
    });
    return group;
  }, [paginatedData]);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Card styles (inline for now, can move to CSS)
  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    margin: '24px 0'
  };
  const cardStyle = {
    background: '#fff',
    borderRadius: '14px',
    boxShadow: '0 2px 12px rgba(44, 62, 80, 0.08)',
    padding: '24px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '220px',
    position: 'relative'
  };
  const avatarStyle = {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #580896 60%, #2e0669 100%)',
    color: '#fff',
    fontWeight: 700,
    fontSize: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    boxShadow: '0 2px 8px rgba(88, 8, 150, 0.10)',
    userSelect: 'none'
  };
  const nameStyle = {
    fontWeight: 600,
    fontSize: '1.08rem',
    color: '#2e0669',
    marginBottom: 4,
    textAlign: 'center'
  };
  const rollStyle = {
    fontSize: '0.98rem',
    color: '#555',
    marginBottom: 2,
    textAlign: 'center'
  };
  const snoStyle = {
    position: 'absolute',
    top: 10,
    right: 16,
    fontSize: '0.92rem',
    color: '#b0b0b0',
    fontWeight: 500
  };

  return (
    <div className="admin-wrapper">
      <h2 className="admin-title">DMC Cell Team</h2>
      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name, roll number, or year..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className="results-info">
          Showing {filteredData.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1}
          {filteredData.length > 0 && (
            <> - {Math.min(currentPage * rowsPerPage, filteredData.length)}</>
          )} of {filteredData.length} results
        </span>
      </div>
      {filteredData.length === 0 ? (
        <div className="no-results">
          No results found for "{searchTerm}". Please try a different search term.
        </div>
      ) : (
        uniqueYears.map(year => (
          groupedData[year] && groupedData[year].length > 0 && (
            <div key={year} className="year-section">
              <h4 style={{ textAlign: 'center', margin: '18px 0 8px 0', color: '#2e0669' }}>
                Year: {year}
              </h4>
              <div style={cardGridStyle}>
                {groupedData[year].map((member, idx) => {
                  // Calculate S.No in filteredData
                  const sno = (currentPage - 1) * rowsPerPage + filteredData.findIndex(m => m === member) + 1;
                  return (
                    <div key={member.rollNumber || member.name} style={cardStyle}>
                      <div style={snoStyle}>#{sno}</div>
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{
                            ...avatarStyle,
                            objectFit: 'cover',
                            background: '#eee'
                          }}
                        />
                      ) : (
                        <div style={avatarStyle}>{getInitials(member.name)}</div>
                      )}
                      <div style={nameStyle}>{member.name}</div>
                      <div style={rollStyle}>{member.rollNumber}</div>
                    </div>
                  );
                })}
              </div>
              <br />
            </div>
          )
        ))
      )}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              className={`page-btn ${currentPage === num ? "active" : ""}`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
          <button
            className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DigitalMonitoringCell;
