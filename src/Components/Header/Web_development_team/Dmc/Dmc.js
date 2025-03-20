import React from 'react';
import './Dmc.css';

// Import data directly
import teamData from './DmcData'; // Adjust the path based on your project structure

const DigitalMonitoringCell = () => {
  // Sort years in descending order by extracting the starting year
  const uniqueYears = [...new Set(teamData.map(member => member.year))]
    .sort((a, b) => {
      const startYearA = parseInt(a.split('-')[0]);
      const startYearB = parseInt(b.split('-')[0]);
      return startYearB - startYearA;
    });

  // Render table rows for each year
  const renderTableRows = (year) => {
    return teamData
      .filter(member => member.year === year)
      .map((member, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{member.name}</td>
          <td>{member.rollNumber}</td>
        </tr>
      ));
  };

  return (
    <div className='wdtRight'>
      <h3 className='SP'>DMC Cell Team</h3>
      {uniqueYears.map((year) => (
        <div key={year} className="year-section">
          <h4 style={{ textAlign: 'center' }}>Year: {year}</h4>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(year)}</tbody>
          </table>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DigitalMonitoringCell;
