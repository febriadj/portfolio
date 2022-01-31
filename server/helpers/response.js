module.exports = ({
  res,
  message = null,
  data = null,
  success = true,
  httpStatusCode = 200,
}) => {
  res.status(httpStatusCode).json({
    success,
    message,
    data,
  });
}
