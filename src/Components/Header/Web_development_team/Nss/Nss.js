import React from 'react';
import teamData from './NssData';

const getInitials = (name) => {
  const names = name.split(' ');
  if (names.length === 1) return names[0][0];
  return names[0][0] + names[names.length - 1][0];
};

const socialIcons = {
  linkedin: (
    <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
  ),
  github: (
    <i className="fab fa-github" aria-label="GitHub"></i>
  ),
  instagram: (
    <i className="fab fa-instagram" aria-label="Instagram"></i>
  ),
  website: (
    <i className="fas fa-globe" aria-label="Website"></i>
  ),
  email: (
    <i className="fas fa-envelope" aria-label="Email"></i>
  ),
};

const Nss = () => {
  return (
    <div className="nss-team-container">
      <h3 className="nss-title">National Service Scheme Cell Team</h3>
      <div className="nss-cards">
        {teamData.map((member, idx) => (
          <div className="nss-card" key={idx}>
            <div className="nss-avatar">
              <span className="nss-initials">{getInitials(member.name)}</span>
            </div>
            <div className="nss-info">
              <div className="nss-name">{member.name}</div>
              <div className="nss-roll">{member.rollNumber}</div>
              <div className="nss-year">{member.year}</div>
              <div className="nss-socials">
                {Object.entries(member.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    className={`nss-social-link ${key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                  >
                    {socialIcons[key]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .nss-team-container {
          padding: 1.5rem 1rem;
          background: #f8fafc;
          border-radius: 16px;
          box-shadow: 0 2px 16px #4d96ff11;
          max-width: 900px;
          margin: 0 auto;
        }
        .nss-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #4D96FF;
          margin-bottom: 2rem;
          letter-spacing: 0.5px;
        }
        .nss-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .nss-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px #4d96ff18;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 220px;
          max-width: 260px;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .nss-card:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 6px 24px #4d96ff33;
        }
        .nss-avatar {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #4D96FF 60%, #1eae98 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 2px 8px #4d96ff22;
        }
        .nss-initials {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .nss-info {
          text-align: center;
        }
        .nss-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: #22223b;
          margin-bottom: 0.2rem;
        }
        .nss-roll {
          font-size: 0.98rem;
          color: #4d96ff;
          margin-bottom: 0.1rem;
        }
        .nss-year {
          font-size: 0.95rem;
          color: #1eae98;
          margin-bottom: 0.7rem;
        }
        .nss-socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 0.2rem;
        }
        .nss-social-link {
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
        .nss-social-link.linkedin { color: #0a66c2; }
        .nss-social-link.github { color: #181717; }
        .nss-social-link.instagram { color: #e1306c; }
        .nss-social-link.website { color: #1eae98; }
        .nss-social-link.email { color: #f9a826; }
        .nss-social-link:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 16px #4D96FF33;
        }
        @media (max-width: 768px) {
          .nss-title {
            font-size: 1.5rem;
          }
          .nss-cards {
            gap: 1.2rem;
          }
          .nss-card {
            min-width: 170px;
            max-width: 98vw;
            padding: 1.1rem 0.7rem 1rem 0.7rem;
          }
          .nss-avatar {
            width: 56px;
            height: 56px;
          }
          .nss-initials {
            font-size: 1.2rem;
          }
          .nss-name {
            font-size: 1rem;
          }
        }
      `}</style>
      {/* FontAwesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
    </div>
  );
};

export default Nss;
