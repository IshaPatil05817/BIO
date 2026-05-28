import React, { useState } from "react";
import axios from "axios";

const Attendance = () => {
  const [biometricInput, setBiometricInput] = useState("");

  const handleAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/attendance", {
        biometricInput,
      });
      alert(res.data.message);
      setBiometricInput("");
    } catch (err) {
      alert("Error marking attendance");
    }
  };

  return (
    <div className="form-container">
      <h2>Mark Attendance</h2>
      <form onSubmit={handleAttendance}>
        <textarea placeholder="Enter Biometric Data" value={biometricInput}
          onChange={(e) => setBiometricInput(e.target.value)} required />
        <button type="submit">Mark Attendance</button>
      </form>
    </div>
  );
};

export default Attendance;
