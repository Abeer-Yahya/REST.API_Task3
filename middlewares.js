function logger(req, res, next) {
  const data = {
    IP: req.ip,
    Method: req.method,
    EndPoint: req.originalUrl,
  };
  req.userInfo = data;
  next();
}
module.exports = {
  logger,
};
