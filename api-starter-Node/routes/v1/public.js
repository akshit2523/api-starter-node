/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and user management
 */

const router = require('express').Router()
const { login, register, forgotPassword, verifyResetToken, resetPassword } = require('../../controllers/user')

/**
 * @swagger
 * /v1/users/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Auth]
 *     description: Authenticate a user by email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email
 *               password:
 *                 type: string
 *                 description: User password
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', login)

/**
 * @swagger
 * /v1/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Server error
 */
router.post('/register', register)

/**
 * @swagger
 * /v1/users/forgot-password:
 *   post:
 *     summary: Request a password reset
 *     tags: [Auth]
 *     description: Send a password reset email to the user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email for password reset
 *     responses:
 *       200:
 *         description: Password reset email sent
 *       400:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/forgot-password', forgotPassword)

/**
 * @swagger
 * /v1/users/verify-reset-token/{token}:
 *   get:
 *     summary: Verify reset token
 *     tags: [Auth]
 *     description: Verify the password reset token to ensure it is valid.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Password reset token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Valid token
 *       400:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */
router.get('/verify-reset-token/:token', verifyResetToken)

/**
 * @swagger
 * /v1/users/reset-password/{token}:
 *   post:
 *     summary: Reset the user password
 *     tags: [Auth]
 *     description: Reset the user's password using a valid reset token.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Password reset token
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: New password for the user
 *     responses:
 *       200:
 *         description: Password successfully reset
 *       400:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */
router.post('/reset-password/:token', resetPassword)

module.exports = router
