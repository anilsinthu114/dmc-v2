import React, { useState } from 'react';
import teamData from './TeamData'; // Adjust path as needed

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const filteredData = teamData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.year.includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Team Members</h2>

      {/* Two-Column Layout */}
      <div style={styles.contentWrapper}>
        {/* Left: Vertical Pagination Buttons */}
        {totalPages > 1 && (
          <div style={styles.menuSidebar}>
            <div style={styles.menuLabel}>Pages</div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={page === currentPage ? styles.activePageBtn : styles.pageBtn}
              >
                Page {page}
              </button>
            ))}
          </div>
        )}

        {/* Right: Search + Table */}
        <div style={styles.mainContent}>
          {/* Search Section */}
          <div style={styles.searchContainer}>
            <div style={styles.inputGroup}>
              <label htmlFor="search" style={styles.label}>Search:</label>
              <input
                id="search"
                type="text"
                placeholder="Search by name, roll number, or year..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={styles.input}
              />
            </div>
            <div style={styles.resultInfo}>
              Showing {filteredData.length === 0 ? 0 : indexOfFirstItem + 1}–
              {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} results
            </div>
          </div>

          {/* Table */}
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>S.No</th>
                  <th style={styles.tableHeader}>Name</th>
                  <th style={styles.tableHeader}>Roll Number</th>
                  <th style={styles.tableHeader}>Year</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? currentItems.map((member, index) => (
                  <tr key={`${member.rollNumber}-${member.year}`} style={styles.tableRow}>
                    <td style={styles.tableCell}>{indexOfFirstItem + index + 1}</td>
                    <td style={styles.tableCell}>{member.name}</td>
                    <td style={styles.tableCell}>{member.rollNumber}</td>
                    <td style={styles.tableCell}>
                      <span style={styles.badge}>{member.year}</span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" style={styles.noResult}>No results found for "{searchTerm}".</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  contentWrapper: {
    display: 'flex',
    gap: '2rem',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  menuSidebar: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    gap: '10px',
  },
  menuLabel: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#34495e',
  },
  pageBtn: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3498db',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '500',
    textAlign: 'center',
  },
  activePageBtn: {
    backgroundColor: '#1c5980',
    border: '2px solid #145374',
    fontWeight: 'bold',
    color: 'white',
    padding: '10px 14px',
    borderRadius: '6px',
  },
  mainContent: {
    flex: 1,
  },
  searchContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '1.5rem',
    alignItems: 'center',
  },
  inputGroup: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#34495e',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
  },
  resultInfo: {
    fontSize: '0.95rem',
    color: '#7f8c8d',
    fontWeight: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    marginBottom: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    background: 'linear-gradient(90deg, #4b6cb7, #182848)',
    color: 'white',
    textAlign: 'left',
    padding: '14px 18px',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  tableRow: {
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.2s',
  },
  tableCell: {
    padding: '12px 18px',
    borderBottom: '1px solid #eee',
  },
  badge: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem',
  },
  noResult: {
    textAlign: 'center',
    padding: '30px',
    color: '#999',
    fontStyle: 'italic',
  },
};

export default Team;
