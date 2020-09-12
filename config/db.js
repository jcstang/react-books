const mongoose = require('mongoose');


const connectDB = async () => {
  
  console.log(`... process.env.NODE_ENV....... ${process.env.NODE_ENV}`)

  let MONGODB_URI = process.env.NODE_ENV
    ? process.env.MONGODB_URI
    : "mongodb://localhost/google_books";

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('-----> MongoDB Connected...');
    
  } catch (error) {
    console.error(error.message);
    // exit process with failure
    process.exit(1);
  }
}


module.exports = connectDB;