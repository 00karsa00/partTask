const mongoose = require("mongoose");
const db = require("./dbConnection");
const user = require("./dbSchema/users");
const admin = require("./dbSchema/admin");

exports.insertUser = (data) => {
  let respose = {};
  return new Promise((resolve) => {
    try {
      var insertUser = new user(data);
      insertUser.save(function (err, data) {
        if (err) {
          console.log("error => ", err);
          respose = {
            error: true,
            message: "Database Error",
          };
        } else {
          respose = {
            error: false,
          };
          resolve(respose);
        }
      });
    } catch (err) {
      console.log(err);
      respose = {
        message: `Internal Error.`,
        error: true,
      };
      resolve(respose);
    }
  });
};

exports.insertAdminUser = (data) => {
  let respose = {};
  return new Promise((resolve) => {
    try {
      var insertUser = new admin(data);
      insertUser.save(function (err, data) {
        if (err) {
          console.log("error => ", err);
          respose = {
            error: true,
            message: "Database Error",
          };
        } else {
          respose = {
            error: false,
          };
          resolve(respose);
        }
      });
    } catch (err) {
      console.log(err);
      respose = {
        message: `Internal Error.`,
        error: true,
      };
      resolve(respose);
    }
  });
};

exports.getUserDetails = (email) => {
  let respose = {};
  return new Promise((resolve) => {
    try {
      user.find({ email: email }, function (err, results) {
        if (err) {
          console.log("error => ", err);
          respose = {
            error: true,
            message: "Database Error",
          };
          resolve(respose);
        } else {
          respose = {
            error: false,
            data: results,
          };
          resolve(respose);
        }
      });
    } catch (err) {
      console.log(err);
      respose = {
        message: `Internal Error.`,
        error: true,
      };
      resolve(respose);
    }
  });
};

exports.getAdminDetails = (email) => {
  let respose = {};
  return new Promise((resolve) => {
    try {
      admin.find({ email: email }, function (err, results) {
        if (err) {
          console.log("error => ", err);
          respose = {
            error: true,
            message: "Database Error",
          };
          resolve(respose);
        } else {
          respose = {
            error: false,
            data: results,
          };
          resolve(respose);
        }
      });
    } catch (err) {
      console.log(err);
      respose = {
        message: `Internal Error.`,
        error: true,
      };
      resolve(respose);
    }
  });
}

exports.getAllUserDetails = () => {
  let respose = {};
  return new Promise((resolve) => {
    try {
      user.find({}, function (err, results) {
        if (err) {
          console.log("error => ", err);
          respose = {
            error: true,
            message: "Database Error",
          };
          resolve(respose);
        } else {
          respose = {
            error: false,
            data: results,
          };
          resolve(respose);
        }
      });
    } catch (err) {
      console.log(err);
      respose = {
        message: `Internal Error.`,
        error: true,
      };
      resolve(respose);
    }
  });
};
