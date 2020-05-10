const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require('mongoose');


// TODO: change to books model and books db
// const Housepet = require('./models/Housepets');
const Book = require('./models/Books');
mongoose.connect("mongodb://localhost/google_books", { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// test endpoint to ensure mongoose works
// app.get('/mongoose', function (request, response) {
//   // response.send('Moose bites can be pretti nasti');
//   // TODO: make a new model
//   Book
//     .find({})
//     .then(function (data) {
//       response.json(data);
//     })
//     .catch(function(err) {
//       response.end('hi');
//     })
// });

// app.post('/savePet', function(request, response) {
//   const petData = request.body;

//   console.log(petData);

//   Housepet
//     .create(petData)
//     .then(function() {
//       response.status(200).end();
//     })
//     .catch(function() {
//       console.log('Something went wrong while creating a pet record');
//       response.status(400).end();
//     });
// });


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
  // TODO: save a new book to the DB
  const bookData = req.body;
  console.log(bookData);

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
  // TODO: delete specific book, by _id
  res.status(418).json({ status: 418, message: "arent you late for something?"});
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});