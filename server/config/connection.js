const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://bookSearch:booksearch@cluster0.wqut3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// HEROKU AGAIN

module.exports = mongoose.connection; 
