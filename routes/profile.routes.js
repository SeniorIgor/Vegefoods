const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');

const router = Router();

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const { _id, name, email, phone = '' } = user;

    res.json({ id: _id, name, email, phone });

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong, please try again'
    });
  }
});

router.post('/', auth, [
  check('name', 'Name must be at least 3 characters long').isLength({ min: 3 }).trim(),
  check('email', 'Invalid email').isEmail(),
  check('phone', 'Invalid phone number').isMobilePhone("ru-RU"),
], async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const { name, email, phone } = req.body;

      return res.status(400).json({
        message: errors.array()[0].msg,
        errorData: { name, email, phone }
      });
    }

    const { name, email, phone } = req.body;
    const user = await User.findById(req.user.userId);

    if (name !== user.name) {
      user.name = name;
    }

    if (email !== user.email) {
      user.email = email;
    }

    if (phone !== user.phone) {
      user.phone = phone;
    }

    await user.save();
    res.status(201).json({ message: 'Order placed successfully' });

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong, please try again'
    });
  }
});

module.exports = router;