const express = require("express");

const Submision = require("../models/submision.models");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const submisions = await Submision.find()
      .populate({
        path: "studentId",
        select: ["roll_no"],
        populate: { path: "userId", select: ["firstName"] },
      })
      .lean()
      .exec();

    return res.status(200).send(submisions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const submisions = await Submision.create(req.body);
    return res.status(201).send(submisions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).lean().exec();

    return res.status(201).send(comment);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
