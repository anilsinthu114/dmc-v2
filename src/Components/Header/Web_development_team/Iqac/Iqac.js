import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaUserFriends,
} from 'react-icons/fa';
import './Iqac.css';
import teamData from './IqacData';

// Helper to get initials from a name
function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const Iqac = () => {
  // Group team members by year
  const groupByYear = (data) => {
    return data.reduce((groups, member) => {
      if (!groups[member.year]) {
        groups[member.year] = [];
      }
      groups[member.year].push(member);
      return groups;
    }, {});
  };

  const groupedData = groupByYear(teamData);

  // Sort years in descending order
  const sortedYears = Object.keys(groupedData).sort((a, b) => b.localeCompare(a));

  // Always show all social links, even if empty
  const renderSocialLinks = (member) => (
    <div
      className="lead-socials"
      style={{
        marginTop: 10,
        display: 'flex',
        gap: 18,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 32,
      }}
    >
      <a
        href={member.website || '#'}
        className="lead-social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Website"
        style={{
          color: '#4D96FF',
          fontSize: 22,
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'color 0.2s, background 0.2s',
          opacity: member.website ? 1 : 0.35,
          pointerEvents: member.website ? 'auto' : 'none',
          borderRadius: '50%',
          padding: 6,
          background: member.website ? 'transparent' : 'none',
        }}
        tabIndex={0}
      >
        <FaGlobe />
      </a>
      <a
        href={member.linkedin || '#'}
        className="lead-social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{
          color: '#0A66C2',
          fontSize: 22,
          transition: 'color 0.2s, background 0.2s',
          opacity: member.linkedin ? 1 : 0.35,
          pointerEvents: member.linkedin ? 'auto' : 'none',
          borderRadius: '50%',
          padding: 6,
          background: member.linkedin ? 'transparent' : 'none',
        }}
        tabIndex={0}
      >
        <FaLinkedin />
      </a>
      <a
        href={member.github || '#'}
        className="lead-social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{
          color: '#333',
          fontSize: 22,
          transition: 'color 0.2s, background 0.2s',
          opacity: member.github ? 1 : 0.35,
          pointerEvents: member.github ? 'auto' : 'none',
          borderRadius: '50%',
          padding: 6,
          background: member.github ? 'transparent' : 'none',
        }}
        tabIndex={0}
      >
        <FaGithub />
      </a>
      <a
        href={member.instagram || '#'}
        className="lead-social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{
          color: '#E1306C',
          fontSize: 22,
          transition: 'color 0.2s, background 0.2s',
          opacity: member.instagram ? 1 : 0.35,
          pointerEvents: member.instagram ? 'auto' : 'none',
          borderRadius: '50%',
          padding: 6,
          background: member.instagram ? 'transparent' : 'none',
        }}
        tabIndex={0}
      >
        <FaInstagram />
      </a>
      <a
        href={member.email || '#'}
        className="lead-social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        style={{
          color: '#EA4335',
          fontSize: 22,
          transition: 'color 0.2s, background 0.2s',
          opacity: member.email ? 1 : 0.35,
          pointerEvents: member.email ? 'auto' : 'none',
          borderRadius: '50%',
          padding: 6,
          background: member.email ? 'transparent' : 'none',
        }}
        tabIndex={0}
      >
        <FaEnvelope />
      </a>
    </div>
  );

  return (
    <div
      className="wdtRight enhanced-leadcontributors"
      style={{
        padding: '32px 0',
        background: 'linear-gradient(120deg, #f8fbff 0%, #e6f0fa 100%)',
        minHeight: '100vh',
      }}
    >
      <h2
        className="SP enhanced-title"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 32,
          marginBottom: 32,
          fontWeight: 700,
          letterSpacing: 1,
          color: '#2d3a4a',
          textShadow: '0 2px 8px #4D96FF22',
        }}
      >
        <FaUserFriends style={{ marginRight: 14, color: '#4D96FF', fontSize: 36 }} />
        IQAC Cell Team
      </h2>
      <div className="leadcontributors-timeline">
        {sortedYears.map((year) => (
          <div
            key={year}
            className="year-section enhanced-year-section"
            style={{
              marginBottom: 48,
              animation: 'fadeInUp 0.7s',
            }}
          >
            <div
              className="year-title-wrapper"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 22,
              }}
            >
              <div
                className="year-dot"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4D96FF 60%, #6BCB77 100%)',
                  marginRight: 14,
                  boxShadow: '0 2px 8px #4D96FF44',
                }}
              />
              <h4
                className="year-title"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  margin: 0,
                  color: '#4D96FF',
                  letterSpacing: 0.5,
                }}
              >
                Year: {year}
              </h4>
              <div
                className="year-line"
                style={{
                  flex: 1,
                  height: 3,
                  background: 'linear-gradient(90deg, #4D96FF22 0%, #6BCB7722 100%)',
                  marginLeft: 18,
                  borderRadius: 2,
                }}
              />
            </div>
            <div
              className="lead-card-list enhanced-lead-card-list"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '32px',
                marginTop: 16,
              }}
            >
              {groupedData[year].map((member, idx) => {
                // Instead of image, use initials
                const initials = getInitials(member.name);
                return (
                  <div
                    className="lead-card enhanced-lead-card"
                    key={member.rollNumber || member.name}
                    style={{
                      background: 'linear-gradient(120deg, #fff 60%, #f0f7ff 100%)',
                      borderRadius: 20,
                      boxShadow: '0 4px 24px 0 #4D96FF18',
                      padding: 28,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                      minHeight: 340,
                      position: 'relative',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                    tabIndex={0}
                    aria-label={`IQAC Member: ${member.name}`}
                  >
                    <div
                      className="lead-avatar enhanced-lead-avatar"
                      style={{
                        background: 'linear-gradient(135deg, #e6f0fa 60%, #fff 100%)',
                        boxShadow: `0 2px 12px 0 #4D96FF33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        marginBottom: 18,
                        border: '3px solid #4D96FF22',
                        position: 'relative',
                        fontSize: 36,
                        fontWeight: 700,
                        color: '#4D96FF',
                        letterSpacing: 1,
                        userSelect: 'none',
                        textTransform: 'uppercase',
                        transition: 'background 0.2s',
                      }}
                      aria-label={`Avatar for ${member.name}`}
                    >
                      {initials}
                    </div>
                    <div
                      className="lead-details enhanced-lead-details"
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        marginTop: 2,
                      }}
                    >
                      <div
                        className="lead-name enhanced-lead-name"
                        style={{
                          fontWeight: 700,
                          fontSize: 20,
                          marginBottom: 6,
                          color: '#2d3a4a',
                          letterSpacing: 0.2,
                          textShadow: '0 1px 4px #4D96FF11',
                        }}
                      >
                        {member.name}
                      </div>
                      <div
                        className="lead-roll enhanced-lead-roll"
                        style={{
                          fontSize: 15,
                          color: '#4D96FF',
                          marginBottom: 6,
                          fontWeight: 500,
                          letterSpacing: 0.1,
                        }}
                      >
                        <span className="lead-label" style={{ fontWeight: 600 }}>
                          Roll No:
                        </span>{' '}
                        <span>{member.rollNumber}</span>
                      </div>
                      <div
                        className="lead-role enhanced-lead-role"
                        style={{ marginBottom: 12 }}
                      >
                        <span
                          className="role-badge contributor"
                          style={{
                            background: 'linear-gradient(90deg, #6BCB77 60%, #4D96FF 100%)',
                            color: '#fff',
                            borderRadius: 10,
                            padding: '4px 16px',
                            fontSize: 14,
                            fontWeight: 600,
                            boxShadow: '0 2px 8px #6BCB7722',
                            letterSpacing: 0.2,
                          }}
                        >
                          IQAC Member
                        </span>
                      </div>
                      {renderSocialLinks(member)}
                    </div>
                    {/* Decorative accent for card */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -18,
                        right: -18,
                        width: 60,
                        height: 60,
                        // background: 'radial-gradient(circle at 60% 60%, #4D96FF22 0%, transparent 20%)',
                        // borderRadius: '50%',
                        zIndex: 0,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Decorative background or accent */}
      <div
        className="leadcontributors-bg-accent"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 80% 10%, #4D96FF11 0%, transparent 60%), radial-gradient(circle at 10% 90%, #6BCB7711 0%, transparent 70%)',
        }}
      />
      {/* Responsive styles for card layout and subtle animations */}
      <style>
        {`
        @media (max-width: 900px) {
          .lead-card-list.enhanced-lead-card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 18px !important;
          }
          .lead-card.enhanced-lead-card {
            padding: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .lead-card-list.enhanced-lead-card-list {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .lead-card.enhanced-lead-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
            padding: 12px !important;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .lead-card.enhanced-lead-card:focus-within,
        .lead-card.enhanced-lead-card:focus {
          outline: 2px solid #4D96FF;
          outline-offset: 2px;
          box-shadow: 0 8px 32px 0 #4D96FF33;
        }
        .lead-social-link:focus {
          outline: 2px solid #4D96FF;
          border-radius: 50%;
        }
        /* Card hover effect */
        .lead-card.enhanced-lead-card:hover {
          background: linear-gradient(120deg, #e6f0fa 60%, #d0e6ff 100%);
          transform: translateY(-6px) scale(1.025);
          box-shadow: 0 8px 32px 0 #4D96FF33;
        }
        /* Avatar hover effect */
        .lead-card.enhanced-lead-card:hover .lead-avatar.enhanced-lead-avatar {
          background: linear-gradient(135deg, #d0e6ff 60%, #e6f0fa 100%);
        }
        /* Social icon hover effect */
        .lead-social-link:hover {
          background: #f0f7ff;
          box-shadow: 0 2px 8px #4D96FF22;
          opacity: 1 !important;
        }
        .lead-social-link[aria-label="Website"]:hover {
          color: #2563eb;
        }
        .lead-social-link[aria-label="LinkedIn"]:hover {
          color: #004182;
        }
        .lead-social-link[aria-label="GitHub"]:hover {
          color: #171515;
        }
        .lead-social-link[aria-label="Instagram"]:hover {
          color: #c13584;
        }
        .lead-social-link[aria-label="Email"]:hover {
          color: #b23121;
        }
        `}
      </style>
    </div>
  );
};

export default Iqac;
