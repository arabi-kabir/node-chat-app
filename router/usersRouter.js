// externals imports
const express = require('express')

// internals imports
const { getUsers } = require("../controller/usersController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

const router = express.Router();

// login
router.get('/', decorateHtmlResponse("Users"),getUsers)

module.exports = router