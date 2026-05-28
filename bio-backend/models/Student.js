import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  fingerprintTemplate: { type: String, required: true }, // base64 or hex
});

export default mongoose.model("Student", studentSchema);
