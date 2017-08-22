'use strict'

const router = require('express').Router()
const ctrl = require('../controllers/customerControllers')

// route test
// router.get('/', (req, res) => res.send('Customer Index'))

// create
router.post('/', ctrl.addUser)

// read
router.get('/', ctrl.findAllCustomer)
router.get('/:id', ctrl.findCustomerById)

// updated
router.put('/:id', ctrl.updateCustomer)

// delete
router.delete('/:id', ctrl.deleteCustomer)

module.exports = router