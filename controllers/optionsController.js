const Options = require("../models/options");
const HTTPStatus = require("http-status-codes");

function home(req, res) {
	return res.status(200).json({
		message: "This is working",
	});
}
async function destroy(req, res) {
	let option = await Options.findById(req.params.id);
	if (option) {
		await Options.deleteOne({
			_id: req.params.id,
		});
		return res.status(200).json({
			message: "Options Removed Successfully",
		});
	} else {
		return res.status(HTTPStatus.StatusCodes.NOT_FOUND).json({
			message: "Option not found",
		});
	}
}

async function addVote(req, res) {
	let option = await Options.findById(req.params.id);
	if (option) {
		option.votes += 1;
		option.save();
		return res.status(200).json({
			message: "Your vote has been successfully recorded",
		});
	} else {
		return res.status(404).json({
			message: "Option not found",
		});
	}
}

module.exports = {
	home,
	destroy,
	addVote,
};
