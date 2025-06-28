import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('https://api.jntugv.edu.in/api/allnotifications', {
          params: {
            update_type: 'tender',
            update_status: 'update'
          }
        });
        // Transform the response data to ensure file_link is used for links
        const transformedData = response.data.map(notification => ({
          ...notification,
          link: notification.file_link // Map file_link to link property
        }));
        setNotifications(transformedData);
      } catch (error) {
        console.error('Error fetching tender notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notificationsComponent">
      <div className="notificationsContainer">
        {notifications.map((notification) => (
          <div
            key={notification.date + notification.month + notification.year}
            className="notificationItem"
          >
            <div 
              className="notificationBox" 
              style={{
                display: 'flex',
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
                gap: window.innerWidth <= 768 ? '0.75rem' : '1.25rem',
                padding: window.innerWidth <= 768 ? '1rem' : '1.25rem'
              }}
            >
              <div className="dateWrapper" style={{
                width: window.innerWidth <= 768 ? '100%' : 'auto',
                marginBottom: window.innerWidth <= 768 ? '0.5rem' : '0'
              }}>
                <div className="dateTimeContainer" style={{
                  flexDirection: window.innerWidth <= 768 ? 'row' : 'column',
                  justifyContent: window.innerWidth <= 768 ? 'space-between' : 'center',
                  width: window.innerWidth <= 768 ? '100%' : 'auto'
                }}>
                  <div className="dateDiv">{notification.date}</div>
                  <div className="monYear" style={{
                    display: 'flex',
                    flexDirection: window.innerWidth <= 768 ? 'row' : 'column',
                    gap: window.innerWidth <= 768 ? '0.5rem' : '0'
                  }}>
                    <div className="monthDiv">{notification.month}</div>
                    <div className="yearDiv">{notification.year}</div>
                  </div>
                </div>
              </div>
              <div className="updateDescription" style={{
                fontSize: window.innerWidth <= 768 ? '0.875rem' : '1rem',
                margin: window.innerWidth <= 768 ? '0' : '0 1rem',
                flex: 1
              }}>
                {notification.description}
                {notification.isLink && (
                  <a 
                    href={notification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="notificationLink"
                  >
                    View Details
                  </a>
                )}
              </div>
              {notification.isNew && (
                <img
                  src="images/new.gif"
                  alt="newimg"
                  className="newIndicator"
                  style={{
                    width: window.innerWidth <= 768 ? '1.5rem' : '2rem',
                    height: window.innerWidth <= 768 ? '1.5rem' : '2rem'
                  }}
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
