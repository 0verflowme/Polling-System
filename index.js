const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();


// For request parsing
app.use(express.urlencoded({ extended: true }));

// All db and Tables
const db = require("./config/mongoose");
const Questions = require("./models/questions");
const Options = require("./models/options");


const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => {
	console.log("App is up and running on: ", PORT);
});
