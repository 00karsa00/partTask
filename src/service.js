const repository = require("./repository");
const utils = require("./utils");

exports.registerUserDetails = async (data, cb) => {
  console.log(data)
  try {
    let respose = {};
    let checkEmail = await repository.getUserDetails(data.email);
    if (checkEmail.error) return cb(checkEmail);

    if (checkEmail.data.length > 0) {
      respose = {
        message: `Your details is already register our database.`,
        error: true,
      };
      return cb(respose);
    }
   
    let insertValue = {
      email: data.email,
      name: data.name,
      age: data.age,
      city: data.city,
      phone: data.phone,
      qualification: data.qualification,
      address: data.Address
    };

    let insertRes = await repository.insertUser(insertValue);
    if (insertRes.error) return cb(insertRes);

    respose = {
      message: `Your Details Register Successfully`,
      error: false,
    };
    return cb(respose);
  } catch (e) {
    console.log("error => ", e);
    respose = {
      message: `Internal Error.`,
      error: true,
    };
    return cb(respose);
  }
};

exports.createAdminUser = async (data, cb) => {
  try {
    let respose = {};
    let checkEmail = await repository.getAdminDetails(data.email);
    if (checkEmail.error) return cb(checkEmail);

    if (checkEmail.data.length > 0) {
      respose = {
        message: `${data.email} is already register as admin`,
        error: true,
      };
      return cb(respose);
    }
    
    let insertValue = {
      email: data.email,
      name: data.name,
      password: data.password
    };

    let insertRes = await repository.insertAdminUser(insertValue);
    if (insertRes.error) return cb(insertRes);

    respose = {
      message: `Admin is Register Successfully`,
      error: false,
    };
    return cb(respose);
  } catch (e) {
    console.log("error => ", e);
    respose = {
      message: `Internal Error.`,
      error: true,
    };
    return cb(respose);
  }
};

exports.adminLogin = async (data, cb) => {
  try {
    let respose = {};
    let checkEmail = await repository.getAdminDetails(data.email);
    if (checkEmail.error) return cb(checkEmail);

    if (checkEmail.data.length == 0) {
      respose = {
        message: `${data.email} email is not register.`,
        error: true,
      };
      return cb(respose);
    }
    let userDetail = JSON.parse(JSON.stringify(Object.create(checkEmail.data[0])));
    if (userDetail.password != data.password) {
      respose = {
        message: `Password is mismatched`,
        error: true,
      };
      return cb(respose);
    }
    delete userDetail.password;
    let token = utils.createJWTToken(userDetail);
    respose = {
      message: `Login Successfully.`,
      token: token,
      error: true,
    };
    return cb(respose);
  } catch (e) {
    console.log("error => ", e);
    respose = {
      message: `Internal Error.`,
      error: true,
    };
    return cb(respose);
  }
};

exports.getUserDetails = async (req,cb) => {
  try {
    let respose = {};
    let userDetails = await repository.getAllUserDetails();
    if (userDetails.error) return cb(userDetails);
    respose = {
      message: `Data get Successfully`,
      data: userDetails.data,
      error: false,
    };
    return cb(respose);
  } catch (e) {
    console.log("error => ", e);
    respose = {
      message: `Internal Error.`,
      error: true,
    };
    return cb(respose);
  }
};
