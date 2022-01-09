const express = require("express");
const Student = require("../models/admin");
const router = express.Router();
router.get("/students", async (req, res) => {
  const getStudent = await Student.find().lean().exec();
  res.send(getStudent);
});
router.post("/register", async (req, res) => {
  // const student = await Student.findOne({name:req.body.name});
  // console.log(student.name);
  try {
    // if (
    //   req.body.name == student.name &&
    //   req.body.contact == student.contact &&
    //   req.body.city == student.city &&
    //   req.body.age == student.age &&
    //   req.body.education == student.education &&
    //   req.body.gender == student.gender
    // ) {
    //   res.send("Already Exist");
    // } else {
    const addStudent = await Student.create({
      name: req.body.name,
      city: req.body.city,
      age: req.body.age,
      education: req.body.education,
      gender: req.body.gender,
      contact: req.body.contact,
    });
    res.send(addStudent);
    // }
  } catch (err) {
    console.log(err);
    res.send(err);
    console.log("Something went wrong");
  }
  //   }
});
router.delete("/:id", async (req, res) => {
  const deleteStudent = await Student.findByIdAndRemove({ _id: req.params.id });
  res.send(deleteStudent);
});
module.exports = router;
