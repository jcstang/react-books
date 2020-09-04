const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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