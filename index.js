const express = require("express");
const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const db = require("./config/mongoose");
const Questions = require("./models/questions");
const Options = require("./models/options");

const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => {
	console.log("App is up and running on: ", PORT);
});
