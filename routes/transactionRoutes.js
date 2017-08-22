'use strict'

const router = require('express').Router();
const ctrl = require('../controllers/transactionController')

// route test
// router.get('/', (req, res) => res.send('Transaction Index'))

// create
router.post('/', ctrl.addTransaction)
router.post('/:id', ctrl.insertBookList)

// read
router.get('/', ctrl.findAllTransactions)
router.get('/:id', ctrl.findTransById)

// delete
router.delete('/:id', ctrl.deleteTransaction)

module.exports = router;