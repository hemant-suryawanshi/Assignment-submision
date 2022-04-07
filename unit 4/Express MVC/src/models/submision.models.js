const mongoose = require("mongoose");


const submisionSchema = new mongoose.Schema(
  {
    evaluationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evaluation",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      
    },
    marks:{ type: Number, required: true,}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Submision= mongoose.model("comment", submisionSchema);
module.exports = Submision 
