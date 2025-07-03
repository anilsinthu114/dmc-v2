import React, { useState } from "react";
import "./Adminpanel.css";
import teamData from "./AdminpanelData";

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

// Helper to extract year for sorting (e.g., "2023-2024" -> 2023)
const extractYear = (yearStr) => {
  if (!yearStr) return 0;
  const match = yearStr.match(/^(\d{4})/);
  return match ? parseInt(match[1], 10) : 0;
};

const socialLinks = [
  { key: "website", label: "Website" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "github", label: "GitHub" },
  { key: "instagram", label: "Instagram" },
  { key: "email", label: "Email" },
];

const Adminpanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageByYear, setCurrentPageByYear] = useState({});
  const itemsPerPage = 12;

  // Internal CSS for social icons
  const socialIconStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#e3f2fd",
    margin: "0 4px",
    color: "#1976d2",
    border: "none",
    transition: "background 0.2s",
    textDecoration: "none",
    boxShadow: "0 1px 4px rgba(25, 118, 210, 0.07)",
    cursor: "pointer",
  };

  const socialIconHoverStyle = {
    background: "#1976d2",
    color: "#fff",
  };

  // Filter by search term
  const filtered = teamData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.year.includes(searchTerm)
  );

  // Group by year
  const yearMap = {};
  filtered.forEach((member) => {
    if (!yearMap[member.year]) yearMap[member.year] = [];
    yearMap[member.year].push(member);
  });

  // Get sorted years (descending, newest first)
  const sortedYears = Object.keys(yearMap)
    .sort((a, b) => extractYear(b) - extractYear(a));

  // Reset pagination when search changes
  React.useEffect(() => {
    setCurrentPageByYear({});
  }, [searchTerm]);

  // For hover effect on social icons
  const [hovered, setHovered] = useState({});

  return (
    <div className="admin-wrapper">
      <h2 className="admin-title">Admin Panel Team</h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <input
          className="search-input"
          type="text"
          placeholder="Search by name, roll number, or year..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            fontSize: "1rem",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1.5px solid #e0e7ef",
            boxShadow: "0 2px 8px rgba(11, 61, 145, 0.04)",
            width: 320,
            maxWidth: "100%",
            margin: "0 auto"
          }}
        />
      </div>
      <div className="lead-wrapper">
        {sortedYears.length === 0 ? (
          <div className="no-results">
            No results found for "{searchTerm}". Please try a different search term.
          </div>
        ) : (
          sortedYears.map((year, yIdx) => {
            const members = yearMap[year];
            const totalPages = Math.ceil(members.length / itemsPerPage);
            const currentPage = currentPageByYear[year] || 1;
            const indexOfFirst = (currentPage - 1) * itemsPerPage;
            const indexOfLast = indexOfFirst + itemsPerPage;
            const currentMembers = members.slice(indexOfFirst, indexOfLast);

            return (
              <div className="year-section" key={year}>
                <div className="year-header">
                  <div className="year-dot" />
                  <h4 className="year-label">{year}</h4>
                  <div className="year-line" />
                </div>
                <div className="card-grid">
                  {currentMembers.map((member) => (
                    <div key={member.rollNumber + member.year} className="card enhanced-card">
                      <div
                        className="enhanced-avatar"
                        style={!member.image ? { background: getAvatarColor(member.name) } : {}}
                      >
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            onError={(e) => (e.target.src = "/default-avatar.png")}
                          />
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
                          <br />
                          <span className="branch">{member.year}</span>
                        </div>
                        <div className="role">
                          <span className="badge">Admin Team</span>
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
                    </div>
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
                      onClick={() =>
                        setCurrentPageByYear((prev) => ({
                          ...prev,
                          [year]: Math.max(1, (prev[year] || 1) - 1)
                        }))
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        className={`page-btn ${currentPage === num ? "active" : ""}`}
                        onClick={() =>
                          setCurrentPageByYear((prev) => ({
                            ...prev,
                            [year]: num
                          }))
                        }
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
                      onClick={() =>
                        setCurrentPageByYear((prev) => ({
                          ...prev,
                          [year]: Math.min(totalPages, (prev[year] || 1) + 1)
                        }))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Adminpanel;
