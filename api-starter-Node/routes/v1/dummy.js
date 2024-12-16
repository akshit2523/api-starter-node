const router = require('express').Router()

const { getDummies, addDummy } = require('../../controllers/dummy')

// Dummies routes - /v1/dummies

router.get('/', getDummies)
router.post('/', addDummy)

module.exports = router
