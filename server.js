require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Log = require('./models/logs')
// Create our express app
const app = express();

app.use(express.urlencoded({extended: true})) 

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})


// Index route
app.get('/logs', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    res.render('logs/Index', {
      logs: foundLogs
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


// NEW Route
app.get('/logs/new', function (req, res) {
  res.render('logs/New'); // Get the New Page
});



// logs
app.post('/logs', async (req, res) => {
  if(req.body.shipIsBroken === 'on'){
      req.body.shipIsBroken = true
  } 
  else {
      req.body.shipIsBroken = false
  }
  try {
      const createdLog = await Log.create(req.body)
      // res.redirect(`/logs/${createdLog._id}`)
  } 
  catch(error) {
      res.status(400).send({message: error.message})
  }

  console.log(req.body)
  res.send(req.body)
})

//Show Route
app.get('/logs/:id', async (req, res) => {
  try {
      const foundLog = await Log.findOne({_id: req.params.id})
      res.render('logs/Show', {
      log: foundLog
      })
  }
  catch(error) {
      res.status(400).send({ message: error.message })
  }
})


//EDIT Route
app.get('/logs/:id/edit', async (req, res)=>{
  try {
      const foundLog = await Log.findOne({'_id': req.params.id})
      res.render('logs/Edit', {
      log: foundLog
      })
  }
  catch(error) {
      res.status(400).send({ message: error.message })
  }
})

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});






//index
//new
//delete
//update
//create
//edit
//show