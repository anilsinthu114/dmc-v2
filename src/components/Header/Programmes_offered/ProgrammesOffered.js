// ProgrammesOffered.js

import React from 'react';
import './ProgrammesOffered.css';
import programmesOfferedData from './ProgrammesOfferedData';

const ProgrammesOffered = () => {
  return (
    <div>
      <h2 className='programmestable2'>Programmes Offered</h2>
      <table className="programmestable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Programme Name</th>
            <th>Programme Code</th>
            <th>Course Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {programmesOfferedData.map((programme) => (
            <tr key={programme.SNo}> {/* Here, use 'SNo' instead of 'sno' */}
              <td>{programme.SNo}</td> {/* Here, use 'SNo' instead of 'sno' */}
              <td>{programme.ProgrammeName}</td> {/* Here, use 'ProgrammeName' instead of 'programmeName' */}
              <td>{programme.ProgrammeCode}</td> {/* Here, use 'ProgrammeCode' instead of 'programmeCode' */}
              <td>{programme.Course}</td> {/* Here, use 'Course' instead of 'courseType' */}
              <td>{programme.Duration}</td> {/* Here, use 'Duration' instead of 'duration' */}
            </tr>
          ))}
        </tbody>
      </table><br/>
    </div>
  );
};

export default ProgrammesOffered;
