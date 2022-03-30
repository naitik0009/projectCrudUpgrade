require("dotenv").config();
const notFound = require("./middlewares/notFound");
const connectDB = require("./database/mongo");
const express = require("express");
const app = express();
const task = require("./routes/route");

const path = __dirname + "/public";

// console.log(path);
const url = process.env.MONGO_URI;

//middleware
app.use(express.json());
app.use(express.static(path));
// app.use(notFound);
//routes
app.use("/api/v1/tasks", task);

const start = async () => {
  try {
    (await connectDB(url))
      ? console.log("connected to db")
      : console.log("not connected to db");
    app.listen(
      process.env.PORT,
      console.log("server is listening on", process.env.PORT)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
