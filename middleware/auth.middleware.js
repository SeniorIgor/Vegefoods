const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		return next();
	}

	try {
		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			return res.status(401).json({ message: 'Нет авторизации' });
		}

		jwt.verify(token, config.JWT_SECRET, {}, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					message: 'Нет авторизации',
					isOldToken: true
				});
			} else {
				req.user = decoded;
				next();
			}
		});

	} catch (err) {
		res.status(401).json({ message: 'Нет авторизации' });
	}
}