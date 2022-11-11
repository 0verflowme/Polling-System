const express = require("express");
const PORT = 8000;
const app = express();

const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => {
	console.log("App is up and running on: ", PORT);
});
