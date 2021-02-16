const notFound = (req, res, next) => { //last middleware
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
}

const errorHandler = (error, req, res, next) => { // error handler should have 4 arguments with error as fist one
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? ' A bug in URL ' : error.stack
  })
}

module.exports = {
  notFound,
  errorHandler
}