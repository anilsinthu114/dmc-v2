import React, { useState } from "react";
import teamData from "./AdminpanelData";
import "./Adminpanel.css"; // External CSS file (provided below)

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

const Adminpanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filtered = teamData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.year.includes(searchTerm)
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const indexOfFirst = (currentPage - 1) * itemsPerPage;
  const indexOfLast = indexOfFirst + itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-wrapper">
      <h2 className="admin-title">Admin Panel Team</h2>

      <div className="search-row">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, roll number, or year..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <span className="results-info">
          {filtered.length > 0
            ? `Showing ${indexOfFirst + 1}-${Math.min(indexOfLast, filtered.length)} of ${filtered.length}`
            : "No results"}
        </span>
      </div>

      <div className="card-grid">
        {currentItems.length > 0 ? (
          currentItems.map((member) => (
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
                  <span className="branch">{member.year}</span>
                </div>
                <div className="role">
                  <span className="badge">Admin Team</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            No results found for "{searchTerm}". Please try a different search term.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
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
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Adminpanel;
