import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2>Biometric Attendance</h2>
    <div>
      <Link to="/">Register</Link>
      <Link to="/attendance">Mark Attendance</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
