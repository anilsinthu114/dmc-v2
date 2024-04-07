import React from 'react';
import './Adminpanel.css';

// Import data directly
import teamData from './AdminpanelData'; // Adjust the path based on your project structure

const Adminpanel = () => {
  const renderTableRows = () => {
    return teamData.map((member, index) => (
      <tr key={index}>
        <td>{index + 1}</td> {/* S.No */}
        <td>{member.name}</td> {/* Name */}
        <td>{member.rollNumber}</td> {/* Roll Number */}
        <td>{member.year}</td> {/* Year */}
      </tr>
    ));
  };

  return (
    <div>
      <h3 className='SP'>Admin Panel Team</h3>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table><br/><br />
    </div>
  );
};

export default Adminpanel;
