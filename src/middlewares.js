function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`${req.originalUrl} is not exist`);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
