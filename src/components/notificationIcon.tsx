import React from "react";
import "../App.css";
import { IoNotificationsOutline } from "react-icons/io5";

const NotificationIcon = ({ badgeCount }: { badgeCount: number }) => {
  return (
    <div className="notification-icon">
      <div className="icon">
        <IoNotificationsOutline size={25} />
      </div>
      {badgeCount > 0 && (
        <div className="badge">{badgeCount > 99 ? "99+" : badgeCount}</div>
      )}
    </div>
  );
};

export default NotificationIcon;
