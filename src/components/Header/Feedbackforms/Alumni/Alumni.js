import React, { useState } from 'react';
import './Alumni.css';

const Alumni = () => {
  const [alumniDetails, setAlumniDetails] = useState({
    facultyName: '',
    department: '',
    contactNo: '',
    emailId: '',
    degree: '',
    specialization: '',
    academicYear: '',
    subjectsTaught: '',
    willingnessToSupport: '',
    syllabusSatisfaction: '',
    deleted: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your save logic here
    console.log('Saved:', alumniDetails);

    // Reload the page
    window.location.reload();
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancelled');
  };

  return (
    <form className='AFF'>
      <h2 className='AFF2'>ALUMNI FEEDBACK FORM</h2>

      <label className="form-label">
        1. Name : &nbsp;
        <div className='inp1'>
        <input type="text" name="facultyName" value={alumniDetails.facultyName} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        2. Address : &nbsp;
        <div className='inp1'>
        <input type="text" name="department" value={alumniDetails.department} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        3. Contact Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="contactNo" value={alumniDetails.contactNo} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        4. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="emailId" value={alumniDetails.emailId} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        5. Year of passing : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={alumniDetails.degree} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        6. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={alumniDetails.specialization} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        7. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="academicYear" value={alumniDetails.academicYear} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        8. Present status : &nbsp;
        <div className='inp1'>
        <input type="text" name="subjectsTaught" value={alumniDetails.subjectsTaught} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        9. Suitable date to Visit this University : &nbsp;
        <div className='inp1'>
        <input type="text" name="suitableDate" value={alumniDetails.suitableDate} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        10. Willingness to Support University Students :
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>
            <input
              type="radio"
              name="willingnessToSupport"
              value="yes"
              onChange={handleChange}
              checked={alumniDetails.willingnessToSupport === 'yes'}
            />
            Yes
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="willingnessToSupport"
              value="no"
              onChange={handleChange}
              checked={alumniDetails.willingnessToSupport === 'no'}
            />
            No
          </label>
        </div>
      </label>

      <label>
        11. Any Suggestions related to syllabus :
      </label>

      <label className="form-label">
        A. Is syllabus up to the mark? :
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>
            <input
              type="radio"
              name="syllabusSatisfaction"
              value="Yes"
              onChange={handleChange}
              checked={alumniDetails.syllabusSatisfaction === 'Yes'}
            />
            Yes
          </label>
          <label className="form-label" style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="syllabusSatisfaction"
              value="No"
              onChange={handleChange}
              checked={alumniDetails.syllabusSatisfaction === 'No'}
            />
            No
          </label>
        </div>
      </label>

      <label className="form-label">
        B. Recommends modifications to be embedded in the syllabus. : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="deleted"
          value={alumniDetails.deleted}
          onChange={handleChange}
        /></div>
      </label>

      <label className="form-label">
        12. Other suggestions : &nbsp;
        <div className='inp1'>
        <input type="text" name="otherSuggestions" value={alumniDetails.otherSuggestions} onChange={handleChange} />
      </div>
      </label>
      <br /> <br />

      <div className="button-container">
        <button type="button" onClick={handleSave}>
          Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Alumni;
