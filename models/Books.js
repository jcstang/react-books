const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// TODO: wire up data to this schema. ie publisher data.

const BookSchema = new Schema({
    googleKey: String,
    title: String,
    authors: [String],
    description: String,
    authors: [String],
    imageUrl: String,
    bookUrl: String,
    publishedDate: Date,
    publisher: String
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;