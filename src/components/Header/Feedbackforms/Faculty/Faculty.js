import React, { useState } from 'react';
import './Faculty.css';

const Faculty = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    facultyName: '',
    department: '',
    contactNo: '',
    email: '',
    degree: '',
    specialization: '',
    academicYear: '',
    subjectsTaught: '',
    suggestions: {
      topicsToAdd: '',
      topicsToDelete: '',
      subjectsToAdd: '',
      subjectsToDelete: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your save logic here
    console.log('Saved:', facultyDetails);

    // Reload the page
    window.location.reload();
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancelled');
  };

  return (
    <form className='FFF' onSubmit={handleSave}>
  <h2 className='FFF2'>FACULTY FEEDBACK FORM</h2>
  <label className="form-label">
    1. Name : &nbsp;
    <div className='inp1'>
      <input type="text" name="facultyName" value={facultyDetails.facultyName} onChange={handleChange} />
    </div>
  </label>

      <label className="form-label">
        2. Department : &nbsp;
        <div className='inp1'>
        <input type="text" name="department" value={facultyDetails.department} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        3. Contact Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="contactNumber" value={facultyDetails.contactNumber} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        4. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="email" value={facultyDetails.email} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        5. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={facultyDetails.degree} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        6. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={facultyDetails.specialization} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        7. Academic Year : &nbsp;
        <div className='inp1'>
        <input type="text" name="academicYear" value={facultyDetails.academicYear} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        8. Subjects Taught : &nbsp;
        <div className='inp1'>
        <input type="text" name="subjectsTaught" value={facultyDetails.subjectsTaught} onChange={handleChange} />
      </div>
      </label>

      <label>
        9. Suggestions related to syllabus:
      </label>

      <label className="form-label">
        A. Topics in a subject suggested to be Added / Updated : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="suggestions.topicsToAdd"
          value={facultyDetails.suggestions.topicsToAdd}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        B. Topics in a subject suggested to be Deleted : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="suggestions.topicsToDelete"
          value={facultyDetails.suggestions.topicsToDelete}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        C. New Subject / Subjects proposed for Addition into the New syllabus : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="suggestions.subjectsToAdd"
          value={facultyDetails.suggestions.subjectsToAdd}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        D. Subject / Subjects proposed for Deletion from the current syllabus : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="suggestions.subjectsToDelete"
          value={facultyDetails.suggestions.subjectsToDelete}
          onChange={handleChange}
        />
        </div>
      </label>
      <br /> <br />

      <div className="button-container">
        <button type="submit">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Faculty;
