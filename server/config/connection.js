const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/andresilva', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// HEROKU AGAIN

module.exports = mongoose.connection; 
