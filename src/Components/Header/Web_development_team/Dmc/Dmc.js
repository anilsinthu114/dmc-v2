import React from 'react';
import './Dmc.css';

// Import data directly
import teamData from './DmcData'; // Adjust the path based on your project structure

const DigitalMonitoringCell = () => {
  const uniqueYears = [...new Set(teamData.map(member => member.year))].sort((a, b) => new Date(b) - new Date(a));
  const renderTableRows = (year) => {
    return teamData.filter(member => member.year === year).map((member, index) => (
      <tr key={index}>
        <td>{index + 1}</td> {/* S.No */}
        <td>{member.name}</td> {/* Name */}
        <td>{member.rollNumber}</td> {/* Roll Number */}
        {/* <td>{member.year}</td> */}
      </tr>
    ));
  };

  return (
    <div>
      <h3 className='SP'>Dmc Cell Team</h3>
      {uniqueYears.map((year) => (
        <div key={year}>
          <h4 style={{textAlign: 'center'}}>Year: {year}</h4>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll Number</th>
                {/* <th>Year</th> */}
              </tr>
            </thead>
            <tbody>{renderTableRows(year)}</tbody>
          </table><br /><br />
        </div>
      ))}
    </div>
  );
};

export default DigitalMonitoringCell;
