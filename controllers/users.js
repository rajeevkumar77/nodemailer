const { Messages } = require("../utils/constant");
const { transporter } = require("../utils/transporter");


exports.sendMail = async (req, res, next) => {
	try {
		const { token, user } = req.body;

		const mailOptions = {
			from: process.env.USER_EMAIL,
			to: user.email,
			subject: 'Hi from Demo app',
			text: `this is your login token = ${token}`,
		};

		console.log(mailOptions)

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return res.status(500).json({ status: 0, message: Messages.SOMETHING_WENT_WRONG });
			}
			return res.status(200).json({ status: 1, message: Messages.LOGIN_SUCCESS });
		});

		return res.status(200).json({ status: 1, message: Messages.LOGIN_SUCCESS });

		
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: 0, message: Messages.INTERNAL_SERVER_ERROR });
	}
};