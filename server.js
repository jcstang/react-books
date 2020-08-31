const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/db');
const app = express();

const mongoose = require('mongoose');

const Book = require('./models/Books');

// ** Connect Database **
// =============================================================
connectDB()

// let MONGODB_URI = process.env.NODE_ENV 
//   ? process.env.MONGODB_URI 
//   : "mongodb://localhost/google_books";

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// mongoose.connect("mongodb://localhost/google_books", { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// ROUTES
// =============================================================
app.get('/api/saved-books', (req, res) => {
  Book
    .find({})
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function() {
      res.status(400).end('bad things');
    })
});

app.post('/api/books', (req, res) => {
  const bookData = req.body;
  // console.log(bookData);

  Book
    .create(bookData)
    .then(function() {
      res.status(200).end();
    })
    .catch(function(err) {
      console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    });

});

app.delete('/api/books/:id', (req, res) => {
  const mongoKey = req.params.id;

  Book
    .remove({
      _id: mongoKey
    })
    .then(function(data) {
      res.status(200).end();
    })
    .catch(function() {
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    });

});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});