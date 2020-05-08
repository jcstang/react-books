const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HousepetSchema = new Schema({
  name: String,
  type: String
});

const Housepet = mongoose.model('Housepet', HousepetSchema);

module.exports = Housepet;
