const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

const router = Router();

router.post(
  '/register',
  [
    check('name', 'Name must be at least 3 characters').isLength({ min: 3 }).trim(),
    check('email', 'Invalid email').normalizeEmail().isEmail(),
    check('password', 'Password must be 6–50 characters')
      .isLength({ min: 6, max: 50 })
      // .isAlphanumeric()
      .trim(),
    check('confirm').custom((value, { req }) => {
      if (value === req.body.password) return true;
      throw new Error('Passwords must match');
    }),
  ],
  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[0].msg,
          isValidation: true,
        });
      }

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({
          message: 'A user with this email already exists',
          isValidation: true,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({
        message: 'Something went wrong, please try again',
        isValidation: true,
      });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Invalid email').normalizeEmail().isEmail(),
    check('password', 'Please enter your password').exists(),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[0].msg,
          isValidation: true,
        });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: 'User not found',
          isValidation: true,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: 'Incorrect password, please try again',
          isValidation: true,
        });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.JWT_SECRET,
        { expiresIn: '14d' }
      );

      res.json({ token, userId: user.id });
    } catch (err) {
      res.status(500).json({
        message: 'Something went wrong, please try again',
        isValidation: true,
      });
    }
  }
);

module.exports = router;