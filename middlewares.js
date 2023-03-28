function logger(req, res, next) {
  const data = {
    IP: req.ip,
    Method: req.method,
    EndPoint: req.originalUrl,
  };
  req.userInfo = data;
  next();
}

const errorHandler = (error, req, res, next) => {
  return res.status(400).send(error.message);
};

module.exports = {
  logger,
  errorHandler,
};
