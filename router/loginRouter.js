// externals imports
const express = require('express')

// internals imports
const { getLogin } = require("../controller/loginController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

const router = express.Router();

// login
router.get('/', decorateHtmlResponse("Login"), getLogin)

module.exports = router