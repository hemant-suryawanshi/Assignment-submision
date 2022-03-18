const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_no: { type: Number, required: true },
    current_batch: { type: String, required: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Student = mongoose.model("Student", studentSchema); 

module.exports = Student