const router = require('express').Router()
const { getUsers, addUser, changePassword } = require('../../controllers/user')

router.get('/', getUsers)
router.post('/', addUser)

module.exports = router
