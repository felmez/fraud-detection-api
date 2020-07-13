const express = require('express')
const router = express.Router()
const transaction = require('../transaction.model')

// transactions
router.get('/', async (req, res) => {
   await transaction.getTransactions()
   .then(transactions => res.json(transactions))
   .catch(err => {
       if (err.status) {
           res.status(err.status).json({ message: err.message })
       } else {
           res.status(500).json({ message: err.message })
       }
   })
})

// single transaction by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
    await transaction.getTransaction(id)
    .then(transaction => res.json(transaction))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

module.exports = router