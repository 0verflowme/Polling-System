const express = require("express");
const router = express.Router();

router.use("/questions", require("./questionRouter"));
router.use("/options", require("./optionRouter"));

module.exports = router;
