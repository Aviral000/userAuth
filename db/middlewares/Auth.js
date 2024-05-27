require('dotenv').config();
const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(500).send({ error: "Authorization failed" });
  }

  const token = authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).send({ error: "Authorization failed" });
  }
};

module.exports = Auth;
