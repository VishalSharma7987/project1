import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <Router>
    
        <div className="card shadow p-4 h-100vh" style={{ width: "400px", margin:'0 auto' }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;
