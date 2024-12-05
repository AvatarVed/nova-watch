import React from "react";
import { useNavigate } from "react-router-dom";

function NotificationButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/notifications")}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#ff4c60",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Notifications
    </button>
  );
}

export default NotificationButton;
