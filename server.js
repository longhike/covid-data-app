const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

// DB STUFF
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/covid_db", { useNewUrlParser: true })
  .then(console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//express session
app.use(session({
  secret: "a very secret string",
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport stuff
app.use(passport.initialize())
app.use(passport.session())                  

// ROUTES
const router = require('./routes/controller')
app.use(router)


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });