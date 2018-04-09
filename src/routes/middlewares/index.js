const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  res.status(404).json()
})

router.use((err, req, res, next) => {
  res.status(400).json({err})
})

module.exports = router
