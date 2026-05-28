// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// Import routes
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json({ limit: "10mb" })); // Parse JSON requests

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/biometricDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
