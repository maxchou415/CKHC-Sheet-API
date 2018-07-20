const router = require('koa-router')()
const { auth } = require('./utils/middlewares')

router.prefix('/api/v1')

// Auth
router.post('/auth/login', require('./auth').login)
router.post('/auth/signup', auth.required, auth.role(100), require('./auth').signup)

router.get('/sheets', auth.required, auth.role(1), require('./sheets').get)
router.get('/sheets/:sheetId', auth.required, auth.role(1), require('./sheets').getById)
router.post('/sheets', auth.required, auth.role(1), require('./sheets').post)
router.patch('/sheets/:sheetId', auth.required, auth.role(1), require('./sheets').patchById)
router.delete('/sheets/:sheetId', auth.required, auth.role(1), require('./sheets').deleteById)

module.exports = router
