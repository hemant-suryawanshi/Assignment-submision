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
       var data;
       var max=0
       for(var i=0;i<submisions.length;i++){
         if(submisions[i].marks>max){
           data=submisions[i]
           max=submisions[i].marks
         }
       }
  
      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;