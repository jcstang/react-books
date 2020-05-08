const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require('mongoose');

const Housepet = require('./models/Housepets');

mongoose.connect("mongodb://localhost/pets", { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// test endpoint to ensure mongoose works
app.get('/mongoose', function (request, response) {
  // response.send('Moose bites can be pretti nasti');
  // TODO: make a new model
  Housepet
    .find({})
    .then(function (data) {
      response.json(data);
    });
});

app.post('/savePet', function(request, response) {
  const petData = request.body;

  console.log(petData);

  Housepet
    .create(petData)
    .then(function() {
      response.status(200).end();
    })
    .catch(function() {
      console.log('Something went wrong while creating a pet record');
      response.status(400).end();
    });
});

app.get('/api/saved-books', (req, res) => {
  // TODO: go get books from mongo
  // TODO: return all saved books
});

app.post('/api/books', (req, res) => {
  // TODO: save a new book to the DB
});

app.delete('/api/books/:id', (req, res) => {
  // TODO: delete specific book, by _id
});

// app.get('/api/someData', function (request, response) {
//   response.json({
//     foo: 'bar',
//     baz: 'quux'
//   })
// });

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});