// NotificationsScrolling.js
import React, { useEffect, useState } from "react";
import "./NotificationsScrolling.css";

const NotificationsScrolling = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Filter notifications that contain category 'dmc'
        const filteredNotifications = data.filter(notification => notification.update_type.includes('dmc'));
        if (filteredNotifications.length > 0) {
          setNotifications(filteredNotifications);
        } else {
          setNotifications([{ description: 'NO Notifications' }]);
        }
        
      } catch (error) {
        console.error('No notifications are launched:', error);
        setNotifications([]);
      }
    };

    fetchData();
  }, []);

  const duplicatedNotifications = [...notifications, ...notifications];

  return (
    <div className="notifications-box"> {/* Add container for scrolling notifications */}
   
      <div className="notifications-container">
        <div className="notification-scroll">
          {duplicatedNotifications.map((notification, index) => (
            <div className="notification" key={index}>
              {notification.isLink ? (
                <a href={notification.link} target="_blank" rel="noopener noreferrer">
                  {notification.description}
                </a>
              ) : (
                notification.description
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NotificationsScrolling;
