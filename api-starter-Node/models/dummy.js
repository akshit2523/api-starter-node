const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose
const { defaultFields, defaultSchemaOptions } = require('./model-utils')

const DummySchema = new Schema({
  _id: { type: Schema.Types.String, required: true, default: uuidv4 },
  title: { type: Schema.Types.String, required: true },
  markedAsRead: { type: Schema.Types.Boolean, required: true },
  markedAsView: { type: Schema.Types.Boolean, required: false },
  type: { type: Schema.Types.String, required: true },
  redirectLink: { type: Schema.Types.String, required: true },
  ...defaultFields
}, {
  ...defaultSchemaOptions
})

const DummyStore = mongoose.model('dummy', DummySchema, 'collection_name')

module.exports = DummyStore

