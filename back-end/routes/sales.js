const express = require('express')
const router = express.Router()
const controller = require('../controllers/sale')

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.Update)

module.exports = router
