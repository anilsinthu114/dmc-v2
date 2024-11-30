import React, { useState, useEffect } from 'react';
import './Notifications.css';
import axios from 'axios'; // Import axios for API calls

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from API
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('https://api.jntugv.edu.in/api/allnotifications'); // Adjust the API endpoint
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleNotificationClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
    // Handle non-link notifications as needed
  };

  return (
    <div className="notificationsComponent">
      <div className="notificationsContainer">
        {notifications.map((notification) => (
          <div
            key={notification.date + notification.month + notification.year}
            className="notificationItem"
          >
            <div className="notificationBox" onClick={() => handleNotificationClick(notification.link)}>
              {/* Date wrapper with border */}
              <div className="dateWrapper">
                <div className="dateTimeContainer">
                  <div className="dateDiv">{notification.date}</div>
                  <div className="monYear">
                    <div className="monthDiv">{notification.month}</div>
                    <div className="yearDiv">{notification.year}</div>
                  </div>
                </div>
              </div>
              <div className="updateDescription">
                {notification.description}
                {notification.isLink && (
                  <span className="notificationLink"></span>
                )}
              </div>
              {notification.isNew && (
                <img
                  src="images/new.gif"
                  alt="newimg"
                  className="newIndicator"
                />
              )}
            </div>
            <div className="updateDivSeparator"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
