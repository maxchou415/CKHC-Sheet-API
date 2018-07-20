const uniqid = require('uniqid')
const helper = require('../../../../infra/helpers/index')
const {
  user: User
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  const wantedData = ctx.request.body

  // Make sure incoming datas are following the spec
  if (typeof wantedData.studentNumber !== 'number') {
    ctx.throw(400, 'ADD_USER_FAILED')
  }

  // email and studentNumber are unique
  const data = {
    userId: uniqid('user-'),
    name: String(wantedData.name),
    email: String(wantedData.email),
    password: helper.password.hash(String(wantedData.password)),
    studentNumber: Number(wantedData.studentNumber),
    createdAt: new Date().toISOString()
  }

  try {
    await new User(data).save()
  } catch (error) {
    ctx.throw(400, 'ADD_USER_FAILED')
  }

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data: {}
  }
}
