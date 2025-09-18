import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center vh-100"
      style={{ backgroundColor: "#f9f9fb" }}
    >
      {/* Empty space (top area) */}
      <div></div>

      {/* Bottom content */}
      <div className="w-100 px-3 pb-4 ">
        <h4 className="mb-2">Welcome to PopX</h4>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Button
          className="w-100 mb-2"
          style={{ backgroundColor: "#6c2cf6", border: "none" }}
          onClick={() => navigate("/signup")}
        >
          Create Account
        </Button>

        <Button
          className="w-100"
          style={{
            backgroundColor: "#d4b5fc",
            border: "none",
            color: "#6c2cf6",
            fontWeight: "500",
          }}
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
