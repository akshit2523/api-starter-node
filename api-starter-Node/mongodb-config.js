const { connect } = require('mongoose')
const constants = require('./global/index')
const { logMessage, logError } = require('./controllers/utils')

// const baseURL = `mongodb+srv://${constants.mongoDB.username}:${constants.mongoDB.password}@${constants.mongoDB.cluster}/${constants.mongoDB.databaseName}`
// const MONGO_URL = `${baseURL}?retryWrites=true&w=majority`
const MONGO_URL = `mongodb://localhost:27017/${constants.mongoDB.databaseName}`

let isConnected = false
let database = null
const initializeDb = async () => {
  if (isConnected) return database

  try {
    logMessage(`MongoDB URL: ${MONGO_URL}`)
    console.log('🚀🚀🚀 initializeDb => Connecting to mongoDB')
    database = await connect(MONGO_URL)
    isConnected = !!(database.connections[0].readyState)
    console.log(`🚀🚀🚀 initializeDb => Database ${database.connections[0].name} Connected`)
    return database
  } catch (error) {
    logError(error.message)
    throw new Error(error)
  }
}

const getOrInitializeDatabase = async () => {
  if (!database) {
    return await initializeDb()
  }

  return database
}

module.exports = {
  getOrInitializeDatabase
}
