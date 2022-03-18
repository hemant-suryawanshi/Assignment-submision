const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pappu:pappu123@cluster0.yswkt.mongodb.net/test",
    console.log("connected")
  );

};
module.exports = connect;
