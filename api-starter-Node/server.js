const dotenv = require('dotenv')
dotenv.config()
const constants = require('./global/index')
const cors = require('cors')
const express = require('express')
const app = express()
const morganBody = require('morgan-body')
const { publicRoutes, privateRoutes } = require('./routes')
const mongodb = require('./mongodb-config')
const authentication = require('./middleware/Authentication')

const initialize = async () => {
  await mongodb.getOrInitializeDatabase()

  app.use(express.json())
  app.use(cors())

  morganBody(app, {
    prettify: false,
    includeNewLine: true
  })

  // Public Routes! i.e. Login, SignUp etc.
  app.use('/', publicRoutes)

  app.use(authentication)

  // Private Routes! i.e. System routes etc.
  app.use('/', privateRoutes)

  app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message || 'Something unexpected happened!' })
  })

  app.listen(constants.PORT, () => console.log(`Listening on port http://localhost:${constants.PORT}`))
}

initialize().catch((error) => console.error('Error while setup server', error.message))
