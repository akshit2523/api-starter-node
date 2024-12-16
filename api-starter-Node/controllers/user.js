const constants = require('../global/index')
const { UserStore } = require('../models')
const { sendSuccess, sendError } = require('./utils')
const bcrypt = require('bcrypt')
const _ = require('lodash')

const getUsers = async (req, res) => {
  try {
    const users = await UserStore.find()

    sendSuccess(res, { data: users })
  } catch (error) {
    sendError(res, 'Error while fetching users.', error)
  }
}

const addUser = async (req, res) => {
  try {
    const userInfo = req.body

    if (!userInfo) {
      return sendError(res, 'User not available.', null, 404)
    }

    const user = await new UserStore(userInfo).save()

    sendSuccess(res, { data: user })
  } catch (error) {
    sendError(res, 'Error while adding user.', error)
  }
}


module.exports = {
  getUsers,
  addUser
}
