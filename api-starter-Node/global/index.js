// Firebase

// MongoDB
exports.mongoDB = {
  username: process.env.mongoDB_username || 'growbook',
  password: process.env.mongoDB_password || 'w9dXxwCKB7%249GF9',
  cluster: process.env.mongoDB_cluster || 'growbook.bcs28lu.mongodb.net',
  databaseName: process.env.mongoDB_databaseName || 'growbook-stage'
}

exports.ENVIRONMENT = process.env.ENVIRONMENT || 'stage'
exports.PORT = process.env.PORT || 8080
exports.userPlatformUrl = 'http://localhost:3000'
exports.adminPlatformUrl = 'http://localhost:3001'
exports.apiUrl = 'http://localhost:8080'

exports.security = {
  SALT: 10,
  TOKEN_SECRET: 'JWT_SECRET'
}

// Status Code
exports.ResponseStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_NOT_AVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}
