const { DummyStore } = require('../models')
const { sendSuccess, sendError } = require('./utils')

const getDummies = async (req, res) => {
  try {
    const dummies = await DummyStore.find().lean()

    sendSuccess(res, { data: dummies })
  } catch (error) {
    sendError(res, 'Error while fetching dummies.', error)
  }
}

const addDummy = async (req, res) => {
  try {
    const dummyInfo = req.body

    if (!dummyInfo) {
      return sendError(res, 'dummy not available.', null, 404)
    }

    const dummy = await new DummyStore(dummyInfo)
    await dummy.save()

    sendSuccess(res, { data: dummy })
  } catch (error) {
    sendError(res, 'Error while adding dummy.', error)
  }
}

module.exports = {
  getDummies,
  addDummy
}