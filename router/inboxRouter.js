// externals imports
const express = require('express')

// internals imports
const { getInbox } = require("../controller/inboxController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

const router = express.Router();

// login
router.get('/', decorateHtmlResponse("Inbox"), getInbox)

module.exports = router