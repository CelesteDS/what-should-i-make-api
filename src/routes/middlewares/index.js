const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log('should be in this route');
  res.render('common/not_found')
})

router.use((err, req, res, next) => {
  console.log('Pero porqueeeee');
  res.render('common/error')
})

module.exports = router
