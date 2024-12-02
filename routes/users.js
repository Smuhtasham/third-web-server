var express = require("express");
const createUser = require("../controllors/user/createUser");
var router = express.Router();

/* GET users listing. */
router.post("/create", createUser);

module.exports = router;
