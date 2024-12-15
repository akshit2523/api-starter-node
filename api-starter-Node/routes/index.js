const privateRoutes = require('express').Router()
const publicRoutes = require('express').Router()
const v1PublicRoutes = require('./v1/public')
const v1Routes = require('./v1')

// TODO : v1 recommended for long-term
privateRoutes.use('/v1', v1Routes)
publicRoutes.use('/v1', v1PublicRoutes)
publicRoutes.get('/', (_req, res) => res.send('Welcome! service is in tip-top condition.'))
publicRoutes.get('*', (_req, res) => res.send('Oops! We couldn\'t find what you\'re looking for. Please check your request and try again.'))

module.exports = {
  privateRoutes,
  publicRoutes
}
