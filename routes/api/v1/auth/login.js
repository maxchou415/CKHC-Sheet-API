const {
  user: User
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  // TODO: Password Hash
  const {
    email,
    password
  } = ctx.request.body

  try {
    var data
    data = await User.find({
      email,
      password
    })
  } catch (error) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  if (!data || data.length <= 0) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data
  }
}
