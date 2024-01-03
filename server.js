require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 3000
// const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
// Create our express app
const app = express();

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', () => {
//     console.log('connected to mongo')
// })


app.get('/logs/new', function (req, res) {
  res.render('New'); // Get the New Page
});

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});