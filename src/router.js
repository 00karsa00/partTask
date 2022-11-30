const express = require('express');
const router = express.Router();
const service = require('./service');
const repository = require("./repository");
const utils = require('./utils');


var verifyToken = async (req, res, next) => {
  let respose = {};
    console.log(req.headers)
  utils.verifyJWTToken(req.headers.authorization, async (userDetail) => {
    if (userDetail.error) {
      return res.send(userDetail);
    }
    console.log(userDetail);
    let checkEmail = await repository.getAdminDetails(userDetail.data.email);
    if (checkEmail.error) return cb(checkEmail);

    if (checkEmail.data.length == 0) {
      respose = {
        message: `user is invalid.`,
        error: true,
      };
      return res.send(respose);
    }
    req.userDetail = userDetail.data
    next();
  });
};

router.post('/registerUserDetails', (req, res) => {
    service.registerUserDetails(req.body, (result) => {
       res.send(result)
    });
});

router.post('/createAdmin', (req, res) => {
  service.createAdminUser(req.body, (result) => {
     res.send(result)
  });
});


router.post('/loginAdmin', (req, res) => {
    service.adminLogin(req.body, (result) => {
       res.send(result)
    });
});

router.get('/getAllUsers', (req, res) => {
    // req.body.userId = req.userDetail._id;
    service.getUserDetails(req.body, (result) => {
       res.send(result)
    });
});
 
module.exports = router;