import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa';
import teamData from './WebsiteData';

const AVATAR_COLORS = [
  "#4D96FF", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
];

const getAvatarColor = (name) => {
  if (!name) return AVATAR_COLORS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
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
    if (!item.year) return acc;
    acc[item.year] = acc[item.year] || [];
    acc[item.year].push(item);
    return acc;
  }, {});
};

// Default/fallback values for social links
const DEFAULT_LINKEDIN = "#";
const DEFAULT_GITHUB = "#";
const DEFAULT_INSTAGRAM = "#";
const DEFAULT_EMAIL = "mailto:info@example.com";
const DEFAULT_WEBSITE = "#";

const filterMembers = (data, search) => {
  if (!search.trim()) return data;
  const lower = search.trim().toLowerCase();
  return data.filter(member =>
    (member.name && member.name.toLowerCase().includes(lower)) ||
    (member.rollNumber && member.rollNumber.toLowerCase().includes(lower)) ||
    (member.position && member.position.toLowerCase().includes(lower)) ||
    (member.year && member.year.toLowerCase().includes(lower))
  );
};

const Website = () => {
  const [search, setSearch] = useState('');
  // Flat list for search, but keep groupByYear for display
  const filteredData = filterMembers(teamData, search);
  const groupedData = groupByYear(filteredData);
  const sortedYears = Object.keys(groupedData).sort((a, b) => {
    const startA = parseInt(a.split('-')[0], 10) || 0;
    const startB = parseInt(b.split('-')[0], 10) || 0;
    return startB - startA;
  });

  return (
    <div className="lead-container">
      <h2 className="lead-title" style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 10 }}>
        <FaGlobe style={{ fontSize: 32, color: "#4D96FF" }} />
        Website Development Team
      </h2>
      <div className="search-bar-container" style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "right" }}>
        <form
          onSubmit={e => e.preventDefault()}
          style={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          role="search"
          aria-label="Search team members"
        >
          <div className="search-input-wrapper" style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, roll, year, or position..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6em 2.2em 0.6em 1em',
                borderRadius: 8,
                border: '1.5px solid #b3d1f7',
                fontSize: '1em',
                outline: 'none',
                boxShadow: '0 1px 4px #035a5a11'
              }}
              aria-label="Search team members"
              autoComplete="off"
            />
            <FaSearch
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#4D96FF',
                fontSize: '1.1em',
                pointerEvents: 'none'
              }}
              aria-hidden="true"
            />
          </div>
        </form>
      </div>
      <div className="lead-wrapper">
        {sortedYears.length === 0 && (
          <div style={{ textAlign: 'center', color: '#888', margin: '2em 0' }}>
            No team members found.
          </div>
        )}
         {sortedYears.map((year, yIdx) => (
           <div className="year-section" key={year}>
             <div className="year-header">
               <div className="year-dot" />
               <h4 className="year-label">{year}</h4>
               <div className="year-line" />
             </div>
            <div className="card-grid">
              {groupedData[year].map((member, idx) => {
                let imgSrc = member.image && member.image.trim() ? member.image : null;
                // Use initials as image if no image is provided
                const showInitials = !imgSrc;
                // Always show all social links, use fallback if missing
                const linkedin = member.linkedin && member.linkedin.trim() ? member.linkedin : DEFAULT_LINKEDIN;
                const github = member.github && member.github.trim() ? member.github : DEFAULT_GITHUB;
                const instagram = member.instagram && member.instagram.trim() ? member.instagram : DEFAULT_INSTAGRAM;
                const email = member.email && member.email.trim() ? member.email : DEFAULT_EMAIL;
                const website = member.website && member.website.trim() ? member.website : DEFAULT_WEBSITE;

                // Fix: Show initials in avatar if no image is provided
                return (
                  <div className="card enhanced-card" tabIndex={0} key={member.rollNumber || idx}>
                    <div
                      className="enhanced-avatar"
                      style={
                        showInitials
                          ? {
                              background: getAvatarColor(member.name),
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "1.5em",
                              fontFamily: "inherit",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }
                          : undefined
                      }
                    >
                      {showInitials ? (
                        <span>{getInitials(member.name)}</span>
                      ) : (
                        <img
                          src={imgSrc}
                          alt={`Profile of ${member.name}`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="info">
                      <div className="name-row">
                        <span className="name">{member.name}</span>
                      </div>
                      <div className="roll-branch-row">
                        {member.rollNumber && (
                          <span className="roll">{member.rollNumber}</span>
                        )}
                      </div>
                      <div className="roll-branch-row">
                        {/* Department always as Information Department */}
                        <span className="branch">Information Department</span>
                      </div>
                      {/* Role always as Contributor */}
                      <div className="role">
                        <span className="badge">{member.position && member.position.trim() ? member.position : "Contributor"}</span>
                      </div>
                      <div className="social-row" style={{ marginTop: 8, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                        <a
                          href={linkedin}
                          aria-label={getSocialLabel('linkedin', member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link linkedin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={github}
                          aria-label={getSocialLabel('github', member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link github"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={instagram}
                          aria-label={getSocialLabel('instagram', member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link instagram"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href={email}
                          aria-label={getSocialLabel('email', member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link email"
                        >
                          <FaEnvelope />
                        </a>
                        <a
                          href={website}
                          aria-label={getSocialLabel('website', member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link globe"
                        >
                          <FaGlobe />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
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
          display:'flex';
          position: relative;
          z-index: 1;
        }
        .lead-title {
          display: flex;
          align-items: center;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 2.2rem;
        }
        .search-bar-container {
          width: 100%;
          display: 'flex';
          margin-bottom: 0.5rem;
        }
        .search-input {
          transition: border 0.18s, box-shadow 0.18s;
        }
        .search-input:focus {
          border: 1.5px solid #4D96FF;
          box-shadow: 0 2px 8px #4D96FF22;
        }
        .lead-wrapper {
          width: 100%;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          justify-items: center;
        }
        @media (min-width: 1200px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.15rem;
            justify-items:center;
          }
        }
        .card.enhanced-card {
          background: #f8fafc;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 #035a5a18;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 0;
          max-width: 270px;
          width: 100%;
          padding: 1.1rem 0.8rem 1rem 0.8rem;
          margin: 0;
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
          width: 60px;
          height: 60px;
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
          font-size: 1.08em;
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
          font-size: 0.95em;
          color: #035a5a;
          background: #eaf6f6;
          border-radius: 5px;
          padding: 2px 8px;
          display: inline-block;
        }
        .branch {
          font-size: 0.93em;
          color: #888;
          background: #f3f7fa;
          border-radius: 5px;
          padding: 2px 8px;
          display: inline-block;
        }
        .role {
          margin-top: 0.3rem;
        }
        .badge {
          background: linear-gradient(90deg, #4D96FF 60%, #6BCB77 100%);
          color: #fff;
          padding: 3px 10px;
          border-radius: 6px;
          font-size: 0.9em;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 1px 4px #035a5a11;
          display: inline-block;
        }
        .social-row {
          margin-top: 0.5em;
          display: flex;
          gap: 0.7em;
          justify-content: center;
        }
        .social-link {
          font-size: 1.1rem;
          width: 2em;
          height: 2em;
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
        @media (max-width: 1100px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .card-grid {
            gap: 0.8rem;
            grid-template-columns: repeat(2, 1fr);
          }
          .enhanced-avatar { width: 48px; height: 48px; }
          .card.enhanced-card { max-width: 220px; padding: 0.8rem 0.5rem 0.7rem 0.5rem; }
        }
        @media (max-width: 600px) {
          .lead-title { font-size: 1.3rem; }
          .year-label { font-size: 1rem; }
          .card.enhanced-card { padding: 0.7rem 0.3rem; }
          .enhanced-avatar { width: 36px; height: 36px; }
          .name { font-size: 0.95rem; }
          .serial { font-size: 1em; }
          .badge { font-size: 0.7rem; }
          .social-link { font-size: 0.95rem; width: 1.5em; height: 1.5em; }
          .card-grid { grid-template-columns:2, 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Website;
