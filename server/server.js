const express = require("express");
const app = express();
const db = require("./db/db");
const cors = require("cors");
// app.use(cors());

app.use(express.json());
app.use(cors());
require("dotenv").config();
const studentController = require("./routes/students");
app.use("/", studentController);
app.listen("8000", async function () {
  await db();

  console.log("Listening on port 8000");
});
