import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  date: { type: Date, default: Date.now },
  status: { type: String, default: "Present" },
});

export default mongoose.model("Attendance", attendanceSchema);
