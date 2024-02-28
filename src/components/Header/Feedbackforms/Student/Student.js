import React, { useState } from 'react';
import './Student.css';

const Student = () => {
  const [studentDetails, setStudentDetails] = useState({
    studentName: '',
    rollNumber: '',
    degree: '',
    specialization: '',
    academicYear: '',
    yearOfStudying: '',
    semester: {
      email: '',
      suggestions: '',
      feedback: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSemesterChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      semester: {
        ...prevDetails.semester,
        [name]: value,
      },
    }));
  };

  const handleSuggestionChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      semester: {
        ...prevDetails.semester,
        feedback: {
          ...prevDetails.semester.feedback,
          [name]: value,
        },
      },
    }));
  };

  const handleSave = () => {
    console.log('Saved:', studentDetails);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <form className='SFF'> 
        <h2 className='SFF2'>STUDENT FEEDBACK FORM</h2>
      <label className="form-label">
        1. Name : &nbsp;
        <div className='inp1'>
        <input type="text" name="studentName" value={studentDetails.studentName} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        2. Roll Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="rollNumber" value={studentDetails.rollNumber} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        3. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={studentDetails.degree} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        4. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={studentDetails.specialization} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        5. Year of studying : &nbsp;
        <div className='inp1'>
        <input type="text" name="yearOfStudying" value={studentDetails.yearOfStudying} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        6. Semester : &nbsp;
        <div className='inp1'>
        <input type="text" name="academicYear" value={studentDetails.academicYear} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        7. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="email" value={studentDetails.semester.email} onChange={handleSemesterChange} />
      </div>
      </label>

      <label className="form-label">
        8. Any other suggestions : &nbsp;
        <div className='inp1'>
        <input type="text" name="suggestions" value={studentDetails.semester.suggestions} onChange={handleSemesterChange} />
      </div>
      </label>

      <h3>Feedback Questionnaire</h3>
      <table style={{ width: '80%' }} class='table'>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {[
            { question: 'Rate the syllabus of the courses in relation to the competencies expected from the course' },
            { question: 'Rate the relevance of the units in Syllabus relevant to the course' },
            { question: 'Rate the content of course and relevance of the Units' },
            { question: 'Rate the offering of the electives in terms of their relevance to the specialization streams' },
            { question: 'Rate the electives offered in relation to the Technological advancements' },
            { question: 'Rate the applicability/relevance of the curriculum with respect to current technological standards' },
            { question: 'Usefulness of the course in terms of knowledge, concepts, vocational skills, analytical abilities and broadening perspectives' },
            { question: 'Rate the percentage of courses having laboratory components' },
            { question: 'Rate the appropriateness of the sequence of courses provided in the curriculum' },
            { question: 'Rate the depth of syllabus of the course in relation to the competencies expected by the Industry' },
            { question: 'Rate the design of course with respect to self-learning' },
            { question: 'Rate the composition of the course in terms of Basic Science, Engineering Science, Humanities, Discipline Core, Discipline Elective, Open Elective, etc.' },
          ].map((item, index) => (
            <tr key={index}>
              <td>{item.question}</td>
              {[1, 2, 3, 4, 5].map((rating) => (
                <td key={rating}>
                  <label>
                    <input
                      type="radio"
                      name={`q${index + 1}`}
                      value={rating}
                      onChange={handleSuggestionChange}
                      checked={studentDetails.semester.feedback[`q${index + 1}`] === `${rating}`}
                    />
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table><br/>

      <div className="button-container">
        <button type="button1" onClick={handleSave}>
          Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button1" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  </form>
);
};

export default Student;
