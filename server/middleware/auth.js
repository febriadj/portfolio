const jwt = require('jsonwebtoken');
const response = require('../helpers/response');

module.exports = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      const newErr = {
        message: '',
      }
      throw newErr;
    }

    const token = header.split(' ')[1];

    const result = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = result;

    next();
  }
  catch (error0) {
    response({
      res,
      success: false,
      message: error0.message,
      httpStatusCode: 400,
    })
  }
}
