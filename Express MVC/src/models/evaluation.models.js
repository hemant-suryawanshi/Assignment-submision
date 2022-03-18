const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: Date, required: false },
    Instructure: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
        required: true,
      },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

module.exports = Evaluation;
