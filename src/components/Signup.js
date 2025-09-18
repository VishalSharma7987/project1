import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "No",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Full Name is required";
    if (!form.phone) err.phone = "Phone is required";
    if (!form.email.includes("@")) err.email = "Valid Email required";
    if (form.password.length < 6) err.password = "Password must be 6+ chars";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = validate();
    if (Object.keys(err).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      navigate("/account");
    } else {
      setErrors(err);
    }
  };

 
  const inputWrapper = {
    position: "relative",
    marginBottom: "24px",
  };

  const labelStyle = {
    position:'absolute',
    top: "-10px",
    left: "14px",
    background: "white",
    padding: "0 6px",
    fontSize: "14px",
    color: "#555",
    fontWeight: 500,
  };

  return (
    <div
       className="d-flex justify-content-center align-items-center bg-light h-100vh"
      style={{ backgroundColor: "#f9f9fb" }}
    >
    
      <div
        className="bg-white w-100 shadow-sm "
        style={{
          maxWidth: "420px",
          padding: "25px",
          borderRadius: "6px",
        }}
      >
        <h5 className="mb-4 fw-bold">Create your <br/> PopX account</h5>
       
        <Form onSubmit={handleSubmit}>
         
          <div style={inputWrapper}>
            <Form.Label style={labelStyle}>Full Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </div>

       
          <div style={inputWrapper}>
            <Form.Label style={labelStyle}>Phone number *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </div>

        
          <div style={inputWrapper}>
            <Form.Label style={labelStyle}>Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </div>

         
          <div style={inputWrapper}>
            <Form.Label style={labelStyle}>Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </div>

         
          <div style={inputWrapper}>
            <Form.Label style={labelStyle}>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

        
          <div style={{ marginBottom: "24px" }}>
            <Form.Label >Are you an Agency?</Form.Label>
            <div style={{ paddingTop: "10px" }}>
              <Form.Check
                inline
                label="Yes"
                type="radio"
                checked={form.agency === "Yes"}
                onChange={() => setForm({ ...form, agency: "Yes" })}
              />
              <Form.Check
                inline
                label="No"
                type="radio"
                checked={form.agency === "No"}
                onChange={() => setForm({ ...form, agency: "No" })}
              />
            </div>
          </div>

          
          <Button
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "#6c2cf6",
              border: "none",
              padding: "12px",
              fontWeight: "600",
            }}
          >
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}
