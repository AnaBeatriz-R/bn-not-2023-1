const mongoose = require('mongoose')
const router = express.Router()
const controller = require('../controllers/customer')

router.post('/', controller.creater)

module.exports = router