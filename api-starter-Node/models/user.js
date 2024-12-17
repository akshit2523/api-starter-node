const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose
const constants = require('../global/index')
const jwt = require('jsonwebtoken')  
const { defaultFields, defaultSchemaOptions } = require('./model-utils')

const userSchema = new Schema({
  _id: { type: Schema.Types.String, required: true, default: uuidv4 },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
  ...defaultFields
}, {
  ...defaultSchemaOptions
})

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id }, constants.security.TOKEN_SECRET, { expiresIn: '7d' })
}

const UserStore = mongoose.model('user', userSchema, 'users')

module.exports = UserStore
