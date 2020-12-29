const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const validateSignup = [
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please fill out the First Name field.'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please fill out the Last Name field.'),  
    check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
      check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { firstName, lastName, username, email, password } = req.body;
      const user = await User.signup({ firstName, lastName, username, email, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );

module.exports = router;