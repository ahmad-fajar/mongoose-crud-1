'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
  'name'     : String,
  'memberid' : String,
  'address'  : String,
  'zipcode'  : String,
  'phone'    : String
});

const Customers = mongoose.model('Customers', CustomersSchema);
module.exports = Customers;