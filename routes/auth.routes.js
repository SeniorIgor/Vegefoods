const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('../config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth.middleware');
const User = require('../models/User');
const router = Router();

router.post(
	'/register',
	[
		check('name', 'Минимальная длина имени 3 символа').isLength({ min: 3 }).trim(),
		check('email', 'Некорректный email').normalizeEmail().isEmail(),
		check('password', 'Минимальная длина пароля 6 символов')
			.isLength({ min: 6, max: 50 }).isAlphanumeric().trim(),
		check('confirm').custom((value, { req }) => {
			if (value === req.body.password) return true;
			throw new Error('Пароли должны совпадать');
		})
	],
	async (req, res) => {
		try {
			const { name, email, password } = req.body;

			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					message: errors.array()[0].msg,
					isValidation: true,
				})
			}

			const candidate = await User.findOne({ email });

			if (candidate) {
				return res.status(400).json({
					message: 'Такой пользователь уже существует',
					isValidation: true,
				});
			}

			const hachedPassword = await bcrypt.hash(password, 12);
			const user = new User({ name, email, password: hachedPassword });

			await user.save();

			res.status(201).json({ message: 'Пользователь успешно создан' });

		} catch (err) {
			res.status(500).json({
				message: 'Что-то пошло не так, попробуйте снова',
				isValidation: true,
			})
		}
	});

router.post(
	'/login',
	[
		check('email', 'Некорректный email').normalizeEmail().isEmail(),
		check('password', 'Введите пароль').exists()
	],
	async (req, res) => {
		try {
			const { email, password } = req.body;

			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					message: errors.array()[0].msg,
					isValidation: true,
				})
			}

			const user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({
					message: 'Пользователь не найден',
					isValidation: true,
				});
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({
					message: 'Неверный пароль, попробуйте снова',
					isValidation: true,
				});
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.JWT_SECRET,
				{ expiresIn: '14d' }
			)

			res.json({ token, userId: user.id });

		} catch (err) {
			res.status(500).json({
				message: 'Что-то пошло не так, попробуйте снова',
				isValidation: true,
			})
		}
	})

module.exports = router;