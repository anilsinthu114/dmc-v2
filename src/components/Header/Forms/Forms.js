// Forms.js

import React, { useState } from 'react';
import './Forms.css'; // Importing CSS file

function Forms() {
  const [feedbackDetails, setFeedbackDetails] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    feedbackType: '',
    feedbackDetails: '',
    satisfactionRating: '',
    recommendation: '', // Initialize to empty string
    improvementSuggestions: '',
    additionalComments: '',
    contactForDiscussion: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFeedbackDetails(prevDetails => ({
        ...prevDetails,
        [name]: checked,
      }));
    } else if (type === 'radio') {
      setFeedbackDetails(prevDetails => ({
        ...prevDetails,
        [name]: value,
      }));
    } else {
      setFeedbackDetails(prevDetails => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Form submitted:', feedbackDetails);
    // Add logic to handle form submission
  };

  return (
    <div className="feedback-form-container">
      <h2 className='form'> Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="personal-info">
          <h3>Personal Information:</h3>
          <div className="form-label">
            <label>
              Name :
            </label>
            <input type="text" name="name" value={feedbackDetails.name} onChange={handleChange} required />
          </div>
          
          <div className="form-label">
  <label>
    Role/Relationship with the College :
  </label>
  <select name="role" value={feedbackDetails.role} onChange={handleChange} required>
    <option value="">Select Role/Relationship</option>
    <option value="Faculty">Faculty</option>
    <option value="Student">Student</option>
    <option value="Alumni">Alumni</option>
    <option value="Other">Other</option>
  </select>
</div>
</div>

        <div className="contact-info">
          <h3>Contact Information :</h3>
          <div className="form-label">
            <label>
              Email :
            </label>
            <input type="email" name="email" value={feedbackDetails.email} onChange={handleChange} required />
          </div>
          <div className="form-label">
            <label>
              Phone Number :
            </label>
            <input type="tel" name="phone" value={feedbackDetails.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="feedback-type">
          <h3>Feedback Type :</h3>
          <div className="form-label">
            <label>
              Please select the type of feedback you are <br></br>providing :
            </label>
            <select name="feedbackType" value={feedbackDetails.feedbackType} onChange={handleChange} required>
              <option value="">Select Feedback Type</option>
              <option value="Curriculum and Courses">Curriculum and Courses</option>
              <option value="Teaching Quality">Teaching Quality</option>
              <option value="Facilities and Infrastructure">Facilities and Infrastructure</option>
              <option value="Extra-curricular Activities">Extra-curricular Activities</option>
              <option value="Administration and Support Services">Administration and Support Services</option>
              <option value="Suggestions and General Feedback">Suggestions and General Feedback</option>
            </select>
          </div>
        </div>

        <div className="feedback-details">
          <h3>Feedback Details :</h3>
          <div className="form-label">
            <label>
              Please provide detailed feedback based on <br></br> the selected type :
            </label>
            <textarea name="feedbackDetails" value={feedbackDetails.feedbackDetails} onChange={handleChange} required />
          </div>
        </div>

        <div className="satisfaction-rating">
          <h3>Rate your overall satisfaction with the college :</h3>
          <div className="form-label">
            {[1, 2, 3, 4, 5].map(rating => (
              <label key={rating}>
                <input 
                  type="radio" 
                  name="satisfactionRating" 
                  value={rating} 
                  onChange={handleChange} 
                  checked={parseInt(feedbackDetails.satisfactionRating) === rating} // Convert to integer for comparison
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        <div className="recommendation">
          <h3>Would you recommend this college to others?</h3>
          <div className="form-label">
            <label>
              <input 
                type="radio" 
                name="recommendation" 
                value="Yes" 
                checked={feedbackDetails.recommendation === "Yes"} 
                onChange={handleChange} 
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="recommendation" 
                value="No" 
                checked={feedbackDetails.recommendation === "No"} 
                onChange={handleChange} 
              />
              No
            </label>
            <label>
              <input 
                type="radio" 
                name="recommendation" 
                value="Maybe" 
                checked={feedbackDetails.recommendation === "Maybe"} 
                onChange={handleChange} 
              />
              Maybe
            </label>
          </div>
        </div>

        <div className="improvement-suggestions">
          <h3>Suggestions for Improvement :</h3>
          <div className="form-label">
            <label>
              What improvements would you suggest to <br></br>
              enhance the overall experience at the college?
            </label>
            <textarea name="improvementSuggestions" value={feedbackDetails.improvementSuggestions} onChange={handleChange} />
          </div>
        </div>

        <div className="additional-comments">
          <h3>Additional Comments or Feedback :</h3>
          <div className="form-label">
            <label>
              Any additional comments or feedback?
            </label>
            <textarea name="additionalComments" value={feedbackDetails.additionalComments} onChange={handleChange} />
          </div>
        </div>

        <div className="contact-discussion">
          <h3>Would you like to be contacted for further discussion regarding your feedback?</h3>
          <div className="form-label">
            <label>
              <input 
                type="radio" 
                name="contactForDiscussion" 
                value="Yes" 
                checked={feedbackDetails.contactForDiscussion === "Yes"} 
                onChange={handleChange} 
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="contactForDiscussion" 
                value="No" 
                checked={feedbackDetails.contactForDiscussion === "No"} 
                onChange={handleChange} 
              />
              No
            </label>
          </div>
        </div>

        <div className="button-container">
  <button type="submit">Submit Feedback</button>
</div>

      </form>
    </div>
  );
}

export default Forms;
