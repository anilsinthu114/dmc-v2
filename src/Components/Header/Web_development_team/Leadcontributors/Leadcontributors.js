import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaUserCircle
} from 'react-icons/fa';
import teamData from './LeadcontributorsData';

// Enhanced: Add fallback avatar colors for initials
const AVATAR_COLORS = [
  "#4D96FF", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
];
const getAvatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name) => {
  const parts = name.trim().split(' ');
  return parts.length === 1 ? parts[0][0].toUpperCase() : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getSocialLabel = (type, name) => {
  const labels = {
    linkedin: `LinkedIn profile of ${name}`,
    github: `GitHub profile of ${name}`,
    instagram: `Instagram profile of ${name}`,
    email: `Email ${name}`,
    website: `Website of ${name}`
  };
  return labels[type] || '';
};

const groupByYear = (data) => {
  return data.reduce((acc, item) => {
    acc[item.year] = acc[item.year] || [];
    acc[item.year].push(item);
    return acc;
  }, {});
};

const Leadcontributors = () => {
  const groupedData = groupByYear(teamData);
  const sortedYears = Object.keys(groupedData).sort((a, b) => {
    const startA = parseInt(a.split('-')[0], 10) || 0;
    const startB = parseInt(b.split('-')[0], 10) || 0;
    return startB - startA;
  });

  return (
    <div className="lead-container">
      <h2 className="lead-title">
        <FaUserCircle style={{ marginRight: 10, fontSize: 32 }} />
        Lead Contributors
      </h2>
      <div className="lead-wrapper">
        {sortedYears.map((year, yIdx) => (
          <div className="year-section" key={year}>
            <div className="year-header">
              <div className="year-dot" />
              <h4 className="year-label">{year}</h4>
              <div className="year-line" />
            </div>
            <div className="card-grid">
              {groupedData[year].map((member, idx) => (
                <div className="card enhanced-card" key={member.rollNumber || member.name} tabIndex={0}>
                  <div className="avatar enhanced-avatar" style={!member.image ? { background: getAvatarColor(member.name) } : {}}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} loading="lazy" />
                    ) : (
                      <div className="initials">{getInitials(member.name)}</div>
                    )}
                  </div>
                  <div className="info">
                    <div className="name-row">
                      <span className="name">{member.name}</span>
                    </div>
                    <div className="roll-branch-row">
                      <span className="roll">{member.rollNumber}</span>
                      {member.branch && <span className="branch">{member.branch}</span>}
                    </div>
                    <div className="role">
                      <span className="badge">{member.role || "Contributor"}</span>
                    </div>
                    <div className="socials">
                      {member.website && (
                        <a href={member.website} aria-label={getSocialLabel('website', member.name)} target="_blank" rel="noopener noreferrer" className="social-link globe"><FaGlobe /></a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} aria-label={getSocialLabel('linkedin', member.name)} target="_blank" rel="noopener noreferrer" className="social-link linkedin"><FaLinkedin /></a>
                      )}
                      {member.github && (
                        <a href={member.github} aria-label={getSocialLabel('github', member.name)} target="_blank" rel="noopener noreferrer" className="social-link github"><FaGithub /></a>
                      )}
                      {member.instagram && (
                        <a href={member.instagram} aria-label={getSocialLabel('instagram', member.name)} target="_blank" rel="noopener noreferrer" className="social-link instagram"><FaInstagram /></a>
                      )}
                      {member.email && (
                        <a href={member.email} aria-label={getSocialLabel('email', member.name)} target="_blank" rel="noopener noreferrer" className="social-link email"><FaEnvelope /></a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Inline Responsive Styles */}
      <style>{`
        .lead-container {
          padding: 2.5rem 1rem 2rem 1rem;
          background: linear-gradient(120deg, #f8fafc 60%, #e3f0ff 100%);
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }
        .lead-title {
          display: flex;
          align-items: center;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 2.2rem;
          color: #035a5a;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 8px #035a5a11;
        }
        .year-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.2rem;
        }
        .year-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4D96FF, #6BCB77);
          margin-right: 0.7rem;
          box-shadow: 0 2px 8px #4D96FF33;
        }
        .year-label {
          font-size: 1.18rem;
          font-weight: 700;
          color: #035a5a;
          margin-right: 0.7rem;
          letter-spacing: 0.2px;
        }
        .year-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #d0e6f9 60%, #b2e0c6 100%);
          border-radius: 2px;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
        }
        .card.enhanced-card {
          background: #fff;
          border-radius: 18px;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          box-shadow: 0 4px 18px 0 #035a5a18;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.18s, transform 0.18s;
          position: relative;
          border: 2px solid transparent;
          animation: fadeInUp 0.5s;
        }
        .card.enhanced-card:focus-within,
        .card.enhanced-card:focus {
          outline: none;
          border: 2px solid #4D96FF;
          box-shadow: 0 8px 32px 0 #4D96FF33;
        }
        .enhanced-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #eaf6f6;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.7rem;
          box-shadow: 0 2px 10px #035a5a11;
          border: 3px solid #e0f7fa;
          position: relative;
        }
        .enhanced-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .initials {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px #035a5a33;
        }
        .info {
          text-align: center;
          width: 100%;
        }
        .name-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7em;
          margin-bottom: 0.3em;
        }
        .serial {
          display: hidden;
          font-weight: 700;
          font-size: 1.08em;
          color: #4D96FF;
          background: #e0f7fa;
          border-radius: 50%;
          width: 2em;
          height: 2em;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.3em;
          box-shadow: 0 1px 4px #4D96FF22;
        }
        .name {
          font-size: 1.18em;
          font-weight: 600;
          color: #222;
          word-break: break-word;
        }
        .roll-branch-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7em;
          margin-bottom: 0.2em;
        }
        .roll {
          font-family: 'Roboto Mono', monospace, monospace;
          font-size: 1em;
          color: #035a5a;
          background: #eaf6f6;
          border-radius: 5px;
          padding: 2px 10px;
          display: inline-block;
        }
        .branch {
          font-size: 0.98em;
          color: #888;
          background: #f3f7fa;
          border-radius: 5px;
          padding: 2px 10px;
          display: inline-block;
        }
        .role {
          margin-top: 0.3rem;
        }
        .badge {
          background: linear-gradient(90deg, #4D96FF 60%, #6BCB77 100%);
          color: #fff;
          padding: 3px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          box-shadow: 0 1px 4px #4D96FF22;
        }
        .socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 0.7rem;
        }
        .social-link {
          font-size: 1.25rem;
          color: #4D96FF;
          background: #eaf6f6;
          border-radius: 50%;
          width: 2.2em;
          height: 2.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.18s, box-shadow 0.18s, color 0.18s, background 0.18s;
          box-shadow: 0 1px 4px #035a5a11;
          border: none;
        }
        .social-link.linkedin { color: #0a66c2; }
        .social-link.github { color: #181717; }
        .social-link.instagram { color: #e1306c; }
        .social-link.globe { color: #1eae98; }
        .social-link.email { color: #f9a826; }
        .social-link:hover, .social-link:focus {
          transform: scale(1.18) translateY(-2px);
          background: #f0f8ff;
          box-shadow: 0 4px 16px #4D96FF33;
          color: #035a5a;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px);}
          to { opacity: 1; transform: translateY(0);}
        }

        /* Responsive tweaks */
        @media (max-width: 900px) {
          .card-grid {
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          }
          .enhanced-avatar { width: 56px; height: 56px; }
        }
        @media (max-width: 600px) {
          .lead-title { font-size: 1.3rem; }
          .year-label { font-size: 1rem; }
          .card.enhanced-card { padding: 1rem 0.7rem; }
          .enhanced-avatar { width: 44px; height: 44px; }
          .initials { font-size: 1rem; }
          .name { font-size: 1rem; }
          .serial { font-size: 1em; }
          .badge { font-size: 0.7rem; }
          .social-link { font-size: 1.05rem; width: 1.8em; height: 1.8em; }
        }
      `}</style>
    </div>
  );
};

export default Leadcontributors;
