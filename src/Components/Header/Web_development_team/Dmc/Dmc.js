import React, { useMemo, useState } from 'react';
import './Dmc.css';
import teamData from './DmcData';

// Social icon SVGs
const ICONS = {
  website: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" stroke="#1976d2" strokeWidth="1.5" />
      <path d="M3 10h14M10 3a15 15 0 010 14M10 3a15 15 0 000 14" stroke="#1976d2" strokeWidth="1.2" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="3" y="7" width="3" height="10" rx="1" fill="#1976d2"/>
      <circle cx="4.5" cy="4.5" r="1.5" fill="#1976d2"/>
      <rect x="8" y="7" width="3" height="10" rx="1" fill="#1976d2"/>
      <path d="M13 11c0-1.1.9-2 2-2s2 .9 2 2v6h-3v-6z" fill="#1976d2"/>
    </svg>
  ),
  github: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 2C5.03 2 1 6.03 1 11c0 3.98 2.61 7.34 6.22 8.53.45.08.62-.2.62-.44v-1.54c-2.53.55-3.06-1.22-3.06-1.22-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.8 1.38 2.09.98 2.6.75.08-.58.31-.98.56-1.2-2.02-.23-4.15-1.01-4.15-4.5 0-.99.35-1.8.93-2.43-.09-.23-.4-1.16.09-2.41 0 0 .76-.24 2.5.92A8.7 8.7 0 0110 6.8c.77.003 1.54.104 2.26.304 1.74-1.16 2.5-.92 2.5-.92.49 1.25.18 2.18.09 2.41.58.63.93 1.44.93 2.43 0 3.5-2.14 4.27-4.17 4.5.32.28.6.83.6 1.67v2.47c0 .24.17.52.62.44C16.39 18.34 19 14.98 19 11c0-4.97-4.03-9-9-9z" fill="#1976d2"/>
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="3" y="3" width="14" height="14" rx="4" stroke="#1976d2" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="3.5" stroke="#1976d2" strokeWidth="1.2"/>
      <circle cx="14.2" cy="5.8" r="1" fill="#1976d2"/>
    </svg>
  ),
  email: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="3" y="5" width="14" height="10" rx="2" stroke="#1976d2" strokeWidth="1.5"/>
      <path d="M3.5 5.5l6.5 5 6.5-5" stroke="#1976d2" strokeWidth="1.2"/>
    </svg>
  ),
};

const socialLinks = [
  { key: "website", label: "Website" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "github", label: "GitHub" },
  { key: "instagram", label: "Instagram" },
  { key: "email", label: "Email" },
];

const socialIconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "#f3f6fa",
  margin: "0 6px",
  color: "#1976d2",
  fontSize: 18,
  transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
  boxShadow: "0 1px 4px rgba(25, 118, 210, 0.07)",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

const socialIconHoverStyle = {
  background: "#1976d2",
  color: "#fff",
  boxShadow: "0 2px 8px #1976d233",
};

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
  const [hovered, setHovered] = useState({});
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
  const roleStyle = {
    marginTop: 6,
    marginBottom: 6,
    fontSize: '0.97rem',
    color: '#1976d2',
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: 0.2,
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
                      <div style={roleStyle}>
                        <span className="badge">{member.role ? member.role : "Developer" }</span>
                      </div>
                      <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
                        {socialLinks.map(({ key, label }) =>
                          member[key] ? (
                            <a
                              key={key}
                              href={member[key]}
                              target={key === "email" ? "_self" : "_blank"}
                              rel="noopener noreferrer"
                              aria-label={label}
                              style={{
                                ...socialIconStyle,
                                ...(hovered[member.rollNumber + key]
                                  ? socialIconHoverStyle
                                  : {}),
                              }}
                              onMouseEnter={() =>
                                setHovered((prev) => ({
                                  ...prev,
                                  [member.rollNumber + key]: true,
                                }))
                              }
                              onMouseLeave={() =>
                                setHovered((prev) => ({
                                  ...prev,
                                  [member.rollNumber + key]: false,
                                }))
                              }
                            >
                              {ICONS[key]}
                            </a>
                          ) : null
                        )}
                      </div>
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
