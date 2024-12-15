const v1Routes = require('express').Router()
const dummyRoutes = require('./dummy')
const userRoutes = require('./user')

v1Routes.use('/dummies', dummyRoutes)
v1Routes.use('/users', userRoutes)
v1Routes.get('/', (_req, res) => res.send('Welcome! V1 service.'))

module.exports = v1Routes
