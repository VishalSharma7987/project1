import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === form.email && user.password === form.password) {
      navigate("/account");
    } else {
      setError("Invalid credentials");
    }
  };

  const labelStyle = {
    position: "absolute",
    top: "-8px",
    left: "12px",
    background: "white",
    padding: "0 6px",
    fontSize: "13px",
    color: "#555",
    fontWeight: 500,
  };

  const groupStyle = {
    position: "relative",
    marginBottom: "18px",
  };

  return (
    <div style={{ height: "100vh" }}>
      <h5 className="mb-3">
        Signin to your <br /> PopX account
      </h5>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={groupStyle}>
          <Form.Label style={labelStyle}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group style={groupStyle}>
          <Form.Label style={labelStyle}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}
        <Button type="submit" className="w-100" variant="secondary">
          Login
        </Button>
      </Form>
    </div>
  );
}
