import React from 'react';
import './Leadcontributors.css';

// Import data directly
import teamData from './LeadcontributorsData'; // Adjust the path based on your project structure

const Leadcontributors = () => {
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

  const renderTableRows = (members) => {
    return members.map((member, index) => (
      <tr key={index}>
        <td>{index + 1}</td> {/* S.No */}
        <td>{member.name}</td> {/* Name */}
        <td>{member.rollNumber}</td> {/* Roll Number */}
        <td>{member.role || 'Contributor'}</td> {/* Role */}
      </tr>
    ));
  };

  const renderTables = () => {
    // Sort years in descending order
    const sortedYears = Object.keys(groupedData).sort((a, b) => b.localeCompare(a));

    return sortedYears.map((year) => (
      <div key={year} className="year-section">
        <h4 className="year-title">Year: {year}</h4>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>{renderTableRows(groupedData[year])}</tbody>
        </table>
        <br />
      </div>
    ));
  };

  return (
    <div className='wdtRight'>
      <h3 className="SP">Lead Contributors</h3>
      {renderTables()}
    </div>
  );
};

export default Leadcontributors;
