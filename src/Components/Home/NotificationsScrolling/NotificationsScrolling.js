// NotificationsScrolling.js
import React from "react";
import "./NotificationsScrolling.css";
import { getNotifications } from "./NotificationsData"; // Assuming getNotifications is exported from NotificationsData.js

const NotificationsScrolling = () => {
  const notifications = getNotifications();
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
