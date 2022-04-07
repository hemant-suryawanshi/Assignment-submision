const express = require("express");
const connect = require("./configs/db");

const usersController = require("./controllers/user.controllers");
const studentController = require("./controllers/student.controllers");
const batchController = require("./controllers/batch.controllers");
const evaluationController = require("./controllers/evaluation.controllers");
const submisionController = require("./controllers/submision.controllers");
const maxController = require("./controllers/max.controller");

const app = express();

app.use(express.json());

app.use("/users", usersController); 
app.use("/student", studentController);
app.use("/batch", batchController); 
app.use("/evaluation", evaluationController);
app.use("/submision", submisionController);
app.use("/max", maxController);

app.listen(5500, async () => {
    try {
      await connect();
      
    console.log("listening on port 5000");
    } catch (err) {
      console.log(err);
    }
  
  });
module.exports = app;


