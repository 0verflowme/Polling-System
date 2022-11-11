const express = require("express");
const router = express.Router();

const optionsController = require("../controllers/optionsController");

// routes for options
router.get("/", optionsController.home);
router.delete("/:id/delete", optionsController.destroy);
router.get("/:id/add_vote", optionsController.addVote);

module.exports = router;
