'use strict'

const Cust = require('../models/Customers')


// create
exports.addUser = (req, res) => {
  let data = {
    name     : req.body.name,
    memberid : req.body.memberid,
    address  : req.body.address,
    zipcode  : req.body.zipcode,
    phone    : req.body.phone
  }

  Cust.create(data)
  .then(created => res.send(created))
  .catch(e => res.send(e))
}


// read
exports.findAllCustomer = (req, res) => {
  Cust.find()
  .then(customers => res.send(customers))
  .catch(e => res.send(e))
}

exports.findCustomerById = (req, res) => {
  Cust.findOne({ _id : req.params.id })
  .then(customer => res.send(customer))
  .catch(e => res.send(e))
}


// update
exports.updateCustomer = (req, res) => {
  Cust.findOne({ _id : req.params.id })
  .then(customer => {
    let updater = {
      name     : req.body.name     || customer.name,
      memberid : req.body.memberid || customer.memberid,
      address  : req.body.address  || customer.address,
      zipcode  : req.body.zipcode  || customer.zipcode,
      phone    : req.body.phone    || customer.phone
    }

    Cust.findOneAndUpdate({ _id : req.params.id }, updater)
    .then(updated => res.send(updated))
    .catch(e => res.send(e))
  })
  .catch(e => res.send(e))
}


// delete
exports.deleteCustomer = (req, res) => {
  Cust.remove({ _id : req.params.id })
  .then(deleted => res.send(deleted))
  .catch(e => res.send(e))
}