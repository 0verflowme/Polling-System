const express = require("express");
const router = express.Router();

// Router is splited into 2 parts
router.use("/questions", require("./questionRouter"));
router.use("/options", require("./optionRouter"));

module.exports = router;
