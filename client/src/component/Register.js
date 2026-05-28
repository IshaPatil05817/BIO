import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [biometricData, setBiometricData] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        employeeId,
        biometricData,
      });
      alert("Employee registered successfully!");
      setName("");
      setEmployeeId("");
      setBiometricData("");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Register Employee</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="EMPLOYEE ID" value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)} required />
        <textarea placeholder="Biometric Data" value={biometricData}
          onChange={(e) => setBiometricData(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
