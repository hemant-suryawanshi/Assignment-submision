const express = require("express");
const Evaluation = require("../models/evaluation.models");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const evaluations = await Evaluation.find()
    return res.status(200).send(evaluations);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const evaluations = await Evaluation.create(req.body);
    return res.status(201).send(evaluations);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const evaluations = await Evaluation.findById(req.params.id)
    return res.status(201).send(evaluations);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
