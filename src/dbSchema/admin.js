var mongoose = require("mongoose");

var Admin = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("admin", Admin, "Admin");
