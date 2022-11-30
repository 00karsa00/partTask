var mongoose = require("mongoose");

var Users = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  city: String,
  phone: Number,
  qualification: String,
  Address: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", Users, "Users");
