const helper = require('../../../../infra/helpers/index')
const {
  user: User
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  // TODO: Password Hash
  const {
    email,
    password
  } = ctx.request.body

  const hashedPassword = helper.password.hash(password)

  let data
  try {
    data = await User.findOne({
      email,
      password: hashedPassword
    })
  } catch (error) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  if (!data || data.length <= 0) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  const token = helper.token.new(data.userId)

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data: token
  }
}
