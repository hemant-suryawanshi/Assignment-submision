const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batch_name: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Batch = mongoose.model("Batch", batchSchema); 

module.exports = Batch