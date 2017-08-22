'use strict'

const Books = require('../models/Books')

// create
exports.addBook = (req, res) => {
  let data = {
    isbn     : req.body.isbn,
    title    : req.body.title,
    author   : req.body.author,
    category : req.body.category,
    stock    : req.body.stock 
  }

  Books.create(data)
  .then(created => res.send(created))
  .catch(e => res.send(e))
}


// read
exports.findAllBook = (req, res) => {
  Books.find()
  .then(books => res.send(books))
  .catch(e => res.send(e))
}


exports.findBookById = (req, res) => {
  Books.findOne({ _id : req.params.id })
  .then(book => res.send(book))
  .catch(e => res.send(e))
}


// update
exports.updateBook = (req, res) => {
  Books.findOne({ _id : req.params.id })
  .then(book => {
    let updater = {
      isbn     : req.body.isbn     || book.isbn,
      title    : req.body.title    || book.isbn,
      author   : req.body.author   || book.author,
      category : req.body.category || book.category,
      stock    : req.body.stock    || book.stock
    }

    Books.findOneAndUpdate({ _id : req.params.id }, updater)
    .then(updated => res.send(updated))
    .catch(e => res.send(e))
  })
  .catch(e => res.send(e))
}


// delete
exports.deleteBook = (req, res) => {
  Books.remove({ _id : req.params.id })
  .then(deleted => res.send(deleted))
  .catch(e => res.send(e))
}
