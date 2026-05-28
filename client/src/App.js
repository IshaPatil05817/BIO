import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleRegister = async () => {
    if (!studentId || !studentName) {
      alert("Please enter Student ID and Name");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/attandance/students", {
        studentId,
        name: studentName,
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  const handleAttendance = async () => {
    if (!studentId) {
      alert("Please enter Student ID");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/attendance/students", {
        studentId,
        timestamp: new Date(),
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Attendance marking failed");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Student Biometric Attendance</h1>
      <input
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button style={styles.button} onClick={handleRegister}>
        Register Student
      </button>
      <button style={styles.button} onClick={handleAttendance}>
        Mark Attendance
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #d42727ff",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#1a9e1fff",
    color: "#204472ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};





