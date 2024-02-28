// FeedbackformsMain.js

import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const FeedbackformsMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
        <Link
          to="/feedbackforms/faculty-form"
          className={`menuButton ${
            location.pathname === '/feedbackforms/faculty-form' ? 'active' : ''
          }`}
        >
          FACULTY
        </Link>

        <Link
          to="/feedbackforms/student-form"
          className={`menuButton ${
            location.pathname === '/feedbackforms/student-form' ? 'active' : ''
          }`}
        >
          STUDENT
        </Link>

        <Link
          to="/feedbackforms/alumni-form"
          className={`menuButton ${
            location.pathname === '/feedbackforms/alumni-form' ? 'active' : ''
          }`}
        >
          ALUMNI
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FeedbackformsMain;
