
export {}; // fix non top-level 

const express = require('express')
const router = express.Router()

router.use('/api/transactions', require('./transaction.routes'))

module.exports = router