import React, { useState } from 'react';
import './Placement.css';
import teamData from './PlacementData';

// Helper to get initials from a name
function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const getUniqueYears = (data) => {
  const years = data.map(member => member.year);
  return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
};

const Placement = () => {
  const [sortYear, setSortYear] = useState('All');
  const years = getUniqueYears(teamData);

  const filteredData = sortYear === 'All'
    ? teamData
    : teamData.filter(member => member.year === sortYear);

  return (
    <div
      className="wdtRight"
      style={{
        padding: '32px 0',
        background: 'linear-gradient(120deg, #f8fbff 0%, #e6f0fa 100%)',
        minHeight: '100vh',
      }}
    >
      <h3
        className="SP"
        style={{
          fontSize: 32,
          marginBottom: 32,
          fontWeight: 700,
          letterSpacing: 1,
          color: '#2d3a4a',
          textShadow: '0 2px 8px #4D96FF22',
          textAlign: 'center',
        }}
      >
        Placement Cell Team
      </h3>
      <div
        className="search-container"
        style={{
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 16,
        }}
      >
        <label htmlFor="yearSort" style={{ fontWeight: 500, color: '#2d3a4a' }}>
          Sort by Year:
        </label>
        <select
          id="yearSort"
          value={sortYear}
          onChange={e => setSortYear(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #4D96FF55',
            fontSize: 15,
            background: '#f8fbff',
            color: '#2d3a4a',
            outline: 'none',
            fontWeight: 500,
          }}
        >
          <option value="All">All</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div
        className="placement-card-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          marginTop: 16,
          padding: '0 16px',
        }}
      >
        {filteredData.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', fontSize: 18 }}>
            No members found for the selected year.
          </div>
        ) : (
          filteredData.map((member, idx) => {
            const initials = getInitials(member.name);
            return (
              <div
                key={idx}
                className="placement-card"
                style={{
                  background: '#fff',
                  borderRadius: 18,
                  boxShadow: '0 2px 16px #4D96FF11',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: 220,
                  transition: 'transform 0.18s, box-shadow 0.18s',
                }}
              >
                <div
                  className="placement-avatar"
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4D96FF 60%, #6BCB77 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 18,
                    boxShadow: '0 2px 8px #4D96FF33',
                    letterSpacing: 1,
                  }}
                  aria-label={`Profile initials for ${member.name}`}
                >
                  {initials}
                </div>
                <div
                  className="placement-name"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#2d3a4a',
                    textAlign: 'center',
                    marginBottom: 6,
                  }}
                >
                  {member.name}
                </div>
                <div
                  className="placement-roll"
                  style={{
                    fontSize: 15,
                    color: '#4D96FF',
                    fontWeight: 500,
                    letterSpacing: 0.1,
                    textAlign: 'center',
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Roll No:</span> {member.rollNumber}
                </div>
                <div
                  className="placement-year"
                  style={{
                    fontSize: 15,
                    color: '#6BCB77',
                    fontWeight: 500,
                    letterSpacing: 0.1,
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Year:</span> {member.year}
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Responsive styles for card layout */}
      <style>
        {`
        @media (max-width: 900px) {
          .placement-card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 18px !important;
          }
          .placement-card {
            padding: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .placement-card-list {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .placement-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Placement;
