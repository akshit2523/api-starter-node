/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

const router = require('express').Router()
const { getUsers, addUser, changePassword } = require('../../controllers/user')

/**
 * @swagger
 * /v1/users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     description: Fetch a list of all users from the database.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/', getUsers)

/**
 * @swagger
 * /v1/users:
 *   post:
 *     summary: Add a new user
 *     tags: [Users]
 *     description: Create and save a new user in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: User not available or invalid input
 *       500:
 *         description: Server error
 */
router.post('/', addUser)

/**
 * @swagger
 * /v1/users/change-password:
 *   put:
 *     summary: Change user password
 *     tags: [Users]
 *     description: Update the password of an existing user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: The current password of the user
 *               newPassword:
 *                 type: string
 *                 description: The new password for the user
 *     responses:
 *       200:
 *         description: Password has been updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Password has been updated
 *       400:
 *         description: Invalid password or input error
 *       500:
 *         description: Server error
 */
router.put('/change-password', changePassword)

module.exports = router
