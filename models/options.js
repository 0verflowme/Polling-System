const mongoose = require("mongoose");

const OptionsSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	votes: {
		type: Number,
	},
	link_to_vote: {
		type: String,
		required: true,
	},
});

const Options = mongoose.model("Options", OptionsSchema);

module.exports = Options;
