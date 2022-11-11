function home(req, res) {
	return res.status(200).json({
		message: "This is working",
	});
}

module.exports = {
	home,
};
