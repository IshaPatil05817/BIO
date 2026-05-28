import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Register student with fingerprint template
router.post("/register", async (req, res) => {
  try {
    const { name, rollNo, fingerprintTemplate } = req.body;

    const newStudent = new Student({ name, rollNo, fingerprintTemplate });
    await newStudent.save();

    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

export default router;
