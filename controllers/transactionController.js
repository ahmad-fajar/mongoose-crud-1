'use strict'

const Trans = require('../models/Transactions')


// create
exports.addTransaction = (req, res) => {
  let data = {
    memberid : req.body.memberid,
    days     : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date  : new Date(),
    fine     : req.body.fine,
    booklist : req.body.booklist
  }

  Trans.create(data)
  .then(created => res.send(created))
  .catch(e => res.send(e))
}

exports.insertBookList = (req, res) => {
  Trans.update({
    _id : req.params.id
  }, {
    $push : {
      booklist : req.body.bookid
    }
  })
  .then(data => res.send(data))
  .catch(e => res.send(e))
}


// read
exports.findAllTransactions = (req, res) => {
  Trans.find({})
  .populate('memberid')
  .populate('booklist')
  .exec()
  .then(data => res.send(data))
  .catch(e => res.send(e))
}

exports.findTransById = (req, res) => {
  Trans.findOne({ _id : req.params.id })
  .populate('memberid')
  .populate('booklist')
  .exec()
  .then(data => res.send(data))
  .catch(e => res.send(e))
}


// delete
exports.deleteTransaction = (req, res) => {
  Trans.remove({ _id : req.params.id })
  .then(deleted => res.send(deleted))
  .catch(e => res.send(e))
}