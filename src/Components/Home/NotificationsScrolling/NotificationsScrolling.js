import React, { useEffect, useState } from "react";

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
  // const duplicatedNotifications = [...notifications, ...notifications];

  // Internal CSS for enhanced UI, text wrap, and responsiveness
  const styles = `
    // .notifications-box {
    //   width: 100%;
    //   max-width: 900px;
    //   margin: 0 auto;
    //   background: #f5f8fd;
    //   border-radius: 10px;
    //   box-shadow: 0 2px 8px rgba(30,64,175,0.07);
    //   padding: 0;
    //   overflow: hidden;
    //   position: relative;
    // }
    // .notifications-container {
    //   width: 100%;
    //   overflow: hidden;
    //   position: relative;
    //   // background: transparent;
    //   padding: 0;
    // }
    .notification-scroll {
      display: flex;
      flex-direction: column;
      animation: scroll-vertical 18s linear infinite;
      gap: 0;
    }
    .notification {
      padding: 12px 18px;
      font-size: 1.04rem;
      color: black;
      background: #e3e8f0;
      border-bottom: 1px solid #e3e8f0;
      word-break: break-word;
      white-space: pre-line;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      min-height: 10px;
    }
    .notification:last-child {
      border-bottom: none;
    }
    .notification a {
      color: black;
      text-decoration: none;
      word-break: break-word;
      overflow-wrap: break-word;
      max-width: 100%;
      display: inline-block;
    }
    .notification a:hover, .notification a:focus {
      color: #3d67de;
      text-decoration: none;
      outline: none;
    }
    @keyframes scroll-vertical {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @media (max-width: 600px) {
      .notifications-box {
        max-width: 100%;
        border-radius: 0;
        box-shadow: none;
      }
      .notification {
        font-size: 0.97rem;
        padding: 10px 8px;
        min-height: 20px;
      }
    }
    @media (max-width: 400px) {
      .notification {
        font-size: 0.91rem;
        padding: 8px 4px;
      }
    }
  `;

  return (
    <div className="notifications-box">
      <style>{styles}</style>
      {/* <div className="notifications-container"> */}
        {/* <div className="notification-scroll"> */}
          {notifications.map((notification, index) => (
            <div className="notification" key={index}>
              {notification.file_link ? (
                <a
                  href={notification.file_link || notification.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  aria-label={notification.title}
                >
                  {notification.title}
                </a>
              ) : (
                notification.title
              )}
            </div>
          ))}
        </div>
  );
};

export default NotificationsScrolling;
