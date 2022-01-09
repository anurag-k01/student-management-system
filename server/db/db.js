const mongoose = require("mongoose");

const main = () => {
  mongoose.connect(
    `mongodb+srv://anurag_k:${process.env.PASS}@cluster0.d5nxq.mongodb.net/datacenter?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Connected Succesfully to Database");
};
module.exports = main;
