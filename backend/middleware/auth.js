const jwt = require("jsonwebtoken")
require("dotenv").config()

function auth(req, res, next) {
  const token = req.header("x-auth-token")
  if (!token) return res.status(401).send("Access denied. Not authorized...")
  try {
    const secretKey = process.env.SECRET_KEY
    const payload = jwt.verify(token, secretKey)
    req.user = payload
    next();
  } catch (ex) {
    res.status(400).send("Отсутствует токен доступа...")
  }
}

module.exports = auth