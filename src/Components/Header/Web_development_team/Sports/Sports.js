import React from 'react';
import './Sports.css';
import teamData from './SportsData';

// Helper to get initials from a name
function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// SVG icons for social links
const icons = {
  linkedin: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#0077B5"/>
      <path d="M7.5 8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM6 10h3v8H6v-8Zm5 0h2.7v1.1h.04c.38-.72 1.3-1.48 2.66-1.48C19.5 9.62 20 11.1 20 13.08V18h-3v-4.1c0-.98-.02-2.24-1.36-2.24-1.36 0-1.57 1.06-1.57 2.16V18h-3v-8Z" fill="#fff"/>
    </svg>
  ),
  github: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#181717"/>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.54 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#fff"/>
    </svg>
  ),
  instagram: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#E4405F"/>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.25-8.1a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM21 8.25c-.03-1.17-.32-2.2-1.17-3.05C18.2 4.32 17.17 4.03 16 4c-1.18-.03-4.72-.03-5.9 0-1.17.03-2.2.32-3.05 1.17C4.32 5.8 4.03 6.83 4 8c-.03 1.18-.03 4.72 0 5.9.03 1.17.32 2.2 1.17 3.05.85.85 1.88 1.14 3.05 1.17 1.18.03 4.72.03 5.9 0 1.17-.03 2.2-.32 3.05-1.17.85-.85 1.14-1.88 1.17-3.05.03-1.18.03-4.72 0-5.9ZM19.2 17.2c-.2.5-.58.88-1.08 1.08-.75.3-2.53.23-6.12.23s-5.37.07-6.12-.23a1.25 1.25 0 0 1-1.08-1.08c-.3-.75-.23-2.53-.23-6.12s-.07-5.37.23-6.12c.2-.5.58-.88 1.08-1.08.75-.3 2.53-.23 6.12-.23s5.37-.07 6.12.23c.5.2.88.58 1.08 1.08.3.75.23 2.53.23 6.12s.07 5.37-.23 6.12Z" fill="#fff"/>
    </svg>
  ),
  website: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#4D96FF"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9l11.21 11.21A7.963 7.963 0 0 1 12 20Zm6.31-3.1L7.1 4.69A7.963 7.963 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9Z" fill="#fff"/>
    </svg>
  ),
  email: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="5" fill="#6BCB77"/>
      <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 8.01V8h16Zm-16 8V9.24l7.39 4.91c.37.25.85.25 1.22 0L20 9.24V16H4Z" fill="#fff"/>
    </svg>
  ),
};

// Social link keys and their display order
const socialKeys = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'website', label: 'Website' },
  { key: 'email', label: 'Email' },
];

const Sports = () => {
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
        Sports Cell Team
      </h3>
      <div
        className="sports-card-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          marginTop: 16,
          padding: '0 16px',
        }}
      >
        {teamData.map((member, idx) => {
          const initials = getInitials(member.name);
          return (
            <div
              key={idx}
              className="sports-card"
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
                className="sports-avatar"
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
                  boxShadow: '0 2px 8px #4D96FF22',
                  userSelect: 'none',
                  letterSpacing: 1,
                }}
                title={member.name}
              >
                {initials}
              </div>
              <div
                className="sports-name"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#2d3a4a',
                  marginBottom: 4,
                  textAlign: 'center',
                  letterSpacing: 0.2,
                }}
              >
                {member.name}
              </div>
              <div
                className="sports-roll"
                style={{
                  fontSize: 15,
                  color: '#4D96FF',
                  fontWeight: 500,
                  letterSpacing: 0.1,
                  marginBottom: 2,
                  textAlign: 'center',
                }}
              >
                <span style={{ fontWeight: 600 }}>Roll No:</span> {member.rollNumber}
              </div>
              <div
                className="sports-year"
                style={{
                  fontSize: 15,
                  color: '#6BCB77',
                  fontWeight: 500,
                  letterSpacing: 0.1,
                  textAlign: 'center',
                  marginBottom: 10,
                }}
              >
                <span style={{ fontWeight: 600 }}>Year:</span> {member.year}
              </div>
              <div
                className="sports-socials"
                style={{
                  display: 'flex',
                  gap: 12,
                  marginTop: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {socialKeys.map(({ key, label }) => {
                  const value = member[key];
                  if (key === 'email') {
                    return (
                      <a
                        key={key}
                        href={value ? `mailto:${value}` : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        style={{
                          opacity: value ? 1 : 0.45,
                          pointerEvents: value ? 'auto' : 'none',
                          borderRadius: '50%',
                          background: '#f8fbff',
                          padding: 3,
                          display: 'inline-flex',
                        }}
                        tabIndex={value ? 0 : -1}
                        aria-disabled={!value}
                      >
                        {icons.email}
                      </a>
                    );
                  }
                  if (key === 'website') {
                    return (
                      <a
                        key={key}
                        href={value ? value : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        style={{
                          opacity: value ? 1 : 0.45,
                          pointerEvents: value ? 'auto' : 'none',
                          borderRadius: '50%',
                          background: '#f8fbff',
                          padding: 3,
                          display: 'inline-flex',
                        }}
                        tabIndex={value ? 0 : -1}
                        aria-disabled={!value}
                      >
                        {icons.website}
                      </a>
                    );
                  }
                  // For LinkedIn, GitHub, Instagram
                  return (
                    <a
                      key={key}
                      href={value ? value : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      style={{
                        opacity: value ? 1 : 0.45,
                        pointerEvents: value ? 'auto' : 'none',
                        borderRadius: '50%',
                        background: '#f8fbff',
                        padding: 3,
                        display: 'inline-flex',
                      }}
                      tabIndex={value ? 0 : -1}
                      aria-disabled={!value}
                    >
                      {icons[key]}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* Responsive styles for card layout */}
      <style>
        {`
        @media (max-width: 900px) {
          .sports-card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 18px !important;
          }
          .sports-card {
            padding: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .sports-card-list {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .sports-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Sports;
