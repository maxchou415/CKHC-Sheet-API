const jwt = require('jsonwebtoken')

const secret = process.env.tokenSecret

module.exports = async (userId) => {
  let token = jwt.sign(userId, secret)
  return token
}
