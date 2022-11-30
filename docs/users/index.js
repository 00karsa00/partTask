const registerUserDetails = require('./registerUserDetails');
const createAdmin = require('./createAdmin');
const loginAdmin = require('./loginAdmin');
const getAllUsers = require('./getAllUsers')

module.exports = {
    paths:{
        '/registerUserDetails':{
            ...registerUserDetails
        },
        '/createAdmin': {
            ...createAdmin
        },
        '/loginAdmin': {
            ...loginAdmin
        },
        '/getAllUsers': {
            ...getAllUsers
        }
    }
}