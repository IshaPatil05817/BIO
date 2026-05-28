import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/attendance")
      .then((res) => setRecords(res.data))
      .catch(() => alert("Error fetching data"));
  }, []);

  return (
    <div className="dashboard">
      <h2>Attendance Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>ID</th><th>Date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r._id}>
              <td>{r.name}</td>
              <td>{r.studentId}</td>
              <td>{new Date(r.date).toLocaleString()}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
