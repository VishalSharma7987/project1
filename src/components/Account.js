import React from "react";
import { FaCamera } from "react-icons/fa";

export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ height: "100vh" }}>
      <h5 className="mb-3">Account Settings</h5>

      {/* Profile wrapper */}
      <div className="d-flex align-items-center mb-2">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="rounded-circle"
            width="80"
            height="80"
          />
          {/* Camera icon */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "#fff",
              borderRadius: "50%",
              padding: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              cursor: "pointer",
            }}
          >
            <FaCamera size={16} color="#555" />
          </div>
        </div>

        <div className="ms-3">
          <h6 className="mb-0">{user?.name || "User"}</h6>
          <small className="text-muted">{user?.email}</small>
        </div>
      </div>

      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </p>
    </div>
  );
}
