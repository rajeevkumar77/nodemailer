const { validationResult } = require("express-validator");

exports.checker = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ status: 0, message: (errors.errors?.[0]?.path || "") + " required", ...errors });
	}
	next();
};
