const router = require('koa-router')()

router.prefix('/api/v1')

// Auth
router.post('/auth/login', require('./auth').login)
router.post('/auth/signup', require('./auth').signup)

module.exports = router
