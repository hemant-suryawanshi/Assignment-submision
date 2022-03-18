const express = require("express");

const Student = require("../models/student.models");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const students = await Student.find()
      .lean()
      .exec();

    return res.status(200).send(students);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const students = await Student.create(req.body);
    return res.status(201).send(students);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const students = await Student.findById(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(students);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;
