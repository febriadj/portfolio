const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../database/models/user');

const response = require('../helpers/response');

exports.register = async (req, res) => {
  try {
    const permission = process.env.PERMISSION_KEY;
    const {
      username,
      email,
      password,
      key,
    } = req.body;

    if (key !== permission) {
      const newErr = {
        message: 'Permission key doesn\'t match',
      }
      throw newErr;
    }

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const user = await new UserModel({
      username,
      email,
      password: hash,
    }).save();

    response({
      res,
      message: 'Account created successfully',
      data: user,
    });
  }
  catch (error0) {
    response({
      res,
      message: error0.message,
      success: false,
      httpStatusCode: 400,
    });
  }
}

exports.login = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const user = await UserModel.findOne({
      $or: [
        { username: { $eq: usernameOrEmail } },
        { email: { $eq: usernameOrEmail } },
      ],
    });

    if (!user) {
      const newErr = {
        message: 'Un-registered username or email',
      }
      throw newErr;
    }

    const pass = await bcrypt.compare(password, user.password);

    if (!pass) {
      const newErr = {
        message: 'Password doesn\'t match',
      }
      throw newErr;
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_PRIVATE_KEY);

    response({
      res,
      message: 'Successfully logged into account',
      data: token,
    });
  }
  catch (error0) {
    response({
      res,
      message: error0.message,
      success: false,
      httpStatusCode: 400,
    });
  }
}

exports.findOne = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.userId });
    response({
      res,
      message: 'Client request has been successfully responded',
      data: user,
    });
  }
  catch (error0) {
    response({
      res,
      message: error0.message,
      success: false,
      httpStatusCode: 400,
    });
  }
}
