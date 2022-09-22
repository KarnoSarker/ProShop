import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc	Auth user and get token
// @route	Post /api/users/login
// @access	Public
export const authUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.cookie('x_token', token).status(200).send({ user, token });
  } catch (error) {
    res.status(401);
    throw new Error(error.message);
  }
});
