const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  age: { type: Number, required: true },
  education: { type: String, required: true },
  gender: { type: String, required: true },
  contact: { type: Number, required: true },
});

const student = mongoose.model("student", adminSchema);
module.exports = student;
