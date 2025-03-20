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

        // Filter for specific update types and scrolling enabled
        const filteredNotifications = data.filter(
          (notification) =>
            ["dmc", "tender", "events"].includes(notification.update_type)
        );

        if (filteredNotifications.length > 0) {
          setNotifications(filteredNotifications);
        } else {
          setNotifications([{ title: '🚫 No Notifications Available' }]);
        }
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
        setNotifications([{ title: '🚫 Failed to load notifications' }]);
      }
    };

    fetchData();

    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate for smooth scrolling effect
  const duplicatedNotifications = [...notifications, ...notifications];

  return (
    <div className="notifications-box">
      <div className="notifications-container">
        <div className="notification-scroll">
          {duplicatedNotifications.map((notification, index) => (
            <div className="notification" key={index}>
              {notification.file_link ? (
                <a href={notification.external_link || notification.file_link} target="_blank" rel="noopener noreferrer">
                  {notification.title}
                </a>
              ) : (
                notification.title
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsScrolling;
