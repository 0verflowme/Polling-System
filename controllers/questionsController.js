const Questions = require("../models/questions");
const Options = require("../models/options");
const HTTPStatus = require("http-status-codes");

async function home(req, res) {
	let ques = await Questions.find().populate("options");
	return res.status(200).json({
		data: ques,
	});
}

// Add A question to db
async function createQues(req, res) {
	let done = await Questions.create({
		title: req.body.title,
	});
	return res.status(200).json({
		data: done,
	});
}

// create a option and store reference in question
async function createOption(req, res) {
	try {
		let ques = await Questions.findById(req.params.id);
		if (ques) {
			let option = await Options.create({
				text: req.body.text,
				votes: 0,
				link_to_vote: "dummy",
			});
			ques.options.push(option._id);
			ques.save();
			option.link_to_vote =
				"http://localhost:8000/options/" + option.id + "/add_vote";
			option.save();
			return res.status(200).json({
				message: "Option Added",
			});
		} else {
			return res.status(HTTPStatus.StatusCodes.NOT_FOUND).json({
				message: "Question not Found with id " + req.params.id,
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}

// Delete the question and Options related to it

async function destroy(req, res) {
	let ques = await Questions.findById(req.params.id);
	if (ques) {
		for (let q of ques.options) {
			await Options.deleteOne({
				_id: q,
			});
		}
		await Questions.deleteOne({
			_id: req.params.id,
		});
		return res.status(200).json({
			message: "Deleted Successfully",
		});
	} else {
		return res.status(500).json({
			message: "Question not Found",
		});
	}
}

async function getQuestion(req, res) {
	try {
		let question = Questions.findById(req.params.id);
		if (question) {
			question = await question.populate("options");
			return res.status(200).json({
				data: question,
			});
		} else {
			return res.status(404).json({
				message: "Question not found",
			});
		}
	} catch (err) {
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}

module.exports = {
	home,
	createQues,
	createOption,
	destroy,
	getQuestion,
};
