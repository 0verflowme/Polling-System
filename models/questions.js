const mongoose = require("mongoose");
//Questions Model
const questionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	options: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Options",
			required: true,
		},
	],
});

const Questions = mongoose.model("Questions", questionSchema);
module.exports = Questions;
