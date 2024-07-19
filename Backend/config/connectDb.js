const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB");
    console.log("Server Running On Mongodb");
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
