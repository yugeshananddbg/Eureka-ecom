module.exports = (theFunck) => (req, res, next) => {
  Promise.resolve(theFunck(req, res, next)).catch(next);
};
