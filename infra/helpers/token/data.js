const jwt = require('jsonwebtoken')

const secret = process.env.tokenSecret

module.exports = async (incomingToken) => {
  let data = jwt.verify(incomingToken, secret)
  return data
}
