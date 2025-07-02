import React, { useEffect, useRef, useState } from "react";

const NotificationsScrolling = () => {
  const [notifications, setNotifications] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filter for specific update types
        const filteredNotifications = data.filter(
          (notification) =>
            ["dmc", "tender", "events"].includes(notification.update_type)
        );

        if (isMounted) {
          if (filteredNotifications.length > 0) {
            setNotifications(filteredNotifications);
          } else {
            setNotifications([{ title: '🚫 No Notifications Available' }]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
        if (isMounted) {
          setNotifications([{ title: '🚫 Failed to load notifications' }]);
        }
      }
    };

    fetchData();

    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Duplicate notifications for seamless infinite scroll
  const duplicatedNotifications = [...notifications, ...notifications];

  // Animation pause on hover/focus for accessibility
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsHovered(true);
  const handleBlur = () => setIsHovered(false);

  // Responsive styles
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const notificationScrollStyle = {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "18px" : "32px",
    animation: isHovered
      ? undefined
      : `scroll-up ${isMobile ? "10s" : "18s"} linear infinite`,
    paddingRight: "6px",
  };

  const notificationStyle = {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordBreak: "break-word",
    padding: isMobile ? "7px 12px" : "10px 20px",
    color: "#0d47a1",
    fontSize: isMobile ? "14px" : "17px",
    cursor: "pointer",
    transition: "background 0.3s, box-shadow 0.3s",
    borderRadius: isMobile ? "6px" : "8px",
    margin: isMobile ? "0 2px" : undefined,
  };

  const notificationLinkStyle = {
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s",
    color: "#1976d2",
  };

  // Inject keyframes for scroll-up animation
  useEffect(() => {
    const styleId = "notification-scroll-keyframes-inline";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-55%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-label="Latest notifications"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={notificationScrollStyle}
      >
        {duplicatedNotifications.map((notification, index) => (
          <div
            style={notificationStyle}
            key={index}
            onMouseOver={e => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #d0e7ff 60%, #eaf3ff 100%)";
              e.currentTarget.style.boxShadow =
                "0 2px 12px rgba(25, 118, 210, 0.13)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {notification.file_link || notification.external_link ? (
              <a
                href={notification.file_link || notification.external_link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                aria-label={notification.title}
                style={notificationLinkStyle}
              >
                {notification.title}
              </a>
            ) : (
              notification.title
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScrolling;
