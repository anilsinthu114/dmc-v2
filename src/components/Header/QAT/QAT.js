import React from 'react';
import './QAT.css';

// Import data directly
import iqacMembersData from './QATData'; // Adjust the path based on your project structure

const QAT = () => {
  // Use the imported data directly
  const iqacMembers = iqacMembersData;

  // Render table rows
  const renderTableRows = () => {
    return iqacMembers.map((member) => (
      <tr key={member.sno}>
        <td>{member.sno}</td>
        <td>{member.name}</td>
        <td>{member.designation}</td>
        <td>{member.role}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2 className='QAT2'>IQAC Members</h2>
      <table className='qat'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Member</th>
            <th>Designation</th>
            <th>Role in IQAC</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table><br></br><br></br>
    </div>
  );
};

export default QAT;
