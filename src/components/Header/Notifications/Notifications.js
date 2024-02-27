import React, { useState, useEffect } from 'react';
import { getNotifications } from './NotificationsData'; // Adjust the import path
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications using the provided function
    setNotifications(getNotifications());
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
