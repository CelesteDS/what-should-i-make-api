const express = require('express')
const middlewares = require('./middlewares')

const router = express.Router()


router.use(middlewares)
module.exports = router
