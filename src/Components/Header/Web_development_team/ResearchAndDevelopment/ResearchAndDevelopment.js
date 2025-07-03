import React from 'react';
import './ResearchAndDevelopment.css';
import teamData from './ResearchAndDevelopmentData';

// Helper to get initials from a name
function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const ResearchAndDevelopment = () => {
  return (
    <div className="wdtRight" style={{ padding: '32px 0', background: 'linear-gradient(120deg, #f8fbff 0%, #e6f0fa 100%)', minHeight: '100vh' }}>
      <h3 className="SP" style={{
        fontSize: 32,
        marginBottom: 32,
        fontWeight: 700,
        letterSpacing: 1,
        color: '#2d3a4a',
        textShadow: '0 2px 8px #4D96FF22',
        textAlign: 'center'
      }}>
        Research and Development Cell Team
      </h3>
      <div
        className="rd-card-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          marginTop: 16,
          padding: '0 16px'
        }}
      >
        {teamData.map((member, idx) => {
          const initials = getInitials(member.name);
          return (
            <div
              key={idx}
              className="rd-card"
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
                className="rd-avatar"
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
                  userSelect: 'none',
                  letterSpacing: 1,
                }}
                aria-label={`Initials for ${member.name}`}
              >
                {initials}
              </div>
              <div
                className="rd-name"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 8,
                  color: '#2d3a4a',
                  letterSpacing: 0.2,
                  textAlign: 'center',
                  textShadow: '0 1px 4px #4D96FF11',
                }}
              >
                {member.name}
              </div>
              <div
                className="rd-roll"
                style={{
                  fontSize: 15,
                  color: '#4D96FF',
                  marginBottom: 6,
                  fontWeight: 500,
                  letterSpacing: 0.1,
                  textAlign: 'center'
                }}
              >
                <span style={{ fontWeight: 600 }}>Roll No:</span> {member.rollNumber}
              </div>
              <div
                className="rd-year"
                style={{
                  fontSize: 15,
                  color: '#6BCB77',
                  fontWeight: 500,
                  letterSpacing: 0.1,
                  textAlign: 'center'
                }}
              >
                <span style={{ fontWeight: 600 }}>Year:</span> {member.year}
              </div>
            </div>
          );
        })}
      </div>
      {/* Responsive styles for card layout */}
      <style>
        {`
        @media (max-width: 900px) {
          .rd-card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 18px !important;
          }
          .rd-card {
            padding: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .rd-card-list {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .rd-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default ResearchAndDevelopment;
