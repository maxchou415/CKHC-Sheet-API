const { sheet: Sheet } = require('../../../../../infra/schema')

module.exports = async (ctx, next) => {
  const sheetId = ctx.params.sheetId
  try {
    var data = await Sheet.find({ sheetId })
  } catch (error) {
    ctx.throw(400, 'GET_SHEET_FAILED')
    return
  }

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data
  }
}
