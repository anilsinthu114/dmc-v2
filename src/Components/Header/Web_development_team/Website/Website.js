import React from 'react';
import './Website.css';
import Table from 'react-bootstrap/Table';

// Import data directly
import teamData from './WebsiteData'; // Adjust the path based on your project structure

const Website = () => {
  const uniqueYears = [...new Set(teamData.map(member => member.year))].sort((a, b) => new Date(b) - new Date(a));
  const modifiedUniqueYears = uniqueYears.map(year => {
    const yearRange = year.split('-');
    const startYear = parseInt(yearRange[0], 10);
    const endYear = parseInt(yearRange[1], 10);
    if (startYear === 2024 && endYear === 2025) return '2023-2024';
    if (startYear === 2023 && endYear === 2024) return '2024-2025';
    return year;
  });
  const renderTableRows = (year) => {
    return teamData.filter(member => member.year === year).map((member, index) => (
      <tr key={index}>
        <td>{index + 1}</td> {/* S.No */}
        <td>{member.name}</td> {/* Name */}
        <td>{member.rollNumber}</td> {/* Roll Number */}
        {/* <td>{member.year}</td> Year  */}
      </tr>
    ));
  };

  return (
    <div className='website-container'>
      <h3 className='SP'>Website Development Team</h3>
      {modifiedUniqueYears.map((year) => (
        <div key={year} className='year-container'>
          <h4 style={{textAlign: 'center'}}>{year}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll Number</th>
                {/* <th>Year</th> */}
              </tr>
            </thead>
            <tbody>
              {renderTableRows(year)}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default Website;
