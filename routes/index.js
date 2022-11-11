const express = require("express");
const router = express.Router();

const optionsController = require("../controllers/optionsController");

router.get("/option", optionsController.home);

module.exports = router;
