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
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc')
// const swaggerDocument = require('./swagger.json');

  app.use(express.json())
  app.use(cors())

  morganBody(app, {
    prettify: false,
    includeNewLine: true
  })

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API Information for MySoundsGlobal backend',
  },
  servers: [
    {
      url: `http://localhost:${constants.PORT}`, // Base URL for your API (adjust to your actual URL)
    },
  ],
  components: {
    schemas: {
      Dummy: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the dummy',
          },
          title: {
            type: 'string',
            description: 'Title of the dummy',
          },
          markedAsRead: {
            type: 'boolean',
            description: 'Indicates if the dummy is marked as read',
          },
          markedAsView: {
            type: 'boolean',
            description: 'Indicates if the dummy is marked as viewed',
          },
          type: {
            type: 'string',
            description: 'Type of the dummy',
          },
          redirectLink: {
            type: 'string',
            description: 'Link to redirect',
          },
          // Add any other fields as needed
        },
      },
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the user',
          },
          desc: {
            type: 'string',
            description: 'Description of the user',
          },
          email: {
            type: 'string',
            description: 'Email address of the user',
          },
          password: {
            type: 'string',
            description: 'Password of the user',
          },
          type: {
            type: 'string',
            description: 'Type or role of the user',
          },
        },
        required: ['_id', 'desc', 'email', 'password', 'type'],
      },
    },
  },
}

const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ['./routes/v1/*.js'], // Adjust this path according to where your route files are located
}

const swaggerSpec = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const initialize = async () => {
  await mongodb.getOrInitializeDatabase()


  // Public Routes! i.e. Login, SignUp etc.
  app.use('/', publicRoutes)

  app.use(authentication)

  // Private Routes! i.e. System routes etc.
  app.use('/', privateRoutes)

  app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message || 'Something unexpected happened!' })
  })

  app.listen(constants.PORT || 9090 , () => console.log(`Listening on port http://localhost:${constants.PORT}`))
}

initialize().catch((error) => console.error('Error while setup server', error.message))
