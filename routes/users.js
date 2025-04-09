var express = require("express");
const { check } = require("express-validator");
const { Messages } = require("../utils/constant");
const { checker } = require("../middleware/bodyChecker");
const isAuthUser = require("../middleware/isAuthUser");
const fileUpload = require("../middleware/fileUpload");
const userController = require("../controllers/users")
var router = express.Router();


router.post("/sendMail", [
    check("user").notEmpty().withMessage(Messages.REQUIRED),
    check("token").notEmpty().withMessage(Messages.REQUIRED),
], checker, userController.sendMail);


module.exports = router;