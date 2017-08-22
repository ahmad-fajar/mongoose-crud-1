'use strict'

const Trans = require('../models/Transactions')
const denda = require('../helpers/fineCounter')


// create
exports.addTransaction = (req, res) => {
  let outDate = denda.outDate(new Date());
  let dueDate = denda.dueDate(req.body.days, (new Date()));
  let inDate  = new Date(req.body.in_date); // date format: YYYY-mm-dd
  let fine    = denda.fine(req.body.days, outDate, inDate);

  let data = {
    memberid : req.body.memberid,
    days     : req.body.days,
    out_date : outDate,
    due_date : dueDate,
    in_date  : inDate,
    fine     : fine,
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