const express = require("express");
const router = express.Router();

const questionsController = require("../controllers/questionsController");

// Routes for Questions
router.get("/", questionsController.home);
router.post("/create", questionsController.createQues);
router.get("/:id",questionsController.getQuestion)
router.post("/:id/options/create", questionsController.createOption);
router.delete("/:id/delete", questionsController.destroy);

module.exports = router;
