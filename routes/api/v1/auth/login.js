const {
  user: User,
  sheet: Sheet
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  let data = await User.find({})

  ctx.throw(400, '111')
}
