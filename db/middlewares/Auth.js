require('dotenv').config();
const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const bearerToken = authHeader.split(' ');
  const prefix = bearerToken[0];
  const token = bearerToken[1];

  if (prefix !== 'Bearer') {
    return res.status(400).json({ error: 'Invalid authorization format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = Auth;