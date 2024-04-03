import React from 'react';
import './Website.css';

// Import data directly
import teamData from './WebsiteData'; // Adjust the path based on your project structure

const Website = () => {
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
      <h3 className='SP'>Website Development Team</h3>
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

export default Website;
