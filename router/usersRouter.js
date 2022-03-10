// externals imports
const express = require('express')

// internals imports
const { getUsers, addUser } = require("../controller/usersController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUservalidators, addUservalidationHandler } = require('../middlewares/users/usersValidator');

const router = express.Router();

// login
router.get ('/', decorateHtmlResponse("Users"), getUsers)
router.post('/', avatarUpload, addUservalidators, addUservalidationHandler, addUser)

module.exports = router 