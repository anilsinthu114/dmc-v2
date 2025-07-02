import React, { useMemo, useState } from 'react';
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import teamData from './ExaminationData';

const AVATAR_COLORS = [
  "#4D96FF", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
];

const getAvatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name) => {
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

const getSocialLink = (type, member) => {
  switch (type) {
    case 'website':
      return member.website || '#';
    case 'linkedin':
      return member.linkedin || '#';
    case 'github':
      return member.github || '#';
    case 'instagram':
      return member.instagram || '#';
    case 'email':
      return member.email || '#';
    default:
      return '#';
  }
};

const socialTypes = [
  { type: 'website', icon: <FaGlobe />, className: 'globe' },
  { type: 'linkedin', icon: <FaLinkedin />, className: 'linkedin' },
  { type: 'github', icon: <FaGithub />, className: 'github' },
  { type: 'instagram', icon: <FaInstagram />, className: 'instagram' },
  { type: 'email', icon: <FaEnvelope />, className: 'email' },
];

// Helper: group by year
const groupByYear = (data) => {
  return data.reduce((groups, member) => {
    const year = member.year || 'Other';
    if (!groups[year]) groups[year] = [];
    groups[year].push(member);
    return groups;
  }, {});
};

const PAGE_SIZE = 1; // Show one year per page

const Examination = () => {
  // Group and sort years descending
  const { groupedData, sortedYears } = useMemo(() => {
    const grouped = groupByYear(teamData);
    const years = Object.keys(grouped)
      .sort((a, b) => {
        // Try to sort numerically if possible, else lexically
        if (!isNaN(Number(a)) && !isNaN(Number(b))) {
          return Number(b) - Number(a);
        }
        return b.localeCompare(a);
      });
    return { groupedData: grouped, sortedYears: years };
  }, []);

  // Pagination state
  const [page, setPage] = useState(0);

  // Get years for current page
  const pagedYears = sortedYears.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // Handlers
  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(sortedYears.length - 1, p + 1));

  return (
    <div className="lead-container">
      <h2 className="lead-title">
        <FaUserCircle style={{ marginRight: 10, fontSize: 32 }} />
        Examination Cell Team
      </h2>
      <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 24, gap: 16 }}>
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="pagination-btn"
          aria-label="Previous year"
        >
          &lt;
        </button>
        <span className="pagination-year" style={{ fontWeight: 700, fontSize: 18 }}>
          {pagedYears[0]}
        </span>
        <button
          onClick={handleNext}
          disabled={page >= sortedYears.length - 1}
          className="pagination-btn"
          aria-label="Next year"
        >
          &gt;
        </button>
      </div>
      <div className="lead-wrapper">
        {pagedYears.map((year) => (
          <div key={year}>
            <div className="card-grid">
              {groupedData[year].map((member) => (
                <div className="card enhanced-card" key={member.rollNumber || member.name} tabIndex={0}>
                  <div
                    className="avatar enhanced-avatar"
                    style={!member.image ? { background: getAvatarColor(member.name) } : {}}
                  >
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
                      {member.year && <span className="branch">{member.year}</span>}
                    </div>
                    <div className="role">
                      <span className="badge">{member.role || "Contributor"}</span>
                    </div>
                    <div className="socials">
                      {socialTypes.map(({ type, icon, className }) => (
                        <a
                          key={type}
                          href={getSocialLink(type, member)}
                          aria-label={getSocialLabel(type, member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`social-link ${className}`}
                          style={
                            !member[type] ? { opacity: 0.4, pointerEvents: 'none', cursor: 'default' } : {}
                          }
                          tabIndex={0}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .lead-container {
          padding: 2.5rem 1rem 2rem 1rem;
          background: linear-gradient(120deg, #f8fafc 60%, #e3f0ff 100%);
          min-height: 100vh;
        }
        .lead-title {
          display: flex;
          align-items: center;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 2.2rem;
          color: #035a5a;
        }
        .pagination-controls {
          margin-bottom: 1.5rem;
        }
        .pagination-btn {
          background: #eaf6f6;
          border: none;
          border-radius: 50%;
          width: 2.2em;
          height: 2.2em;
          font-size: 1.3em;
          color: #4D96FF;
          cursor: pointer;
          transition: background 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 8px #035a5a11;
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-btn:focus {
          outline: 2px solid #4D96FF;
        }
        .pagination-year {
          min-width: 60px;
          text-align: center;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
        }
        .card.enhanced-card {
          background: #fff;
          border-radius: 18px;
          padding: 1.5rem 1.2rem;
          box-shadow: 0 4px 18px 0 #035a5a18;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.18s, transform 0.18s;
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
        }
        .info {
          text-align: center;
          width: 100%;
        }
        .name-row {
          margin-bottom: 0.3em;
        }
        .name {
          font-size: 1.18em;
          font-weight: 600;
          color: #222;
        }
        .roll-branch-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7em;
          margin-bottom: 0.2em;
        }
        .roll {
          font-family: 'Roboto Mono', monospace;
          font-size: 1em;
          color: #035a5a;
          background: #eaf6f6;
          border-radius: 5px;
          padding: 2px 10px;
        }
        .branch {
          font-size: 0.98em;
          color: #888;
          background: #f3f7fa;
          border-radius: 5px;
          padding: 2px 10px;
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
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .social-link.linkedin { color: #0a66c2; }
        .social-link.github { color: #181717; }
        .social-link.instagram { color: #e1306c; }
        .social-link.globe { color: #1eae98; }
        .social-link.email { color: #f9a826; }
        .social-link:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 16px #4D96FF33;
        }

        @media (max-width: 768px) {
          .lead-title {
            font-size: 1.5rem;
          }
          .enhanced-avatar {
            width: 56px;
            height: 56px;
          }
          .initials {
            font-size: 1.2rem;
          }
          .name {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Examination;
