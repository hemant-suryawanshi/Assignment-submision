const express = require("express");
const User = require("../models/user.models");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send({ users: users }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const users = await User.create(req.body);
    return res.status(201).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).lean().exec();
//     // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });



module.exports = router;


// .populate({
//   path: "postId",
//   select: ["title"],
//   populate: { path: "userId", select: ["firstName"] },
// })
// .populate({ path: "userId", select: ["firstName"] })
// .lean()
// .exec();
