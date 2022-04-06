import { ApiErrors } from './api-errors';
import Router from 'express';
import bcrypt from 'bcrypt';
import { check, body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { client } from './database';
const router = new Router();

router.post(
  '/registration',
  body('tagname')
    .isLength({ min: 4 })
    .withMessage('tagname cannot be empty or less than 4 characters'),
  body('username')
    .not()
    .isEmpty()
    .withMessage('username should not empty')
    .trim()
    .escape()
    .isLength({ min: 4 })
    .withMessage('username should not be less than 4 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('please enter valid email'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('password must be at least 5 chars long'),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err.array());
    }
    try {
      var hasMatchTagName = false;
      const { tagname, username, email, password } = req.body;

      async function newUserAddition() {
        const hashedpassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();

        const NewUsers = client.db().collection('users');
        await NewUsers.insertOne({
          tagname: tagname,
          username: username,
          password: hashedpassword,
          email: email,
          activationLink: activationLink,
        });
        const newuser = await NewUsers.findOne({ username: username });
        res.status(200).json(newuser);
      }

      if (hasMatchTagName) {
        throw ApiErrors.BadRequest(
          'Sorry! The user with the same tagname or email already exists!'
        );
      } else {
        newUserAddition();
      }
    } catch (error) {
      next(error);
    }
  }
);

// router.get('/registration', function (req, res, next) {
//   try {
//     res.status(200).json(users);
//   } catch (error) {
//     next(error);
//   }
// });

export default router;
