const adminRouteMiddleware = (req, res, next) => {
  console.log("Admin activity detected:", req.method, req.originalUrl);
  next();
};

module.exports = { adminRouteMiddleware };