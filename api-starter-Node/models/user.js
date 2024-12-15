const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose
const { defaultFields, defaultSchemaOptions } = require('./model-utils')

const userSchema = new Schema({
  _id: { type: Schema.Types.String, required: true, default: uuidv4 },
  desc: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
  type: { type: Schema.Types.String, required: true },
  ...defaultFields
}, {
  ...defaultSchemaOptions
})

const UserStore = mongoose.model('user', userSchema, 'users')

module.exports = UserStore
