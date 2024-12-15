const router = require('express').Router()

const { getDummies, addDummy } = require('../../controllers/dummy')

// User routes - /v1/dummies

/**
 * @swagger
 * /v1/dummies:
 *   get:
 *     summary: Retrieve a list of dummies
 *     description: Get a list of all dummy records from the store.
 *     responses:
 *       200:
 *         description: A list of dummies
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
 *                     $ref: '#/components/schemas/Dummy'
 *       500:
 *         description: Server error
 */
router.get('/', getDummies)

/**
 * @swagger
 * /v1/dummies:
 *   post:
 *     summary: Add a new dummy
 *     description: Add a new dummy record to the store.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dummy'
 *     responses:
 *       200:
 *         description: Dummy added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Dummy'
 *       400:
 *         description: Invalid input, dummy not available
 *       500:
 *         description: Server error
 */
router.post('/', addDummy)

/**
 * @swagger
 * /v1/dummies/{dummyId}:
 *   get:
 *     summary: Get a single dummy by its ID
 *     description: Retrieve a dummy by its unique ID.
 *     parameters:
 *       - in: path
 *         name: dummyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the dummy to retrieve
 *     responses:
 *       200:
 *         description: Dummy retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Dummy'
 *       404:
 *         description: Dummy not found
 *       500:
 *         description: Server error
 */
// router.get('/:userId', getUser)

/**
 * @swagger
 * /v1/dummies/{dummyId}:
 *   put:
 *     summary: Update an existing dummy
 *     description: Update a dummy by its ID.
 *     parameters:
 *       - in: path
 *         name: dummyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the dummy to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dummy'
 *     responses:
 *       200:
 *         description: Dummy updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Dummy'
 *       400:
 *         description: Invalid input, dummy not available
 *       404:
 *         description: Dummy not found
 *       500:
 *         description: Server error
 */
// router.put('/:userId', updateUser)

/**
 * @swagger
 * /v1/dummies/{dummyId}:
 *   delete:
 *     summary: Delete a dummy
 *     description: Delete a dummy by its ID.
 *     parameters:
 *       - in: path
 *         name: dummyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the dummy to delete
 *     responses:
 *       200:
 *         description: Dummy deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Dummy not found
 *       500:
 *         description: Server error
 */
// router.delete('/:userId', deleteUser)

module.exports = router
