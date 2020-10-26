const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const passport = require('passport')

const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

// DB STUFF
require('dotenv').config()
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
//express session
app.use(session({
  secret: "a very secret string",
  resave: false,
  saveUninitialized: true
}))

// Passport stuff
app.use(passport.initialize())
app.use(passport.session())                  

// CONTROLLER
const controller = require('./controller/controller')
app.use(controller)


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });