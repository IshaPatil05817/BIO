import express from "express";
import Student from "../models/Student.js";
import Attendance from "../models/Attendance.js";

const router = express.Router();

// GET all attendances
router.get("/", async (req, res) => {
  try {
    const attendances = await Attendance.find().populate("student", "name"); // populate student name
    res.json(attendances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mark attendance using student ID
router.post("/mark", async (req, res) => {
  try {
    const { studentId } = req.body;

    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const attendance = new Attendance({ student: student._id });
    await attendance.save();

    res.json({ message: `Attendance marked for ${student.name}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
