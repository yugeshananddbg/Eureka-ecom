const ErrorHandler = require("../utils/errorHandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  if (err.name === "CastError") {
    const message = `Resource not found Invalid:${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  // Mongooes  duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
// Mongooes jwt error
if (err.name === "JsonWebTokenError") {
  const message = `Json web token is invalid`;
  err = new ErrorHandler(message, 400);
}
//jwt expire error
if (err.name === "JsonExpiredError") {
  const message = `Json web token is expired`;
  err = new ErrorHandler(message, 400);
}

  res.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};
