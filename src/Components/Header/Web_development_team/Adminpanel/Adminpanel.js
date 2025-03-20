import React from 'react';
import './Adminpanel.css';

// Import data directly
import teamData from './AdminpanelData'; // Adjust the path based on your project structure

const Adminpanel = () => {
  const renderTableRows = (year) => {
    const filteredTeamData = teamData.filter(member => member.year === year).sort((a, b) => new Date(b.year) - new Date(a.year));
    return filteredTeamData.map((member, index) => (
      <tr key={index}>
        <td>{index + 1}</td> {/* S.No */}
        <td>{member.name}</td> {/* Name */}
        <td>{member.rollNumber}</td> {/* Roll Number */}
        {/* <td>{member.year}</td> Year  */}
      </tr>
    ));
  };

  const uniqueYears = [...new Set(teamData.map(member => member.year))].sort((a, b) => new Date(b) - new Date(a)).reverse();

  return (
    <div className='wdtRight'>
      <h3 className='SP'>Admin Panel Team</h3>
      {uniqueYears.map((year) => (
        <div key={year}>
          <h4 align='center' color='blue'> <b>Year:</b>{year}</h4>
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
          </table><br/><br />
        </div>
      ))}
    </div>
  );
};

export default Adminpanel;
